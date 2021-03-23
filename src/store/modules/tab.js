const state = {
    menu: [],
    isCollapse: false,
    currentMenu: null
}

const mutations = {
    selectMenu (state, val) {
        // val.name !== 'home' ? state.currentMenu = val:state.currentMenu = null;
        if (val.name !== 'home') {
            state.currentMenu = val
        } else {
            state.currentMenu = null
        }
    },
    collapseMenu (state) {
        state.isCollapse = !state.isCollapse // 折叠侧边菜单栏
    }
}

const actions = {

}

export default {
    state,
    mutations,
    actions
}
