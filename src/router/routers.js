const router = [
    {
        path: '/',
        redirect: '/login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue')
    },
    {
        path: '/home',
        redirect: '/index',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue'),
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import(/* webpackChunkName: "inde" */ '@/views/children/index.vue')
            },
            {
                path: '/teachersInfo',
                name: 'TeachersInfo',
                component: () => import(/* webpackChunkName: "teachersInfo" */ '@/views/children/teachersInfo.vue')
            },
            {
                path: '/studentsInfo',
                name: 'StudentsInfo',
                component: () => import(/* webpackChunkName: "studentsInfo" */ '@/views/children/studentsInfo.vue')
            },
            {
                path: '/students',
                name: 'Students',
                component: () => import(/* webpackChunkName: "students" */ '@/views/children/students.vue')
            },
            {
                path: '/gradeManage',
                name: 'GradeManage',
                component: () => import(/* webpackChunkName: "gradeManage" */ '@/views/children/gradeManage.vue')
            },
            {
                path: '/seeGrade',
                name: 'SeeGrade',
                component: () => import(/* webpackChunkName: "seeGrade" */ '@/views/children/seeGrade.vue')
            },
            {
                path: '/rebuild',
                name: 'Rebuild',
                component: () => import(/* webpackChunkName: "rebuild" */ '@/views/children/rebuild.vue')
            },
            {
                path: '/rebuildManage',
                name: 'RebuildManage',
                component: () => import(/* webpackChunkName: "rebuildManage" */ '@/views/children/rebuildManage.vue')
            },
            {
                path: '/userManage',
                name: 'userManage',
                component: () => import(/* webpackChunkName: "userManage" */ '@/views/children/userManage.vue')
            },
            {
                path: '/courseManage',
                name: 'courseManage',
                component: () => import(/* webpackChunkName: "courseManage" */ '@/views/children/courseManage.vue')
            },
            {
                path: '/editPsd',
                name: 'EditPsd',
                component: () => import(/* webpackChunkName: "editPsd" */ '@/views/children/editPsd.vue')
            }
        ]
    }
]

export default router
