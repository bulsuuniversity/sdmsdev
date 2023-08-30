// url: http://localhost:3000/api/studentAccount 
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import { v2 as cloudinary } from 'cloudinary'
import { getServerSession } from "next-auth";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export const POST = async (request) => {
    try {

        const body = await request.json();
        const {
            reporter,
            actionOfDiscipline,
            offender,
            college,
            attachment,
            dateOfIncident,
            platformOfIncident,
            rateOfOccurence,
            describeTheSituation } = body;

        const uploadResponse = await cloudinary.uploader.upload(attachment, {
            upload_preset: "bulsu",
            folder: 'report'
        });
        if (uploadResponse.secure_url) {
            console.log(uploadResponse)
            const newPost = await prisma.studentreport.create({
                data: {
                    reporter,
                    actionOfDiscipline,
                    offender,
                    college,
                    attachment: uploadResponse.secure_url,
                    dateOfIncident,
                    platformOfIncident,
                    rateOfOccurence,
                    describeTheSituation
                },
            })
            return NextResponse.json({ message: "Registered", newPost })
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "POST Error", error }, { status: 500 });
    }
};




export const GET = async () => {
    const session = await getServerSession(request)

    try {
        if (session) {
            const posts = await prisma.student.findMany()
            return NextResponse.json(posts);
        }
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}