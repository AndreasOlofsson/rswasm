const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './client/index.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: path.resolve(__dirname, "pkg"),
            },
        ],
    },
    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname),
        }),
    ]
}