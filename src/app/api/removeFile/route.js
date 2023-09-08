import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const DELETE = async (req) => {

    const { fileName, fileDir } = await req.json()
    const filePathToDelete = path.join(process.cwd(), fileDir, fileName);

    try {
        fs.unlinkSync(filePathToDelete);
        console.log('File deleted successfully');
        return NextResponse.json({ message: "Deleted", filePathToDelete })
    } catch (error) {
        console.error('Error deleting file:', error);
        return NextResponse.json({ message: "error", error })
    }
}
