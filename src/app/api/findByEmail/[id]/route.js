import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
    try {
        const data = params
        const post = await prisma.student.findUnique({
            where: {
                email: data.id
            }
        });
        return NextResponse.json(post);
    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { message: "GET Error" },
            { status: 500 }
        );
    }
};