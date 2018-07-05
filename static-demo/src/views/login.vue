<style scoped>
    #login{
        width: 500px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform:translate(-50% ,-50% );  
        box-shadow: 0 0 20px 2px;
        padding: 50px;
    }
</style>

<template>
    <div class="full" >
        <div id="login">
            <Form ref="form" :model="formItem" :rules="formRule">
                <FormItem prop="user">
                    <Input type="text" v-model="formItem.user" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formItem.password" placeholder="密码">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem class="tac" >
                    <Button type="primary" @click="handleSubmit('form')">登陆</Button>
                </FormItem>
            </Form>
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