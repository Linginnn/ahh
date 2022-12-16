import readFile from './readFile';

const parseJsonString = (data: Buffer) => {
  return JSON.parse(data.toString());
};

async function readJson(filePath: string) {
  const data = await readFile(filePath);
  return parseJsonString(data);
}

export default readJson;

export { parseJsonString };
