async function readJson(filePath: string) {
  const data = await import(filePath);
  return data.default;
}

export default readJson;
