<template>
    <div>
      
        <div class="title">
            <div class="loginin">登录</div>
            <div class="reg">注册</div>
        </div>
        <div class="emorph"><input type="text" placeholder="邮箱或手机号"></div>
        <div class="pwd"><input type="password" placeholder="密码"></div>
        <button class="btn"><a href="javascript:;">登录</a>
        </button>
        <div class="forgot"><a href="javascript:;">忘记密码?</a></div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .title{
        width:95%;
        height:50px;
        display: flex;
        border-radius:2px;
        margin:10px;
        box-sizing: border-box;
      }
      .loginin{
        width:50%;
        display:inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        
      }
      .reg{
        width:50%;
        display:inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color:#fff;
        background:rgba(0, 0, 0, 0.6);
      }
      .emorph{
        width:95%;
        height:50px;
        border:1px solid #ddd;
        margin-top:20px;
        border-radius:2px;
        margin:10px;
      }
      .emorph>input{
        border:none;
        outline: none;
        line-height: 48px;
        padding-left:10px;
        font-size:14px;
        color:#575757;
      }
      .pwd{
        width:95%;
        height:50px;
        margin-top:20px;
        border:1px solid #ddd;
        border-radius: 2px;
        margin:10px;
      }
      .pwd>input{
        outline: none;
        border:none;
        line-height: 48px;
        padding-left:10px;
        font-size:14px;
        color:#575757;
      }
      .btn{
        width:95%;
        height:50px;
        margin-top:20px;
        margin:10px;
        background-color:#da2028;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 2px;
      }
      .btn>a{
        color:#ffffff;
        text-decoration: none;
        font-size: 18px;
      }
      .forgot{
        margin-top:10px;
        margin:10px;
      }
      .forgot>a{
        text-decoration: none;
        font-size: 13px;
        color:#aaa;
        
      }
</style>