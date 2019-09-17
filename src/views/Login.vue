<template>
    <div>
        <div class="login">
          <div class="title">
            <div class="loginin">登录</div>
            <div class="reg">注册</div>
          </div>
          <div class="name"><input type="text" placeholder="姓名"></div>
          <div class="email"><input type="text" placeholder="邮箱地址"></div>
          <div class="pwd"><input type="password" placeholder="密码"></div>
          <div class="phone">
            <div class="one"><span>86&nbsp;+</span></div>
            <div class="num" ><input   type="text" placeholder="手机号"></div>
          </div>
          <div class="yzm">
            <input type="text" placeholder="验证码"> <span>发送验证码</span>
          </div>
          <div class="agree"><input type="checkbox" checked>是的，如果餐厅有优惠和活动告诉我吧！</div>
        </div>
        <button class="btn"><a href="javascript:;">马上注册</a>
          </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    *{
      padding:0;
      margin:0;
    }
    .login{
        width:95%;
        margin:10px;
      }
      .title{
        width:100%;
        height:50px;
        display: flex;
        border-radius:2px;
      }
      .loginin{
        width:50%;
        display:inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color:#fff;
        background:rgba(0, 0, 0, 0.6);
      }
      .reg{
        width:50%;
        display:inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        
      }
      .name{
        width:100%;
        height:50px;
        margin-top:30px;
        border:1px solid #ddd;
        border-radius: 2px;
      }
      .email{
        width:100%;
        height:50px;
        margin-top:30px;
        border:1px solid #ddd;
        border-radius: 2px;
      }
      .pwd{
        width:100%;
        height:50px;
        margin-top:30px;
        border:1px solid #ddd;
        border-radius: 2px;
      }
      input{
        border:none;
        padding:17px 10px ;
        font-size:14px;
        outline: none;
      }
      .phone{
        width:100%;
        height:50px;
        margin-top:30px;
        border:1px solid #ddd;
        border-radius: 2px;
      }
      .agree{
        margin-top:20px;
      }
      .agree>input{
        font-size:15px;
        color:#575757;
      }
      .yzm{
        width:100%;
        height:50px;
        margin-top:30px;
        border:1px solid #ddd;
      }
      .one{
        display: inline-block;
      }
      .num{
        display: inline-block;
      }
      .one>span{
        padding-left:10px;
      }
      .yzm>span{
        display: inline-block;
        width:80px;
        height:30px;
        background-color:#d8d8d8;
        font-size:14px;
        margin-top:5px;
        margin-right:5px;
        padding-top:11px;
        padding-left:10px;
        float:right;
      }
      .btn{
        width:100%;
        height:50px;
        margin-top:20px;
        margin-left:5px;
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
</style>