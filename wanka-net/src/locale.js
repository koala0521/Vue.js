/** 
 * 国际化语言包
 * 
 * 注意：语言包内部第一层级的key对应的value值不能为对象类型。
 * 这里的解决方法是用数组包装一下。
 * */  
export default{
    'zh-CN': {

        // 主菜单
        'menu':['首页','公司信息','企业文化',' 业务体系','投资者关系'],
        
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
                'news':{
                    'title':'公司动态',
                    'btnText':'查看更多'
                },
                'Timeline':{
                    'title':'发展历程',
                    'list':[
                        {
                            'content':'一站式APP开发支持与发布平台——聚传上线'
                        },
                        {
                            'content':'玩咖推出游戏买量服务'
                        },
                        {
                            'content':'成为联想、金立、vivo、OPPO、魅族、酷派6家手机厂商游戏联运买量唯一核心代理'
                        },
                        {
                            'content':'玩咖传媒荣获“2017北京品牌100强”'
                        },
                        {
                            'time':'2017'
                        },
                        {
                            'content':'玩咖推出整合营销服务'
                        },
                        {
                            'content':'成为金立应用商店全行业核心代理'
                        },
                        {
                            'content':'成为腾讯游戏在硬核联盟游戏买量业务唯一代理'
                        },
                        {
                            'content':'基于手机终端的移动营销平台玩咖DAP上线'
                        },
                        {
                            'time':'2016'
                        },
                        {
                            'content':'举办第一届黑石奖颁奖典礼'
                        },
                        {
                            'time':'2015'
                        },
                        {
                            'content':'玩咖促成硬核联盟成立'
                        },
                        {
                            'content':'玩咖传媒成立在北京'
                        },
                        {
                            'time':'2014'
                        }
                    ]
                },
                'team':{
                    'title':'管理团队', 
                    'leader':'高第男',
                    'JobTitle':'主要创办人，董事会主席兼CEO',
                    'description':'如果中方就美国制裁中兴一事报复，决定以国家安全为理由禁止苹果产品在中国销售，会怎样呢？巴普蒂斯特·苏说，出现这种局面，苹果将失如果中方就美国制裁中兴一事报复，决定以国家安全为理由禁止苹果产品在中国销售，会怎样呢？巴普蒂斯特·苏说，出现这种局面，苹果将失',
                    'leaderList':[
                        {
                            'name':'老武',
                            'JobTitle':'主要创办人，董事会成员&CTO', 
                        },
                        {
                            'name':'震总',
                            'JobTitle':'主要创办人，董事会成员&CTO', 
                        },    
                        {
                            'name':'老武',
                            'JobTitle':'主要创办人，董事会成员&CTO', 
                        },
                        {
                            'name':'震总',
                            'JobTitle':'主要创办人，董事会成员&CTO', 
                        }                                            
                    ]

                }
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
                },
                'activity':{
                    'title':'员工活动',
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
                        },
                        {
                            'title': '业务体系5',
                            'name': 'employe_activity4'
                        }
                    ]
                },
                'content':[
                    {
                        'title':'整合营销1',
                        'text':'<p> 数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力，能</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p>'    
                    },
                    {
                        'title':'整合营销2',
                        'text':'<p> 数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力，能</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p>'    
                    },
                    {
                        'title':'整合营销3',
                        'text':'<p> 数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力，能</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p>'    
                    },
                    {
                        'title':'整合营销4',
                        'text':'<p> 数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力，能</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p>'    
                    },
                    {
                        'title':'整合营销5',
                        'text':'<p> 数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力，能</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p><p> 服务宗旨：啦啦啦啦</p>'    
                    }
                ]                
            },
            // 投资者关系
            'INVESTOR':{
                'siderMenu':{
                    'mainTitle':'投资者关系',
                    'list':[
                        {
                            'title': '企业管制',
                            'name': 'control'
                        },
                        {
                            'title': '财务新闻稿',
                            'name': 'news'
                        },{
                            'title':'公司公告',
                            'name': 'employe_activity1'
                        },{
                            'title':'财务报告',
                            'name': 'employe_activity2'
                        },{
                            'title':'投资者关系动态',
                            'name': 'employe_activity3'
                        },{
                            'title':'联系方式',
                            'name': 'employe_activity4'
                        }
                    ]
                }, 
                
                // 企业管制
                'control':{
                    'title':'企业管制',
                    
                    'text' : `
                        <p> 腾讯控股有限公司(「腾讯」或「本公司」，连同其附属公司及为会计目的而综合入账的公司合共称为「本集团」)为中国领先的互联网增值服 </p>
                        <p> 腾讯控股为中国领先的互联网增值服 </p> 
                        <p> 腾讯为中国领先的互联网增值服 </p> 
                        
                        <p class="router-link link mt20 ptb6" >  
                            <a class="mr20" href="/investor/control">企业管治</a>  
                            <a href="/investor/member" >董事会成员</a> 
                        </p> 
                        
                        <p class="mt20" >
                            腾讯控股有限公司(「腾讯」或「本公司」，连同其附属公司及为会计目的而综合入账的公司合共称为「本集团」)为中国领先的互联网增值服
                        </p> 
                        <p class="link mt20 pl10 pt6" > 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" >审核委员会职权范围【PDF file】</a> 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" >企业管治委员会职权范围【PDF file】 </a> 
                        
                        </p> 
                        <p class="link pl10 pb6" > 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" >管治委员会职权范围【PDF file】 </a> 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" > 企业管治委员会职权范围【PDF file】 </a> 
                        </p>                    
                    
                    `
                },  
                // 财务新闻稿
                'financeNews' : {

                    'title':'财务新闻稿',
                    'btnText':'查看更多',
                    'SecondaryTitle':{
                        '1':'业绩新闻',
                        '2':'其他新闻'
                    }
                },
                // 公司公告
                'compNews' : {
                    'title':'公司公告',
                    'btnText':'查看更多'
                },
                // 财务报告
                'financeReport' : {
                    'title':'财务报告',
                    'btnText':'查看更多'                    
                },  
                // 投资者关系动态
                'contactTrend' : {
                    'title':'投资者关系动态',
                    'btnText':'查看更多'                        
                },
                // 联系我们
                'contactUs':{
                    'title':'欢迎您与我们取得联系！',
                    'html':`
                        <p> 个人投资者查询 </p> 
                        <p  class="pt10" > 电话：(86-755)86013388 转 72000 </p> 
                        <p  class="pt10" > 电子邮箱：cosec@gm825.com </p> 
                    `
                }
            }, 
            
            // 首页 >> 公司介绍
            'indexIntroduce':{
                'BreadcrumbList':[
                    {'title':'首页'},
                    {'title':'公司信息'}
                ],
                'title':'公司信息',
                'html':`
                    <p class="pb20" > 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九</p>
                    <p> 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九</p>
                `
            },
            // 首页 >> 公司介绍
            'indexStatement':{
                'BreadcrumbList':[
                    {'title':'首页'},
                    {'title':'免责声明'}
                ],
                'title':'《 隐私政策 》',
                'html':`
                    <p class="pb20" > 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九</p>
                    <p> 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九</p>
                `
            },

            // 投资者关系 >> 董事会成员
            'member':{
                'BreadcrumbList':[
                    {'title':'投资者关系'},
                    {'title':'董事会成员'}
                ],
                'title':'董事会成员',
                'memberList':[
                    {
                        'name':'高第男',
                        'JobTitle':'董事长',
                        'description':' 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九 副本'
                    },{
                        'name':'小明',
                        'JobTitle':'总经理',
                        'description':' 45岁，执行董事、董事会主席兼本公司行政总裁。马先生全面负责本集团的策略规划、定位和管理。马先生是主要创办人之一，自一九九九 副本'
                    }
                ],
                'updateTime':'最后更新日期：2017年5月17日'
            },

            // 投资者关系 >> 企业管制
            'ctrl':{

                'BreadcrumbList':[
                    {'title':'投资者关系'},
                    {'title':'企业管制'}
                ],
                //股东
                'shareholder':{
                    'title':'股东',
                    'html':`
                        <p>
                            数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力， 数字整合营销时代的营销专家。贯穿营销策略、客户服务、数字媒介、媒体运营、互动创意、数据分析等360°全营销链条的服务能力，能
                        </p>
                        <p>
                            腾讯控股：腾讯控股有限公司(「腾讯」或「本公司」
                        </p> 
                        <p>
                            腾讯控股：腾讯控股有限公司(「腾讯」或「本公司」
                        </p> 
                        <p class="link mt20 pl10 pt6" style="width:700px" > 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" class="mr40" > • 经修订及重列组织章程大纲及组织章程细则 file】</a> 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" class="mr40"  > • 股东提名选举董事程序 </a> 
                        
                        </p> 
                        <p class="link pl10 pb6" style="width:700px"  > 
                            <a href="http://www.ijinshan.com/zhuanti/eduba/files/KingCloud.pdf" target="_blank" > • 股东通讯政策 </a> 
                            
                        </p> 
                    `
                },
                // 董事会
                'boardDirectors':{
                    'title':'董事会',
                    'html':`
                        <p class="mb20" >
                            腾讯建立了单一董事会。本公司的独立非执行董事占本公司的董事会人数三分之一以上，而非执行董事亦使董事会具备各种业务及财务经验。董事会： 
                        </p>
                        <p class="pl20" >
                            • 腾讯控股：腾讯控股有限公司(「腾讯」或「本公司」。
                        </p> 
                        <p class="pl20" >
                            • 腾讯控股：腾讯控股有限公司(「腾讯」或「本公司」。
                        </p> 
                        <p class="pl20" >
                            • 腾讯控股：腾讯控股有限公司(「腾讯」或「本公司」。
                        </p> 
                        <p class="pl20" >
                            • 腾讯控股：腾讯控股有限公司(「腾讯」或「本公司」。
                        </p>                         
                    `                    
                },
                // 董事委员会
                'BoardMember':{
                    'title':'董事委员会',
                    'html':`
                        <p class="mb20" >
                            本集团引进内部监控制度让管理人员及董事会能确保本集团的财务状况、保障资产(包括资讯)及遵照监管规定。内部及外聘核数师负责监察内。
                            然而， 内部及外聘核数师负责监察内。
                        </p>                       
                    `  
                }
            },

            // 投资者关系 >> 联系我们
            'contactUs':{
                'BreadcrumbList':[
                    {'title':'投资者关系'},
                    {'title':'联系我们'}
                ],
                'title':'联系我们',
                'html':`
                    <div class="pt10 pb24" style="border-bottom:1px solid #dddee1" >
                        <p class="item-title" style="font-weight:600" > 业务联系方式 </p> 
                        <p class="pt10" >联系电话：(86-755)86013388 转 72000 </p> 
                        <p class="pt10" >电子邮箱：cosec@gm825.com </p> 
                    </div>
                    <div class="ptb24" >
                        <p class="item-title" style="font-weight:600" > 市场联系方式 </p> 
                        <p class="pt10" >联系电话：(86-755)86013388 转 72000 </p> 
                        <p class="pt10" >电子邮箱：cosec@gm825.com </p> 
                    </div>  
                `
            }
        }]
    },
    'en-US': {
        // 'title':'hello view',
        'menu':['HOME','ABOUT','CULTURE',' PRODUCTS & SERVICES','INVESTOR RELATIONS'],
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
        'menu':['首頁','公司信息','企業文化','業務體係','投資者關係'],
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