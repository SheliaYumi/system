// const prodConfigs = {
//     // 开发一套环境，推dev1分支
//     'promotion-oms.dev1.fe.sdh-dev.com': {
//         apiHost: 'http://promotion-oms.dev1.server.sdh-dev.com',
//         staticHost: ''
//     },
//     // 测试环境
//     'promotion-oms.test1.fe.sdh-test.com': {
//         apiHost: 'http://promotion-oms.test1.server.sdh-test.com',
//         staticHost: ''
//     },
//     // 预发还没配
//     'www-pre.zjyushi.com': {
//         apiHost: 'https://zjyushi-oms-server-pre.youximao.com',
//         staticHost: ''
//     },
//     // 正式还没配
//     'www.zjyushi.com': {
//         apiHost: 'https://zjyushi-oms-server.youximao.com',
//         staticHost: ''
//     }
// }

// 线上环境默认的配置
// const defaultConfig = {
//     apiHost: 'http://zjyushi-oms-server.youximao.com',
//     staticHost: ''
// }

// 本地环境配置
const localConfig = {
    // apiHost: 'http://promotion-oms.dev1.server.sdh-dev.com',
    apiHost: 'http://promotion-server.group-7.qingtian668.com'
    // staticHost: ''
}

// let hostConfig = prodConfigs[location.hostname] || defaultConfig
// if (process.env.NODE_ENV === 'development') hostConfig = localConfig
// window.loginUrl = location.hostname

// export default hostConfig.apiHost
export default localConfig.apiHost
