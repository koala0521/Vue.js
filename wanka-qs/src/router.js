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
        // name:'index',
        meta: {
            title: '快应用统计'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
            
            // 主页
            {
                path: 'home',
                component: (resolve) => require(['./views/app-list.vue'], resolve),
                name: 'list',
                meta: {
                    title: '主页'
                }                   
            },

            // 报表
            {
                path: 'charts',
                component: (resolve) => require(['./views/charts.vue'], resolve),
                children: [
                    {
                        path: 'trend',
                        component: (resolve) => require(['./views/charts.vue'], resolve),
                        name: 'trend',
                        meta: {
                            title: '报表 - 趋势分析'
                        }                
                    },
                    {
                        path: '*',
                        redirect: 'trend'
                    }                    
                ]
            },
            // 开发文档
            {
                path: 'doc',
                component: (resolve) => require(['./views/doc.vue'], resolve),
                name: 'doc',
                meta: {
                    title: '开发文档'
                }                
            },            
            {
                path: '*',
                redirect: 'home'
            }
        ]
    },
    {
        path: '*',
        rredirect: { name: 'list' }
    }
]
;
export default routers;