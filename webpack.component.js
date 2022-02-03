const path = require('path'); // 这是node 自带的一个库 获取绝对路径的
const { VueLoaderPlugin } = require('vue-loader');

const glob = require('glob'); //这是node 自带的一个库 查找文件的
const list = {};

async function makeList(dirPash, list) {
    const files = glob.sync(`${dirPash}/**/index.js`);
    console.log('files:',files)
    for(let file of files){
        const componet = file.split(/[./]/)[2]; //正则 []除了里面之外的
        console.log('componet:',componet);
        list[componet] = `./${file}`;
    }
    console.log(list)
}

makeList('components/lib', list);

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js', //card.umd.js 
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd',
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            }
        ] 
    }
};