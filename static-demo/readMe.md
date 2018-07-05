## 快应用数据接口

公共参数：

1. 除获取 SID 接口外，其他接口 header 头中添加 X-SID 参数，值为登陆接口拿到的 session id :
 
```
    header: {
        X-SID:'00fe145141465f0f227c942fd2205631'
    }

```

接口说明：

1.获取SID

```

    请求地址：'/app/init'

    参数：无

    返回值：{
        "error_code": 0,
        "sid": "00fe145141465f0f227c942fd2205631" 
    }

```
