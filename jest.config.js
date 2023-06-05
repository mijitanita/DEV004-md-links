export default {
    transform: {
        '^.+\\.(m?js|ts)$': 'babel-jest', // transpile mjs, mts, js, ts files
    },
   /* testEnvironment: 'node',
    transformIgnorePatterns: ['node_modules/(?!(node-fetch)/)'],*/
};
