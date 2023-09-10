import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const post = await prisma.home.findMany({
            where: {
                id
            }
        });
        return NextResponse.json(post);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
};

export const PUT = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { location, email, phoneNumber } = body;

        const updatePost = await prisma.home.update({
            where: {
                id
            },
            data: {
                address: location,
                email,
                phoneNumber,
            }
        })
        return NextResponse.json(updatePost);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "update Error", err }, { status: 500 })
    }
}
