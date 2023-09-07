import fs from 'fs';
import path from 'path';

export const DELETE = async (req, res) => {
  const filePathToDelete = path.join(process.cwd(), 'fileToDelete', 'file.jsx'); // Replace with the actual file path

  try {
    fs.unlinkSync(filePathToDelete);
    console.log('File deleted successfully');
    res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ error: 'Error deleting file' });
  }
}
