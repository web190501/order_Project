<template>

    <div class="details-cd">
        <div>
            <van-button to="details"  class="details-qb"> <img src="../image/left.png" class="details-left" alt="">
            </van-button>
            <span class="details-qb-span">鼎食聚</span>
        </div>
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
</template>
<script>

</script>
<style>
    /* 菜单内容 */
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
</style>