import prisma from "@/app/libs/prismadb";
import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

export const PUT = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { file, prevProfileImage } = body;


        if (prevProfileImage) {
            await cloudinary.uploader.destroy(prevProfileImage, { invalidate: true });

        }

        const uploadResponse = await cloudinary.uploader.upload(file, {
            upload_preset: "bulsu",
            folder: 'profile'
        });


        const updatePost = await prisma.student.update({
            where: { id },
            data: {
                profile: uploadResponse.secure_url,
                profilePublicId: uploadResponse.public_id
            }
        });


        if (!updatePost) {
            return NextResponse.json({ message: "Post not found" }, { status: 404 });
        }
        return NextResponse.json(updatePost, { message: "Topic updated", status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Update error" }, { status: 500 });
    }
};
