const path = require('path');

module.exports = {
    entry: './app2/app.ts',
        output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './build')
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve:{
        extensions: ['.ts', '.js']
    }
}
