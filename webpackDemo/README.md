# 入口文件配置：entry参数

entry可以是字符串（单入口），可以是数组（多入口），但为了后续发展，请务必使用object，因为object中的key在webpack里相当于此入口的name，既可以后续用来拼生成文件的路径，也可以用来作为此入口的唯一标识。 推荐的形式如下：

```
entry: { // pagesDir是前面准备好的入口文件集合目录的路径
	'alert/index': path.resolve(pagesDir, `./alert/index/page`), 
	'index/login': path.resolve(pagesDir, `./index/login/page`), 
	'index/index': path.resolve(pagesDir, `./index/index/page`),
},
```

＃ 输出文件：output参数

output参数告诉webpack以什么方式来生成/输出文件，值得注意的是，与entry不同，output相当于一套规则，所有的入口都必须使用这一套规则，不能针对某一个特定的入口来制定output规则。output参数里有这几个子参数是比较常用的：path、publicPath、filename、chunkFilename，示例：
```
output: {
	path: buildDir, // var buildDir = path.resolve(__dirname, './build');
	publicPath: '../../../../build/',
	filename: '[name]/entry.js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
	chunkFilename: '[id].bundle.js',
},	
```

# 各种Loader配置：module参数

# 添加额外功能：plugins参数