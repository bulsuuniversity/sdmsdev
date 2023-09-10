import prisma from "@/app/libs/prismadb"
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export const POST = async (request) => {
    try {
        const body = await request.json();
        const { file } = body;

        const uploadResponse = await cloudinary.uploader.upload(file, {
            upload_preset: "bulsu",
            folder: 'home'
        });
        if (uploadResponse) {
            const updatePost = await prisma.carousel.create({
                data: {
                    image: uploadResponse.secure_url,
                    publicId: uploadResponse.public_id
                }
            })
            return NextResponse.json(updatePost);
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "POST Error", error }, { status: 500 });
    }
};


export const GET = async () => {
    try {
        const posts = await prisma.carousel.findMany()
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}