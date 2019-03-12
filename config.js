const config = {
    projectName: 'home',
    title: '方运江个人官网',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: '#FF8C00',
        secondaryColor: '#F0E68C',
        activeColor: '#FF4040',
        tintColor: '#005068'
    },
    highlight: {
        theme: 'solarized-dark'
    },
    documentPath: 'docs', //默认为docs
    styles: [],
    scripts: [],
    footer: 'lib/Footer.js', //设置footer
    sideNavCollapsible: true, // 侧边栏是否可以折叠
    homePage: {
        name: '方运江个人官网',
        path: 'index.md'
    },
    menus: [
        {
            name: '照片',
            mainPage: '/photo',
        },
        {
            name: '博客',
            mainPage: '/blog',
        },
    ]
};

module.exports = config;
