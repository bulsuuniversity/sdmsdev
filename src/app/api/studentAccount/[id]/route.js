// url: http://localhost:3000/api/studentAccount/12345
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const GET = async (request, { params }) => {
  try {
    const { id } = params;

    const post = await prisma.studentuser.findUnique({
        where: {
            id
        }
    });

    if(!post) {
        return NextResponse.json(
            {message: "Post not found", err},
            {status: 404}
        )
    }

    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const {name, email, phoneNumber, credentials, password} = body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const {id} = params;

        const updatePost = await prisma.studentuser.update({
            where: {
                id
            },
            data: {
                name,
                email,
                phoneNumber,
                credentials,
                hashedPassword
            }
        })

        if(!updatePost) {
            return NextResponse.json(
                {message: "Post not found", err},
                {status: 404}
            )
        }

        return NextResponse.json(updatePost);

    } catch(err) {
        return NextResponse.json({message: "update Error", err}, {status: 500})
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
