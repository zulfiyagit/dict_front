module.exports = {
	entry: "./app/components/Main.js",
	output: {
		filemane: "puplic/bundle.js"
	},
	module: {
		loaders: [ 
		{
			test: /\.jsx&$/,
			exlude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}
		]
	}



};