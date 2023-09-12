import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const body = await request.json();
        const {
            address,
            email,
            phoneNumber,
            about
        } = body;

        const newPost = await prisma.home.create({
            data: {
                address,
                email,
                phoneNumber,
                about
            },
        })
        return NextResponse.json({ message: "Submited", newPost })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "POST Error", error }, { status: 500 });
    }
};