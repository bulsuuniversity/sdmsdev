import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export const DELETE = async (req) => {
  try {
    const { fileNames, fileDir } = await req.json();
    const deletedFiles = [];

    for (const fileName of fileNames) {
      const filePathToDelete = path.join(process.cwd(), fileDir, fileName);
      fs.unlinkSync(filePathToDelete);
      deletedFiles.push(fileName);
      console.log(`File "${fileName}" deleted successfully`);
    }

    return NextResponse.json({ message: "Deleted", deletedFiles });
  } catch (error) {
    console.error('Error deleting files:', error);
    return NextResponse.json({ message: "error", error });
  }
};

