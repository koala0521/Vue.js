import util from '../libs/util';
const API = {};


// 请求 session id
API.getSId = ( sucess , fail ) => {
    util.ajax.get({ 
        url: '/app/init'
    })
    .then((res) => {
        sucess && sucess();
    })
    .catch((err) => {
        fail && fail();
    });
}

// 请求登录信息
API.getSId = (args={}) => {
    let { config , sucess , fail } = args;
    if( config.url ){
        throw new Error('url is not defined');
    }
    util.ajax.get( config )
    .then((res) => {
        sucess && sucess();
    })
    .catch((err) => {
        fail && fail();
    });
}


export default API;