import { parse } from 'yaml';
import readFile from './readFile';

const parseYamlString = (data: Buffer) => {
  return parse(data.toString());
};

async function readYaml(filePath: string) {
  const data = await readFile(filePath);
  return parseYamlString(data);
}

export default readYaml;

export { parseYamlString };
