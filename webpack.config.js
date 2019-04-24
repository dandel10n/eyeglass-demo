const path = require('path');
const eyeglass = require('eyeglass');

module.exports = {
    entry: [ './src/theme.two.scss', './src/theme.one.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'sass-loader',
                        options: eyeglass({
                            includePaths: ['node_modules/']
                        })
                    }
                ]
            }
        ]
    }
};