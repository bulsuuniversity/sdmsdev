// Import required modules
const fs = require('fs');
const path = require('path');

// Define a file name
const fileName = 'example.txt';

// Get the current directory (__dirname) and construct a file path
const filePath = path.join(__dirname, fileName);

// Create a server-side route to read the file
export default async function handler(req, res) {
  try {
    // Read the contents of the file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.status(200).json({ content: fileContent });
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Error reading file' });
  }
}
