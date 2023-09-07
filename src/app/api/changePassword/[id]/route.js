import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const PUT = async (request, { params }) => {
    try {
        const body = await request.json();
        const { password } = body;
        const { id } = params;
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const updatePost = await prisma.student.update({
            where: {
                id
            },
            data: {
                password: hashedPassword
            }
        })
        return NextResponse.json(updatePost);
    } catch (err) {
        return NextResponse.json({ message: "update Error", err }, { status: 500 })
    }
}