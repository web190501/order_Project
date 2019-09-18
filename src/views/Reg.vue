<template>
    <div>
      <!-- 最外层div进行页面包裹 -->
        <div class="reg-container">
          <!-- 登录注册的头部 -->
        <div class="title">
            <div class="loginin">登录</div>
            <div class="reg">注册</div>
        </div>
        <!-- 邮箱和手机号码文本框 -->
        <div class="emorph"><input type="text" placeholder="邮箱或手机号"></div>
        <!-- 密码文本框 -->
        <div class="pwd"><input type="password" placeholder="密码"></div>
        <!-- 登录按钮 -->
        <button class="btn"><a href="javascript:;">登录</a>
        </button>
        <!-- 忘记密码 -->
        <div class="forgot"><a href="javascript:;">忘记密码?</a></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* 最外层父容器 */
  .reg-container{
    width:100%;
  }
  /* 登录注册的头部 */
    .title{
        /* width:95%; */
        height:50px;
        display: flex;
        border-radius:2px;
        margin:10px;
      }
      /* 登录框的样式 */
      .loginin{
        width:50%;
        display:inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        
      }
      /* 注册框的样式 */
      .reg{
        width:50%;
        display:inline-block;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color:#fff;
        background:rgba(0, 0, 0, 0.6);
      }
      /* 邮箱和手机登录框的样式 */
      .emorph{
        /* width:95%; */
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
      /* 密码框的样式 */
      .pwd{
        /* width:95%; */
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
      /* 登录按钮的样式 */
      .reg-container>.btn{
        width:95%;
        height:50px;
        margin-top:20px;
        margin-left:10px;
        margin-right:10px;
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
      /* 忘记密码的样式 */
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