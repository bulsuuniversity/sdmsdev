// url: http://localhost:3000/api/studentAccount/${id}
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const post = await prisma.student.findUnique({
            where: {
                id
            }
        });
        return NextResponse.json(post);
    } catch (err) {
        return NextResponse.json(
            { message: "GET Error" },
            { status: 500 }
        );
    }
};


export const PUT = async (request, { params }) => {
    try {
        const { id } = params
        const body = await request.json();
        const { name, email, idNumber, phoneNumber } = body;

        const updatePost = await prisma.student.update({
            where: {
                id
            },
            data: {
                idNumber,
                name,
                email,
                phoneNumber,
                address,
                yearLevel,
                college,
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

export const DELETE = async (request, { params }) => {
    try {
        const { id } = params;

        await prisma.studentuser.delete({
            where: {
                id
            }
        });

        return NextResponse.json("Post has been deleted");
    } catch (err) {
        return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
    }
};
