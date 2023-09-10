import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const updatePost = await prisma.home.findMany({
            where: {
                id
            },
        })
        return NextResponse.json(updatePost);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "update Error", err }, { status: 500 })
    }
}

export const PUT = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { about } = body;

        const updatePost = await prisma.home.update({
            where: {
                id
            },
            data: {
                about,
            }
        })
        return NextResponse.json(updatePost);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "update Error", err }, { status: 500 })
    }
}
