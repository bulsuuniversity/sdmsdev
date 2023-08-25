import bcrypt from 'bcryptjs';

export const PATCH = async (request, { params }) => {
    try {
        const body = await request.json();
        const { password } = body;
        const { id } = params;
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const updatePost = await prisma.studentuser.update({
            where: {
                id
            },
            data: {
                hashedPassword
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