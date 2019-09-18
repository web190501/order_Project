<template>
    <div>
      <!-- 顶部通知图片和添加好友 -->
    <div class="login-title">
      <div class="notice"><img src="../image/notice (2).png" alt=""></div>
      <div class="invite"><img src="../image/invite (2).png" alt=""></div>
    </div>
    <!-- 图像的上传及登录 -->
    <div class="login-header">
      <div class="image"><img src="../image/invite.png" alt=""></div>
      <button class="btn-login">登录</button>
    </div>
    <!-- 中间菜单的样式 -->
    <div class="menu">
      <div>
        <h3>0</h3>
        <p>收藏单</p>
      </div>
      <div>
          <h3>0</h3>
          <p>心愿单</p>
        </div>
        <div>
            <h3>0</h3>
            <p>荣誉值</p>
          </div>
    </div>
    <!-- 底部列表 -->
    <div class="login-list">
      <div class="me-commpont">我的预定<img src="../image/yd.png" alt=""></div>
    </div>
    <div class="login-list1">
      <div class="me-commpont">我的评论<img src="../image/pl.png" alt=""></div>
    </div>
    <div class="login-list1">
      <div class="me-commpont">添加餐厅<img src="../image/add.png" alt=""></div>
    </div>
    <div class="login-list1">
      <div class="me-commpont">关于我们<img src="../image/our.png" alt=""></div>
    </div>
    <div class="login-list1">
      <div class="me-commpont">版本&nbsp;&nbsp;3.5.8</div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* 顶部通知样式 */
    .login-title{
      width:100%;
      height:50px;
      display:flex;
      justify-content: space-between;
      background-color:#da2028;
    }
    /* 通知图片 */
    .notice>img{
      padding-top:11px;
      padding-left:10px;
    }
    /* 邀请好友图片 */
    .invite>img{
      padding-top:11px;
      padding-right:10px;/*右内边距*/
    }
    /* 图像及登录样式 */
    .login-header{
      width:100%;
      height:120px;
      display:flex;
      background-color:#da2028;
    }
    /* 图像中的半透明样式 */
    .image{
      width:80px;
      height:80px;
      border:4px solid #fff;
      border-radius: 50%;
      margin-left:10px;
      margin-top:17px;
      background:rgba(255,255,255,.5)
    }
    .image>img{
      padding-top:15px;
      padding-left:15px;
    }
    /* 登录样式 */
    .btn-login{
      outline: none;
      width:90px;
      height:35px;
      border:2px  solid #fff;
      border-radius:6px;
      margin-left:10px;
      color:#fff;
      background-color:#da2028;
      margin-top:45px;
      margin-left:20px;
      font-size:13px;
    }
    /* 中间菜单样式 */
    .menu{
      display:flex;
      justify-content: space-around;
      text-align:center;
      margin-top:20px;
    }
    h3{color:#da2028}
    p{color:#707070}
    .login-list{
      width:100%;
      height:60px;
      margin-top:20px;
      /* border:1px solid #ddd; */
    }
    /* 底部样式列表 */
    .login-list1{
      width:100%;
      height:60px;
      /* border:1px solid #ddd; */
      border-top:0px;
    }
    .me-commpont{
      display:flex;
      justify-content: space-between;
      padding-top:10px;
      padding-left:10px;
    }
    .login-list1>.me-commpont>img{
      padding-right:10px;
    }
</style>