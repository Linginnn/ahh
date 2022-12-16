import path from 'path';
import getConfig from '@/index';
import { rootCatalogue } from '@/utils';

describe('Default cases', () => {
  test('get json config', async () => {
    const filePath = path.join(rootCatalogue, 'tests/testFiles/test.json');
    const data = await getConfig(filePath, 'json');
    expect(data).toStrictEqual({ ceshi: 'config' });
  });
  test('get yaml config', async () => {
    const filePath = path.join(rootCatalogue, 'tests/testFiles/test.yaml');
    const data = await getConfig(filePath, 'yaml');
    expect(data).toStrictEqual({ ceshi: 'config' });
  });
  test('get yml config', async () => {
    const filePath = path.join(rootCatalogue, 'tests/testFiles/test.yml');
    const data = await getConfig(filePath, 'yml');
    expect(data).toStrictEqual({ ceshi: 'config' });
  });
  test('get ts config', async () => {
    const filePath = path.join(rootCatalogue, 'tests/testFiles/test.ts');
    const data = await getConfig(filePath, 'ts');
    expect(data).toStrictEqual({ ceshi: 'config' });
  });
});
