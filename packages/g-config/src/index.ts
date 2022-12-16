import getJsonConfig from './getJsonConfig';
import getYamlConfig from './getYamlConfig';
import getTsConfig from './getTsConfig';

async function getConfig(
  filePath: string,
  fileType: 'json' | 'yaml' | 'yml' | 'ts',
) {
  return {
    json: () => getJsonConfig(filePath),
    yaml: () => getYamlConfig(filePath),
    yml: () => getYamlConfig(filePath),
    ts: () => getTsConfig(filePath),
  }[fileType]();
}

export default getConfig;
