module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,css,js,eot,svg,ttf,woff,woff2,otf,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};