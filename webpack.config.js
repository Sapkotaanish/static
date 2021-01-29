const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	plugins: [
		new HtmlWebpackPlugin({
			hash: true, 
			template: './src/index.html'
		})
	],

	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif|svg|ttf|woff|eot|woff2")$/i,
				loader: 'file-loader',
				options: { name: 'images/[name].[ext]' }
			}
		]
	}
}