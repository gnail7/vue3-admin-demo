<template>
    <div class="all">
        <div class="login-box">
            <div style="text-align:center;margin:10px;font:bold">Login</div>
            <el-form
            :model="form"
            :rules="rules"
            ref="formRef"
            style="width:400px"   
            @keyup.enter="handleLogin()"
            >
            <el-form-item  prop="username">
                <el-input type="text" placeholder="username" v-model="form.username" prefix-icon="User"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="password" v-model="form.password" prefix-icon="Lock"></el-input>
            </el-form-item>
            <el-button type="primary" style="width:400px" @click="handleLogin">登录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    import store from '../../store'

    const form = reactive({
        username:'',
        password:''
    })


    const rules = reactive({
        username:[
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
        ],
        password:[
            { required: true, message: 'Please input Activity password', trigger: 'blur' },
            { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
        ]
    })

    function handleLogin(){
        store.dispatch('loginActions',form)
    }
</script>

<style lang="less" scoped>
.all{
    width:100vw;
    height:100vh;
    background:url('../../assets/login.jpg') no-repeat ;
    background-size: 100%;
}
.login-box{
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-80%);
    height:200px;
    padding:20px
    
   
}


 .login-box:hover{
        box-shadow: 5px;
     
    }
</style>