module.exports = {
    plugins: {
        'autoprefixer': {},
        'postcss-assets-packages': {
            packages: {
                'cdn_1': 'https://test.cdn1',
                'cdn_2': 'https://test.cdn2'
            }
        },
        'postcss-inline-svg': {path: 'src/assets/svg'},
        'postcss-assets': {
            // basePath: './src/',
            loadPaths: [
                './src/assets/images/'
            ],
            cachebuster: true
        },
        'postcss-easy-media-query' : {}
    }
};