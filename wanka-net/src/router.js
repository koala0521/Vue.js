const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        name:"index",
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path:"/infos",
        name:"infos",
        meta:{
            title:"公司信息"
        },
        component:(resolve) => require(['./views/companyInfos.vue'] , resolve )

    }
    ,{
        path:"/culture",
        name:"culture",
        meta:{
            title:"企业文化"
        },
        component:(resolve) => require(['./views/culture.vue'] , resolve )

    },{
        path:"/system",
        name:"system",
        meta:{
            title:"业务体系"
        },
        component:(resolve) => require(['./views/system.vue'] , resolve )

    },{
        path:"/investor",
        name:"investor",
        meta:{
            title:"投资者关系"
        },
        component:(resolve) => require(['./views/investorRelations.vue'] , resolve )

    },{
        path:"/investor/:id",
        name:"investor",
        meta:{
            title:"投资者关系"
        },
        component:(resolve) => require(['./views/investor-one.vue'] , resolve )

    }

    ,{
        path:"*",
        redirect:"/"

    }
];
export default routers;