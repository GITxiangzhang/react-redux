module.exports = {
    entry:{
        bundle:   './counter.js',
        bundle2:   './counter2.js',
    } ,
    output: {
        filename: '[name].js'
    },
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
        ]
    },

};
