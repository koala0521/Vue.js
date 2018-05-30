const routers = [
    {
        path: '/index/',
        meta: {
            title: '首页-快应用统计'
        },
        // redirect:'today',
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            {
                path: 'today',
                component: (resolve) => require(['./views/basicSituation/todaySituation.vue'], resolve),
                name:'today'
            },
            {
                path: 'trend',
                component: (resolve) => require(['./views/basicSituation/trendAnalysis.vue'], resolve),
                name:'trend'
            },
            {
                path: '',
                redirect:'today'
            }
        ]
    },
    {
        path: '/setting',
        component: (resolve) => require(['./views/setting.vue'], resolve),
    },
    {
        path:'*',
        redirect:'/index'
    }
]
;
export default routers;