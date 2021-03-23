module.exports = {
    /* pwa: {
          iconPaths: {
            favicon32: 'faviicon.svg',
            favicon16: 'faviicon.svg',
            appleTouchIcon: 'faviicon.svg',
            maskIcon: 'faviicon.svg',
            msTileImage: 'faviicon.svg'
          }
        }, */
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '重修在线申报系统'
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        // subpage: ''
    },
    devServer: {
        // 配置自动启动浏览器
        open: true,
        // 主机名
        host: 'localhost',
        // 端口号
        port: 8080,
        // 支持https，使用自签名证书
        https: false,
        // 模块热替换
        hot: true,
        // 热更新会刷新页面
        hotOnly: false,
        // 当出现编译器错误或警告时，在浏览器中显示
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/proxy': {
                target: 'http://promotion-server.group-7.qingtian668.com',
                secure: false, // 关闭安全校验(https校验)
                changeOrigin: true, // 替换origin参数
                pathRewrite: {
                    '^/proxy': ''
                }, // 重写路径
                onProxyRes (proxyRes, req, res) {
                    const cookies = proxyRes.headers['set-cookie']
                    // 修改cookie Path
                    if (cookies) {
                        const domain = req.headers.referer
                            .split('//')[1] // 去除协议
                            .split('/')[0] // 去除 pathname
                            .split(':')[0] // 去除端口号
                        proxyRes.headers['set-cookie'] = cookies.map((cookie) => {
                            return cookie
                                .split(';')
                                .map((c) => {
                                    const [key, value] = c.trim().split('=')
                                    if (key === 'Domain') {
                                        return `Domain=${domain}`
                                    }
                                    return `${key}=${value}`
                                })
                                .join('; ')
                        })
                    }
                }
            }
        }
    }
}
