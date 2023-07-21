import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: "jest-environment-jsdom",
    verbose: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ['./node_modules/'],
};

export default config;