import fs from 'fs';

async function readFile(filePath: string) {
  try {
    const data = fs.readFileSync(filePath);
    return data;
  } catch (error) {
    throw Error(error as string);
  }
}

export default readFile;
