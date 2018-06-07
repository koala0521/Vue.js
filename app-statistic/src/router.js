const routers = [
    {
        path: '/index/',
        name:'index',
        meta: {
            title: '首页-快应用统计'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            // 今日概况
            // {
            //     path: 'today',
            //     component: (resolve) => require(['./views/basicSituation/todaySituation.vue'], resolve),
            //     name:'today',
            //     meta: {
            //         title: '今日概况'
            //     }
            // },
            //  趋势分析
            {
                path: 'trend',
                component: (resolve) => require(['./views/basicSituation/trendAnalysis.vue'], resolve),
                name:'trend',
                meta: {
                    title: '趋势分析'
                }                
            },
        //     // 用户活跃度
        //     {
        //         path: 'activity',
        //         component: (resolve) => require(['./views/basicSituation/activity.vue'], resolve),
        //         name:'activity'
        //     },
        //     // 用户存留
        //     {
        //         path: 'retention',
        //         component: (resolve) => require(['./views/basicSituation/retention.vue'], resolve),
        //         name:'retention'
        //     },
        //     // 手机厂商
        //     {
        //         path: 'vendor',
        //         component: (resolve) => require(['./views/channel/vendor.vue'], resolve),
        //         name:'vendor'
        //     },
        //      // 受访页
        //      {
        //         path: 'visitedPage',
        //         component: (resolve) => require(['./views/pageAnalysis/visitedPage.vue'], resolve),
        //         name:'visitedPage'
        //     },            
        //      // 地域分析
        //      {
        //         path: 'areaAnalysis',
        //         component: (resolve) => require(['./views/userPortrait/areaAnalysis.vue'], resolve),
        //         name:'areaAnalysis'
        //     },
        //     // 终端分析
        //     {
        //        path: 'terminalAnalysis',
        //        component: (resolve) => require(['./views/userPortrait/terminalAnalysis.vue'], resolve),
        //        name:'terminalAnalysis'
        //    },
            {
                path: '',
                redirect:'trend'
            }
        ]
    },
    // {
    //     path: '/setting',
    //     component: (resolve) => require(['./views/setting.vue'], resolve),
    // },
    // {
    //     path: '/login',
    //     component: (resolve) => require(['./views/login.vue'], resolve),
    //     name:'login'
    // },
    {
        path:'*',
        redirect:'/index/trend'
    }
]
;
export default routers;