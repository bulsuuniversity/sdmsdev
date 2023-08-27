// url: http://localhost:3000/api/studentAccount/12345
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';


export const GET = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { password } = body

        const post = await prisma.admin.findUnique({
            where: {
                id
            }
        });

        if (post && bcrypt.compareSync(password, user.password)) {
            return NextResponse.json(post);
        } else {
            return NextResponse.json(
                { message: "Post not found", err },
                { status: 404 }
            )
        }
    } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { name, password, carousel, contactUs, about } = body;
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const updatePost = await prisma.admin.update({
            where: {
                id
            },
            data: {
                name,
                password: hashedPassword,
                carousel,
                contactUs,
                about
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

