import type {Config} from 'jest';

const config: Config = {
    testEnvironment: "jest-environment-jsdom",
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coverageDirectory: "coverage",  
    preset: "ts-jest/presets/js-with-ts",
    transformIgnorePatterns: [ "/node_modules/(?!MODULE_NAME_HERE).+\\.js$"],
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.test.json"
        }
    }
};

export default config;