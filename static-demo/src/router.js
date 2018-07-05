const routers = [
    // 登陆页面
    {
        path: '/login',
        component: (resolve) => require(['./views/login.vue'], resolve),
        meta: {
            title: '快应用统计-登陆'
        },
        name:'login'
    },
    // 登陆后的页面
    {
        path: '',
        meta: {
            title: '快应用统计'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            
            // 主页
            {
                path: 'home',
                component: (resolve) => require(['./views/app_list.vue'], resolve),
                name: 'list',
                meta: {
                    title: '主页'
                }                   
            },

            // 报表
            {
                path: 'charts',
                component: (resolve) => require(['./views/app_charts.vue'], resolve),
                children: [
                    // 默认展示趋势分析
                    {
                        path: 'trend',
                        component: (resolve) => require(['./views/app_charts_trend.vue'], resolve),
                        name: 'trend',
                        meta: {
                            title: '报表 - 趋势分析'
                        }                
                    },{
                        path: 'day',
                        component: (resolve) => require(['./views/app_charts_day.vue'], resolve),
                        name: 'day',
                        meta: {
                            title: '报表 - 今日概况'
                        }                          
                    },            
                    {
                        path: '',
                        redirect: {name:'trend'}
                    }                   
                ]
            },
            // 开发文档
            {
                path: 'doc',
                component: (resolve) => require(['./views/app_doc.vue'], resolve),
                name: 'doc',
                meta: {
                    title: '开发文档'
                }                
            },            
            {
                path: '',
                redirect: 'home'
            }
        ]
    },
    {
        path: '*',
        redirect: { name: 'list' }
    }
]
;
export default routers;