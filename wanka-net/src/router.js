
const Index = '/index';

const Infos = '/infos';

const Culture = '/culture';

const System = '/system';

const Investor = '/investor';

// 获取语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

console.log( ' 检测语言动态设置meta信息 ' , lang );


const routers = [
    {
        path: Index,
        meta: {
            title: '首页'
        },
        name:'index',
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
    
    // 二级路由
    ,{
        path:Infos,
        name:'infos',
        meta:{
            title:'公司信息'
        },
        component:(resolve) => require(['./views/companyInfos.vue'] , resolve )
    }
    ,{
        path:Culture,
        name:'culture',
        meta:{
            title:'企业文化'
        },
        component:(resolve) => require(['./views/culture.vue'] , resolve )

    },{
        path:System,
        name:'system',
        meta:{
            title:'业务体系'
        },
        component:(resolve) => require(['./views/system.vue'] , resolve )

    },{
        path:Investor,
        name:'investor',
        meta:{
            title:'投资者关系'
        },
        component:(resolve) => require(['./views/investorRelations.vue'] , resolve )

    } 

    // 三级路由

    ,{
        path: Index + '/statement',
        name:'statement',
        meta:{
            title:'免责声明'
        },
        component:(resolve) => require(['./views/indexStatement.vue'] , resolve )
    }
    ,{
        path: Index + '/introduce',
        name:'introduce',
        meta:{
            title:'玩咖介绍'
        },
        component:(resolve) => require(['./views/indexIntroduce.vue'] , resolve )
    }   
    ,{
        path:Investor + '/contact',
        name:'contact',
        meta:{
            title:'联系我们'
        },
        component:(resolve) => require(['./views/investorContact.vue'] , resolve )
    }
    ,{
        path:Investor + '/control',
        name:'control',
        meta:{
            title:'企业管制'
        },
        component:(resolve) => require(['./views/investorControl.vue'] , resolve )
    }    
    ,{
        path:Investor + '/member',
        name:'member',
        meta:{
            title:'董事会成员'
        },
        component:(resolve) => require(['./views/investorBoardMember.vue'] , resolve )
    }
    ,{
        path:Investor + '/financenews',
        name:'financeNews',
        meta:{
            title:'财务新闻稿'
        },
        component:(resolve) => require(['./views/investorContactFinanceNews.vue'] , resolve )
    }    
    ,{
        path:Investor + '/news',
        name:'news',
        meta:{
            title:'公司公告'
        },
        component:(resolve) => require(['./views/investorContactNews.vue'] , resolve )
    }   
    ,{
        path:Investor + '/financereport',
        name:'financeReport',
        meta:{
            title:'财务报告'
        },
        component:(resolve) => require(['./views/investorContactFinanceReport.vue'] , resolve )
    }  
    ,{
        path:Investor + '/investortrend',
        name:'investorTrend',
        meta:{
            title:'投资者关系动态'
        },
        component:(resolve) => require(['./views/investorContactTrend.vue'] , resolve )
    }             
    ,{
        path:Infos + '/trend',
        name:'trend',
        meta:{
            title:'公司动态'
        },
        component:(resolve) => require(['./views/companyInfosTrend.vue'] , resolve )
    }  

    ,{
        path:'*',
        redirect:'/index'

    }
];
export default routers;