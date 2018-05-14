// 国际化语言包
/** 
 * 注意：语言包内部第一层级的key对应的value值不能为对象类型。
 * 这里的解决方法是用数组包装一下。
 * */  
export default{
    'zh-CN': {

        // 主菜单
        'menu':['公司信息','企业文化',' 业务体系','投资者关系'],
        
        // 底部
        'footerText':[{
            'attention':{
                'title':'关注我们',
                'list':['微信公众号','腾讯微博',' 新浪微博']
            },
            'contact':{
                'title':'联系我们',
                'list':['商业合作','市场合作']
            },
            'legalInfo':{
                'title':'法律信息',
                'list':['免责声明']
            },
            'copyright':{
                '1':'Copyright © 1998 - '+ (new Date).getFullYear() +' 玩咖公司 版权所有'
            }
        }],

        // 主页面内容配置
        'content':[{

            // '公司信息'
            'ABOUT':{
                'siderMenu':{
                    'mainTitle':'公司信息',
                    'list':[
                        {
                            'title' : '公司动态', 
                            'name' : 'company_charity'
                        },
                        {
                            'title' : '发展历程', 
                            'name' : 'company_dev'
                        },
                        {
                            'title' : '管理团队', 
                            'name' : 'company_board'
                        }
                    ]
                },
            },
            // 企业文化
            'CULTURE':{
                'siderMenu':{
                    'mainTitle':'企业文化',
                    'list':[
                        {
                            'title': '核心理念',
                            'name': 'core_idea'
                        },
                        {
                            'title': '员工活动',
                            'name': 'employe_activity'
                        }
                    ]
                }, 
                'core':{
                    'title':'核心理念',
                    'list':[
                        {
                            'title':'愿景',
                            'summary':'成为中国移动互联网商业化服务平台的标杆企业',
                            'text':'如果中方就美国制裁中兴一事报复，决定以国家安全为理由禁止苹果产品在中国销售，会怎样呢？巴普蒂斯特·苏说，出现这种局面，苹果将失'
                        },{
                            'title':'使命',
                            'summary':'成为中国移动互联网商业化服务平台的标杆企业',
                            'text':'如果中方就美国制裁中兴一事报复，决定以国家安全为理由禁止苹果产品在中国销售，会怎样呢？巴普蒂斯特·苏说，出现这种局面，苹果将失'
                        },{
                            'title':'管理理念',
                            'summary':'成为中国移动互联网商业化服务平台的标杆企业',
                            'text':'如果中方就美国制裁中兴一事报复，决定以国家安全为理由禁止苹果产品在中国销售，会怎样呢？巴普蒂斯特·苏说，出现这种局面，苹果将失'
                        },{
                            'title':'价值观',
                            'summary':'成为中国移动互联网商业化服务平台的标杆企业',
                            'text':'如果中方就美国制裁中兴一事报复，决定以国家安全为理由禁止苹果产品在中国销售，会怎样呢？巴普蒂斯特·苏说，出现这种局面，苹果将失'
                        }
                    ]
                }         
            },
            // 业务体系
            'PRODUCTS':{
                'siderMenu':{
                    'mainTitle':'业务体系',
                    'list':[
                        {
                            'title': '业务体系1',
                            'name': 'core_idea'
                        },
                        {
                            'title': '业务体系2',
                            'name': 'employe_activity1'
                        },
                        {
                            'title': '业务体系3',
                            'name': 'employe_activity2'
                        },
                        {
                            'title': '业务体系4',
                            'name': 'employe_activity3'
                        }
                    ]
                },                
            },
            // 投资者关系
            'INVESTOR':{
                'siderMenu':{
                    'mainTitle':'投资者关系',
                    'list':[
                        {
                            'title': '企业管制',
                            'name': 'core_idea'
                        },
                        {
                            'title': '财务新闻稿',
                            'name': 'employe_activity'
                        },{
                            'title':'公司公告',
                            'name': 'employe_activity'
                        },{
                            'title':'财务报告',
                            'name': 'employe_activity'
                        },{
                            'title':'投资者关系动态',
                            'name': 'employe_activity'
                        },{
                            'title':'联系方式',
                            'name': 'employe_activity'
                        }
                    ]
                },                
            },            

        }]
    },
    'en-US': {
        // 'title':'hello view',
        'menu':['ABOUT','CULTURE',' PRODUCTS & SERVICES','INVESTOR RELATIONS'],
        'footerText':[{
            'attention':{
                'title':'Follow Us',
                'list':['WeChat','tencent Weibo',' Sina Weibo']
            },
            'contact':{
                'title':'Contact Us',
                'list':['Business Cooperation','mMrket Collaboration']
            },
            'legalInfo':{
                'title':'Legal Information',
                'list':['免责声明']
            },
            'copyright':{
                '1':'Copyright © 1998 - '+ (new Date).getFullYear() +' WanKa. All Rights Reserved.'
            }
        }]
    },
    'zh-TW': {
        // 'title':'倪好， ivew',
        'menu':['公司信息','企業文化','業務體係','投資者關係'],
        'footerText':[{
            'attention':{
                'title':'關注我們',
                'list':['微信公眾號','騰訊微博',' 新浪微博']
            },
            'contact':{
                'title':'聯繫我們',
                'list':['商業合作','市場合作']
            },
            'legalInfo':{
                'title':'法律信息',
                'list':['免責聲明']
            },
            'copyright':{
                '1':'Copyright © 1998 - '+ (new Date).getFullYear() +' 玩咖公司 版權所有'
            }
        }]
    }
};