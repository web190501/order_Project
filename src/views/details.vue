<template>
    <div>
        <div class="details-container">
            <div>
                <van-button to="details"  class="details-qb"> <img src="../image/left.png" class="details-left" alt="">
                </van-button>
            <span class="details-qb-span">鼎食聚</span>
        </div>
        <div>
                <van-swipe @change="onChange">
                        <van-swipe-item><img id="details_img_d1" class="details_img" src="../../public/img/01aa.jpg" alt=""></van-swipe-item>
                           <van-swipe-item> <img id="details_img_d2"  class="details_img" 
                            src="../../public/img/6fcd36ea9be3dbce429202f2757123bc.jpg" alt=""></van-swipe-item>
                        <van-swipe-item> <img id="details_img_d3"  class="details_img" src="../../public/img/01aa.jpg" alt=""></van-swipe-item>
                       
                        <div class="custom-indicator" slot="indicator">
                          {{ current + 1 }}/3
                        </div>
                      </van-swipe>     
        </div>
        <div id="details_resc">
            <p id="details_title">都市晚餐</p>
            <div>
                <button id="details_btn1">
                    套餐 
                </button>
                <span id="details_span1">￥698</span>
            </div>
        </div>
        <div>
            <br>
            <hr>
            
            <h2>菜单</h2>    
            <div class="details-cd">
            <van-tabs type="card" >
                    <van-tab title="前菜" class="details-cd-btn">
             <p class="details-p">包括以下所以</p>
            <div id="details-d2">           
                <p class="details-d2-p1">蔬菜色拉 (双人分享)</p>
                <p class="details-d2-p2">刺身拼盘（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
            </div>
            <div id="details-d2">           
                    <p class="details-d2-p1">刺身拼盘</p>
                    <p class="details-d2-p2">（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
            </div> 
                    </van-tab>
                    <van-tab title="例汤" class="details-cd-btn">
                    <p class="details-p">包括以下所有</p>
                <div id="details-d2">           
                    <p class="details-d2-p1">鲜虾云吞</p>
                    <p class="details-d2-p2">刺身拼盘（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                </div>
                    </van-tab>
                    <van-tab title="主菜" class="details-cd-btn">
                     <p class="details-p">包括以下所有</p>
                 <div id="details-d2">           
                <p class="details-d2-p1">蔬菜色拉 (双人分享)</p>
                <p class="details-d2-p2">刺身拼盘（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                  </div>
                 <div id="details-d2">           
                    <p class="details-d2-p1">刺身拼盘</p>
                    <p class="details-d2-p2">（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                </div>                
                    </van-tab>
                    <van-tab title="主食" class="details-cd-btn">
                         <p class="details-p">包括以下所有</p>
                 <div id="details-d2">           
                <p class="details-d2-p1">波士顿龙虾1只</p>
                <p class="details-d2-p1">松茸竹荪响螺汤</p>
                <p class="details-d2-p2">刺身拼盘（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                
                  </div>                    
                    </van-tab>
                    <van-tab title="甜品" class="details-cd-btn">
                <p class="details-p">包括以下所有</p>
                 <div id="details-d2">           
                <p class="details-d2-p1">蔬菜色拉 (双人分享)</p>
                <p class="details-d2-p2">刺身拼盘（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                  </div>
                 <div id="details-d2">           
                    <p class="details-d2-p1">刺身拼盘</p>
                    <p class="details-d2-p2">（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                </div>  
                    </van-tab>
                    <van-tab title="水果" class="details-cd-btn">
                    <p class="details-p">包括以下所有</p>
                 <div id="details-d2">           
                    <p class="details-d2-p1">时令水果</p>
                    <p class="details-d2-p2">（金枪鱼赤身1片、比目鱼寿司1个、牡丹虾1个、红酒鹅肝1片）</p>
                </div>                  
                    </van-tab>
                  </van-tabs> 
            </div>

            <van-button to="detail"  class="details-qb">查看全部</van-button>
            <h2>详情</h2>
            <div class="details-xq"> 
                <p><img src="../../public/img/time.png" alt="" class="details-img1"> 可订时间</p>
                <ul>
                    <li><span>星期一</span><span>11:00 - 14:00</span></li>
                    <li><span>星期二</span><span>11:00 - 14:00</span></li>
                    <li><span>星期三</span><span>11:00 - 14:00</span></li>
                    <li><span>星期四</span><span>11:00 - 14:00</span></li>
                    <li><span>星期五</span><span>11:00 - 14:00</span></li>
                    <li><span>星期六</span><span>11:00 - 14:00</span></li>
                    <li><span>星期日</span><span>11:00 - 14:00</span></li>
                </ul>
                    <p><img src="../../public/img/space.png" alt="" class="details-img1">地址</p>
                    <p id="details-xq-p1">延安西路688弄2号1楼</p>
                </div>
                <h2>餐厅</h2>
                            <div class="hello">
                                    <div style="height:500px" id="container" tabindex="0"></div>
                                  </div>
                <div>
                        <!-- <input class="details-put" v-model="put.content"> -->
                        <p class="details-put-p">请写一个想要评论的内容</p>
                        <textarea name=""  class="details-put" id="" cols="30" rows="10" v-model="put.content"></textarea>
                        <p class="details-pl-p">您的满意度评分</p>
                        <van-rate class="details-pl-xx" v-model="put.val" :size="25" color="#ee0a24" void-icon="star" void-color="#eee"/>
                        <van-button @click="showPopup" id="details-pl-btn1" >用户评论</van-button> 
                        <p class="details-pl-p">上传图片</p>
                        <van-uploader :after-read="afterRead" class="details-pl-up"/> 
                        <!-- <div>
                            <img :src="" alt="">
                        </div> -->
                        <van-button @click="add" type="primary" size="large">提交按钮</van-button>
                </div>          
                <div class="details-pl">
                    <span >322条评论</span>         
                    <span>用户评论区域</span>
                              
                </div>
                <div class="details-pl-d1" v-for="(item,i) of list" :key="i" >
                    <img id="details-pl-img1" src="../image/touxiang.png" alt="">
                    <span >{{item.uname}}</span>
                    <span  class="details-pl-sp2">{{item.date}}</span>
                    <p class="details-pl-p">您的满意度评分</p>
                    <van-rate class="details-pl-xx" v-model="item.val" :size="25" color="#ee0a24" void-icon="star" void-color="#eee"/>
                    <p class="details-pl-p2">
                        {{item.content}}</p>
                   <p id="details-pl-p3"> <van-button @click="active(i)" :class="{'details-pl-btn3':item.like==1,'details-pl-btn2':item.like==0}" icon="like-o" type="primary">喜欢</van-button></p>
                </div>
                <!-- <div class="details-pl-d1">
                        <img id="details-pl-img1" src="../image/touxiang.png" alt="">
                        <span>Darker</span>
                        <span class="details-pl-sp2">2019-09-07 星期六</span>
                        <p class="details-pl-p">您的满意度评分</p>
                        <van-rate class="details-pl-xx" v-model="value" :size="25" color="#ee0a24" void-icon="star" void-color="#eee"/>
                        <p class="details-pl-p2">
                                下午临时刷到的，就高兴前往，结果前台没有信息，主管确认了我的手机上信息后安排入座。食物很喜欢，牛排肉质和熟度都不错。后来有酒杯打翻，事后服务员马上重新安排，还是让人满意的。总体食物五分！谁让我喜欢他家的牛扒！</p>
                       <p id="details-pl-p3"> <van-button class="details-pl-btn2" icon="like-o" type="primary">喜欢</van-button></p>
                    </div> -->
            </div>
            <div class="details-time">
                <p  class="details-time-p">选购订餐时间</p>
                <van-datetime-picker v-model="currentDate" type="datetime" :max-date="maxDate"/>
            </div>
            <!-- 尾部 -->
            <div class="details-wb">
                <h3>DININGCITY</h3>
                <p><a href="">关于我们</a></p>
                <p><a href="">联系信息</a></p>
                <p><a href="">隐私条款</a></p>
                <p><a href="">诚聘英才</a></p>
                <p><a href="">会员礼遇</a></p>
                <p><a href="">鼎食聚</a></p>
            </div>
            <br>
            <hr>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      show: false,
      put:{
          uname:"ben",
          val:0,
          date:"",
          content:"",
          like:0
      },

      list: [
          {
              uname:"飞翔的小猪",
              date:"2019-09-07 星期六",
              val:3,
              content:"环境还可以 稍微有点拥挤  服务还不错 人多了就会有些应付不来的感觉 味道还可以没有惊艳但也可以吃吃",
              like:0
          },
          {
              uname:"Darker",
              date:"2019-09-03 星期一",
              val:4,
              content:"下午临时刷到的，就高兴前往，结果前台没有信息，主管确认了我的手机上信息后安排入座。食物很喜欢，牛排肉质和熟度都不错。后来有酒杯打翻，事后服务员马上重新安排，还是让人满意的。总体食物五分！谁让我喜欢他家的牛扒！",
              like:0
          }
      ],
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: new Date(),
      msg: 'hello'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(123)
    },
    active:function(i){
        if(this.list[i].like==1){
            this.list[i].like=0
        }else{
            this.list[i].like=1
        }
    },
    init: function () {
      let map = new AMap.Map('container', {
        center: [121.535965,31.255814],
        resizeEnable: true,
        zoom: 5,
        lang: 'en'
      })
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })
    },
  
    onChange(index) {
        
      this.current = index;
    },
    add(){
        var newput={} 
            this.put.date=new  Date().toLocaleDateString()
            for(var key in this.put){
                newput[key]=this.put[key]
            }
            this.list.unshift(newput)
            this.put.val=0;
            this.put.uname="ben";
            this.put.content="";
            this.date="";
    },
    showPopup() {
        if(false){
    //     this.$dialog.alert({
    //   message: '弹窗内容'})
    this.$dialog.confirm({
  title: '标题',
  message: '弹窗内容'
}).then(() => {
    this.$router.push("/Login")
}).catch(() => {
    
});
        }else{
    //     this.$dialog.alert({
    //   message: '弹窗内容'})
    this.$dialog.confirm({
  title: '进入评论区',
  message: ''
}).then(() => {
    this.$router.push("/comment")
}).catch(() => {
    
})
        }
    }
  }
}
</script>
<style scoped>
    .details-container{
        width:100%;
    }
    /* 上面返回按钮 */
    .details-qb{
        border:0px solid #fff important!;
    }
    .details-qb-span{
        font-size:1.6rem;
        margin-left:3rem;
       color:black;
       font-weight: 530
    }
    /* 左键 */
    .details-left{
        width:1rem;
        height:1rem;
        border: 0px;
    }
    /* 价格 */
