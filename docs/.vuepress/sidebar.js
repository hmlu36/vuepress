const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

const readFilesFromDir = (path) => {
    const files = fs.readdirSync(path);
    return files
        .filter((file) => file !== 'README.md')
        .map((file) => file.slice(0, -3));
};

const getSidebars = (dir) => {
    const dirPath = path.join(__dirname, '..', dir);
    //console.log(dirPath);
    const files = readFilesFromDir(dirPath);
    const result = files.map((file) => ([
        `/${dir}/${file}`,
        file
    ]));
    //console.log("result:" + JSON.stringify(result));
    return result;
};
/*
const getPosts = (dir) => {
    const postDir = path.resolve(__dirname, '..', dir);
    return fs
        .readdirSync(postDir)
        .map((file) => {
            const src = fs.readFileSync(path.join(postDir, file), 'utf-8');
            const { data, content, excerpt } = matter(src, { excerpt: true });
            if (data.title) {
                console.log(JSON.stringify(data));
                const post = {
                    title: data.title,
                    href: `/${dir}/${file.replace(/\.md$/, '.html')}`,
                    date: formatDate(data.date),
                    excerpt
                };
                return post;
            }
        })
        .sort((a, b) => b.date.time - a.date.time);
};

const formatDate = (date) => {
    if (!date instanceof Date) {
        date = new Date(date);
    }
    date.setUTCHours(12);
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
};
*/

module.exports = {
    '/Bike/': [
        {
            title: '🚴假日騎士日誌',
            path: '/Bike/BikeTravel/',
            children: getSidebars('Bike/BikeTravel')
        },
        {
            title: '🚲自行車know-how',
            path: '/Bike/BikeInfo/',
            children: getSidebars('Bike/BikeInfo')
        },
    ],
    '/WorkSkill/': [
        {
            title: '💼工作技巧',
            children: getSidebars('WorkSkill')
        },
    ],
    '/Stock/': [
        {
            title: '📈 股市',
            children: getSidebars('Stock')
        },
    ],
    '/Wedding/': [
        {
            title: '💏婚禮相關',
            children: getSidebars('Wedding')
        },
    ]
};