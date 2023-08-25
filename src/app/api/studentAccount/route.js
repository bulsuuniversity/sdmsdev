// url: http://localhost:3000/api/studentAccount 
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export const POST = async (request) => {
    try {

        const body = await request.json();
        const { email, idNumber, phoneNumber, credentials, password } = body;

        const saltRounds = 10

        const uploadResponse = await cloudinary.uploader.upload(credentials, {
            upload_preset: "bulsu",
            folder: 'credentials'
        });
        if (uploadResponse.secure_url) {
            console.log(uploadResponse)
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const newPost = await prisma.student.create({
                data: {
                    email: email,
                    phoneNumber: phoneNumber,
                    idNumber: idNumber,
                    credentials: uploadResponse.secure_url,
                    password: hashedPassword
                },
            })
            return NextResponse.json({ message: "POST Success", newPost })
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "POST Error", error }, { status: 500 });
    }
};



// const newPost = await prisma.student.create({
//     data: {
//         name: 'title',
//         email: 'Desc',
//         phoneNumber: '11223456',
//         credentials: 'https://res.cloudinary.com/dckxajww8/image/upload/v1692878702/credentials/hxcci0on69jxia60ctaq.png',
//         password: '123456789'
//     }
// })
// console.log(newPost)
// return NextResponse.json(newPost);



export const GET = async () => {
    try {

        const posts = await prisma.studentuser.findMany()

        return NextResponse.json(posts);

    } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}