const {
	override,
	fixBabelImports,
	addPostcssPlugins
} = require('customize-cra');

module.exports = function override(config, env) {
	return config;
};
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	}),
	addPostcssPlugins([
		require('postcss-pxtorem')({
			rootValue: 16,
			propList: ['*']
		}),
	]) // 原文链接：https://blog.csdn.net/quhongqiang/article/details/95043246
);