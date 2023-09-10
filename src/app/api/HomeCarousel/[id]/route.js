// url: http://localhost:3000/api/studentAccount/12345
import prisma from "@/app/libs/prismadb";
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export const POST = async (request, { params }) => {
    try {
        const body = await request.json();
        const { publicId } = body;
        const { id } = params;
        const deletePost = await cloudinary.uploader.destroy(publicId, { invalidate: true });
        if (deletePost) {
            const updatePost = await prisma.carousel.delete({
                where: {
                    id
                }
            })
            return NextResponse.json(updatePost);
        }
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "delete Error", err }, { status: 500 })
    }
}
