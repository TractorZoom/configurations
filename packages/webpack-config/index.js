const { resolve } = require('path');

module.exports = (handlers) => {
    return {
        entry: handlers,
        mode: process.env.ENV === 'Test' || 'dev' ? 'development' : 'production',
        module: { rules: [{ loader: 'ts-loader', test: /\.ts$/ }] },
        output: {
            filename: '[name].js',
            libraryTarget: 'commonjs2',
            path: resolve(process.cwd(), 'build'),
        },
        resolve: {
            alias: {
                '@src': resolve(process.cwd(), 'src/'),
            },
            extensions: ['.js', '.ts'],
        },
        target: 'node',
    }
}
