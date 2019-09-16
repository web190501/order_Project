<template>
    <div>
        <div>
                <van-swipe @change="onChange">
                        <van-swipe-item><img id="details_img_d1" class="details_img" src="../../public/img/01aa.jpg" alt=""></van-swipe-item>
                        <van-swipe-item> <img id="details_img_d2"  class="details_img" src="../../public/img/6fcd36ea9be3dbce429202f2757123bc.jpg" alt=""></van-swipe-item>
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
            </br>
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


            <van-button class="details-qb" url="../../public/qbcd.html">查看全菜</van-button>
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
            <div class="details-ct">
            </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0
    }
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
}
</script>
<style scoped>
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
    margin-left: 23rem;
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
    }
</style>