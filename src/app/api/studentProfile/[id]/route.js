import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { profileImage, prevProfileImage } = body;

        if (prevProfileImage) {
            await cloudinary.uploader
                .destroy(prevProfileImage, {invalidate: true,});
        }

        const uploadResponse = await cloudinary.uploader.upload(profileImage, {
            upload_preset: "bulsu",
            folder: 'credentials'
        });

        const updatePost = await prisma.studentuser.update({
            where: {
                id
            },
            data: {
                credentials: uploadResponse.secure_url,
                profilePublicId: uploadResponse.public_id
            }
        })

        if (!updatePost) {
            return NextResponse.json(
                { message: "Post not found", err },
                { status: 404 }
            )
        }

        return NextResponse.json(updatePost);

    } catch (err) {
        return NextResponse.json({ message: "update Error", err }, { status: 500 })
    }
}