#details_span1{
    color:#dc2224;
    font-size:1.5625rem;
}
/* 套餐按钮 */
#details_btn1{
    margin-left:0.785rem;
    color:#95989a;
    border:0.0625rem solid #95989a;
    border-radius:0.25rem;
    padding: 0.125rem 0.4375rem;
    margin-right: 0.9375rem;
    background-color: #fff;

}
/* 标签 */
#details_title{
    margin-left:0.785rem;
    font-size: 1.5625rem;
    color:#333;
    font-weight:600;
    line-height: 1.2
}
/* 三张大图片 */
.details_img{
    width:100%;
    /* width:20.625rem; */
    height:13.75rem;
}
.custom-indicator{
    margin-left: 90%;
    padding: 0.1875rem 0.3125rem;
    margin-top:5rem;
    color: #fff;
    background-color: rgba(0,0,0,0.8);
    border-radius: 1rem;
    position: absolute;
    font-size: 1.1rem;
}
/* #details_img_d1{
    display:none;
}
#details_img_d2{
    display: none
} */
*{margin: 0;padding: 0; }
/* 菜单页 */
    .details-cd{ 
        width:93%;
        margin: 0.925rem;
        display: inline-flex;
        justify-content:space-between;
        text-align: center;
    }   
    /* 菜单栏 */
    .van-ellipsis{
        margin-left: 0.72rem; 
        background-color:#fff;
        padding: 0.1875rem 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid #666;
    }
    /* 查看全部按钮 */
    .details-qb{
        background-color:rgba(200,200,200,0.3);
        width:90%;
        margin-left: 0.72rem;
        margin-top:0.32rem;
        height:2.4rem;
        border-radius: 0.26rem;
        border:1px solid none;
        color: black;
    }
    /* 菜单内容 */
    #details-d2{
        border:0.0625rem solid rgba(200,200,200,0.3);
        margin-top:0.8rem; 
        width:90%;
        margin-left: 0.72rem;
    }
    .details-p{
        margin-left: -12.6rem;
        margin-top:0.8rem
    }
    .details-d2-p1{
        margin-left:0.785rem;
        margin-top:1.4rem;
        font-size: 1rem;
    color: #333333;
    font-weight: 600;
    margin-bottom: 1rem;
    width:90%;
    }
    .details-d2-p2{
        margin-left:0.785rem;
        margin-bottom:2.6rem;
        font-size: 12px;
    color: #8e8d8d;
    }
    h2{
        margin-left:0.785rem;
    }
    /* 详情 */
    .details-xq{
        margin-left:0.785rem;   
    }
    ul{
        list-style: none;
    
    }
    /* 订餐时间 */
    .details-xq li{
        width:90%;
        justify-content: space-around;    
        display: flex;
    }
    
    .details-img1{
        width:1.8rem;
        height:1.8rem;
    }
    /* 地址 */
    #details-xq-p1{
        margin-top: 0.578rem;
        margin-left:1.69rem
    }
    /* 餐厅位置 */
    .details-ct{
        margin-top:1.2rem; 
        background-color:#8e8d8d;
        width:20.75rem;
        height:14.75rem;
        margin-left:1rem;
        margin-bottom:2rem;
    }
    /* 评论 */
    .details-pl{
        display: flex;
        margin: 1.7rem 0;
    background: #fff;
    border: 1px solid #e7e7e7;
    overflow: hidden;
    padding-top:1.5rem;
    padding-bottom: 2rem;
    }
    /* 评论数量 */
    .details-pl span{
        margin-top:2rem;
        margin-left:0.782rem;
    }
    /* 评论按钮 */
    #details-pl-btn1{
        margin-left:5rem;
        background-color:#fff;
        color:#da2028;
        border:1px solid #da2028;
        width:9rem;
        font-size: 0.9rem;
        margin-top:1rem;
    }
    /* 用固话头像 */
    #details-pl-img1{
        margin-left:0.725rem;
        width:2.6rem;
    }
    .details-pl-d1{
        border: 1px solid #e7e7e7;
        padding-top:1.5rem;
    padding-bottom: 2rem;
    } 
    /* 时间 */
    .details-pl-sp2{
        margin-left:4rem;
        color: #9b9b9b;
    font-size: 0.8em;
    }
    /* 打分 */
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

    /* 选购订餐时间 */
    .details-time{
        margin-left:0.725rem;
    }
    .details-time-p{
        padding:1rem 0 1rem 0;
    }
    /* 尾部 */
    .details-wb{
        margin-left:0.725rem;
        padding:1rem 0 0.5rem 0;
    }
    .details-wb p{
        margin-left:2rem;
        margin-top:1.3rem;
    }
    .details-wb p a{
        color:#767676;
    }
    /* 评论输入框 */
    .details-put{
    margin-left:1.3rem;
    margin-top:1rem;
    border: 1px solid #ccc;
    width: 80%;
    height: 12.5rem;
    padding: 0.625rem;
    border-radius: 0.2125rem;
    }
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
</style>