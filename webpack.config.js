const path = require('path')
module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    watch: true,

    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    'style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        publicPath: path.resolve(__dirname, 'dist', 'images')
                    }
                }
            },

            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node-modules/'
            }

        ]
    }, resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}