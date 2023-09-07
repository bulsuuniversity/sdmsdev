// url: http://localhost:3000/api/studentAccount 
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {
            student,
            appointmentDate,
            consultationReason,
            consultationType,
            status } = body;

        const newPost = await prisma.consultself.create({
            data: {
                student,
                appointmentDate,
                consultationReason,
                consultationType,
                status,
            },
        })
        return NextResponse.json({ message: "Submited", newPost })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "POST Error", error }, { status: 500 });
    }
};




export const GET = async () => {
    try {
        const posts = await prisma.consultself.findMany()
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}