<template>
<div>
    123
    <div>
        <p class="details-put-p">请写一个想要评论的内容</p>
        <textarea name=""  class="details-put" id="" cols="30" rows="10" v-model="put.content"></textarea>
        <p class="details-pl-p">您的满意度评分</p>
        <van-rate class="details-pl-xx" v-model="put.val" :size="25" color="#ee0a24" void-icon="star" void-color="#eee"/>
        <van-button @click="showPopup" id="details-pl-btn1" >用户评论</van-button> 
        <p class="details-pl-p">上传图片</p>
        <van-uploader :after-read="afterRead" class="details-pl-up"/> 

        <van-button @click="add" type="primary" size="large">提交按钮</van-button>
    </div>    <!--     
    <div class="details-pl">
        <span >322条评论</span>         
        <span>用户评论区域</span>              
    </div>     -->   
</div>
</template>
<script>

</script>
<style scoped>
        /* 上传图片功能 */
        .details-pl-up{
        margin-left:1rem
    }
    .details-put-p{
        margin-left:1.3rem;
        margin-top:1.5rem;
        color: #da2028;
    font-weight: 400;
    }
    .details-pl-p{
        margin-left: 0.725rem;
        margin-top:2rem;
        color: #da2028;
        font-size:1.5rem;
    }
    .details-pl-xx{
        margin-top:1rem;
        margin-left:0.785rem;
    }
    .details-pl-p2{
        margin-top:1rem;
        margin-left:0.785rem;
        font-size:1em;
        color:darkgrey
    }  
     /* 喜欢按钮 */
    .details-pl-btn2{
        width:5rem;
        background:#fff;
        margin-left:70%;
        margin-top:0.8rem;
        color:#666;
        border:0.0625rem solid #666;
    }
    .details-pl-btn3{
        width:5rem;
        background:#da2028;
        margin-left:70%;
        margin-top:0.8rem;
        color:#fff;
        border:0.0625rem solid #da2028;
    }
</style>