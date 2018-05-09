// 国际化语言包
/** 
 * 注意：语言包内部第一层级的key对应的value值不能为对象类型。
 * 这里的解决方法是用数组包装一下。
 * */  
export default{
    'zh-CN': {
        // 'title':'你好 view',
        'menu':['公司信息','企业文化',' 业务体系','投资者关系'],
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