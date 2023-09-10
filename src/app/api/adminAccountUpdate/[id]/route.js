// url: http://localhost:3000/api/studentAccount/12345
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { current } = body;
        const post = await prisma.student.findUnique({
            where: {
                id
            }
        });
        const same = bcrypt.compareSync(current, post.password)
        return NextResponse.json(same);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
};

export const PUT = async (request, { params }) => {
    try {
        const { id } = params;
        const body = await request.json();
        const { confirm } = body;
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(confirm, saltRounds);
        const updatePost = await prisma.student.update({
            where: {
                id
            },
            data: {
                password: hashedPassword,
            }
        })
        return NextResponse.json(updatePost);
    } catch (err) {
        console.log(err)
        return NextResponse.json({ message: "update Error", err }, { status: 500 })
    }
}

