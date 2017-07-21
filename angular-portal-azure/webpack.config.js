const path = require('path');

module.exports = {
    entry: './angularportalazure2/index.ts',
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
