<style scoped>
    .login-wrap{
        background: url('../assets/img/bg.jpg') no-repeat center;
        background-size: 100% 100%;
    }
    #login{
        width: 400px;
        position: fixed;
        right: 54px;
        top: 50%;
        transform:translate( 0 ,-50% );  
        /* box-shadow: 0 0 20px 2px; */
        padding: 16px 16px;
    }
    #login .item{
        margin-bottom: 30px;
    }
    #login .submit-btn{
        height:44px;
        width: 170px;
        background-color: #658afc;
    }
    .ver-code{
        width: 218px;
    }
    .code-img{
        position: absolute;
        right: 0;
        top: 0;
        width: 132px;
        height: 44px;
        background: #000;
    }

    .title-wrap .title{
        line-height: 46px;
        color: #333333;
        font-size: 30px;
        font-weight: 500;
    }
    .title-wrap .dis{
        line-height: 34px;
        font-size: 16px;
    }
    .item-bg{
        background: #f8f5fc;
    }
    .copyright{
        width: 400px;
        position: fixed;
        right: 54px;
        bottom: 30px;
        padding: 16px 16px;        
        line-height: 22px;
        font-size: 12px;
    }
    .copyright p{
        padding-left: 14px;
        color: #dadada;
        text-align: center;
    }
    
</style>

<template>
    <div class="full relative login-wrap" >
        <div id="login">
            <div class="title-wrap mb40">
                <h2 class="title" >Hello!</h2>
                <p class="dis" >欢迎登陆-玩咖开应用统计平台</p>
            </div>
            <Form ref="form" :model="formItem" :rules="formRule">
                <FormItem prop="user" class="item" >
                    <Input  size="large" type="text" v-model="formItem.user" placeholder="用户名">
                        <!-- <Icon type="ios-person-outline" slot="prepend"></Icon> -->
                        <span slot="prepend" >账 号</span>
                    </Input>
                </FormItem>
                <FormItem prop="password" class="item" >
                    <Input size="large" type="password" v-model="formItem.password" placeholder="密码">
                        <span slot="prepend" >密 码</span>
                    </Input>
                </FormItem>
                <FormItem prop="password" class="item relative" >
                    <Input class="ver-code" type="text" v-model="formItem.verCode" placeholder="请输入验证信息">
                        <span slot="prepend" >验证码</span>
                    </Input>
                    <div class="code-img">aaaaa</div>
                </FormItem>

                <FormItem class="item pt10" >
                    <Button class="submit-btn" type="primary" shape="circle"  @click="handleSubmit('form')">登陆</Button>
                </FormItem>
                <FormItem>
                    <!-- <a href="#">忘记密码?</a> -->
                </FormItem>
            </Form>
        </div>
        <div class="copyright">
            <p>COPYRIGHT © 1998 – 2018 TENCENT. ALL RIGHTS RESERVED.  玩咖公司 版权所</p>
        </div>
    </div>

</template>
<script>
    import { Form ,Input ,Icon ,Button ,FormItem , Message } from 'iview';
    import util from '../libs/util';
    export default {
        components:{
            Form ,Input ,Icon ,Button ,FormItem,Message
        },
        data () {

            // 验证用户名
            const validateName = (rule, value, callback)=>{

                if( !/^[a-zA-Z0-9_-]{4,16}$/.test(value) ){
                    callback(new Error('用户名长度为 6 - 12 位'));
                }else{
                    callback();
                }

            }

            // 验证密码
            const validatePass = (rule, value, callback)=>{
                console.log('value' , value);
                if( !/^[a-zA-Z0-9_-]{4,16}$/.test(value) ){
                    callback(new Error('密码长度为 6 - 12 位'));
                }else{
                    callback();
                }

            }

            return {
                formItem: {
                    user: '',
                    password: ''
                },
                formRule: {
                    user: [
                        { required: true , message: '请输入用户名', trigger: 'blur' },
                        { type: 'string', min: 6, max:12 ,message: '用户名长度为 6 - 12 位', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        // { type: 'string', min: 6, max:12 ,message: '密码长度为 6 - 12 位', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    verCode:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { type: 'string', min: 6, max:12 ,message: '验证码错误', trigger: 'blur' }
                    ]
                }
            }
        },
        mounted(){
            util.setStorage('s_id','asdqw12afseweq');
        },
        methods: {
            handleSubmit(name) {

                this.$refs[name].validate((valid) => {                  
                    this.$Message.destroy();
                    if (valid) {
                        this.$Message.success('Success!');
                        console.log('读取storage' , util.getStorage('s_id') ); 
                        this.$store.dispatch('login');  
                        this.$router.push({
                            name:'list'
                        });                     
                        
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },

        }
    };
</script>