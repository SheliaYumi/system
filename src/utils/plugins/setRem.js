/**
 * html根节点设置font-size
 * @param {designwidth} Number 设计稿的宽度
 */
export const setRem = designwidth => {
    function fontSizeFun () {
        const fontSize = 100
        const relwidth = document.documentElement.clientWidth
        const relfontSize = (fontSize * relwidth) / designwidth + 'px'
        document.getElementsByTagName('html')[0].style.fontSize = relfontSize
    }
    fontSizeFun()
    window.onresize = fontSizeFun
}
