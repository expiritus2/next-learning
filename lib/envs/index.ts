import devConfig from './dev.json';
import prodConfig from './prod.json';
import testConfig from './test.json';

export enum EnvEnums {
    DEVELOPMENT = 'dev',
    PRODUCTION = 'prod',
    TEST = 'test',
}

type Config = {};

const envMap = {
    [EnvEnums.DEVELOPMENT]: devConfig,
    [EnvEnums.PRODUCTION]: prodConfig,
    [EnvEnums.TEST]: testConfig,
} as { [key: string]: Config };

export const env = process.env.ENVIRONMENT || 'dev';

export const envConfig = envMap[env];
