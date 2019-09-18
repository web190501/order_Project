<template>

    <div class="product">  
  <div class="pro-1">
      <my-search></my-search> 
      <van-popup v-model="show1">
        <div>

        </div>
      </van-popup>
        <van-popup v-model="show2">
        <div>

        </div>
      </van-popup>
        <van-popup v-model="show3">
        <div>

        </div>
      </van-popup>
        <van-popup v-model="show4">
        <div>

        </div>
      </van-popup>
        <div class="pro-top-nav">
                    
          <div class="pro-t-b"> 
           <span class="pro-nav-span"> 
           <van-button type="primary" @click="showPopup(1)" class="pro-nav-btn">
               位置
            </van-button>
           </span>
           <span class="pro-nav-span"> 
         <van-button type="primary" @click="showPopup(2)" class="pro-nav-btn">
                                  菜系
            </van-button>
           </span>
             <span class="pro-nav-span"> 
         <van-button type="primary" @click="showPopup(3)" class="pro-nav-btn">
                                  排序
            </van-button>
           </span>  <span class="pro-nav-span"> 
         <van-button type="primary" @click="showPopup(4)" class="pro-nav-btn">
                                  过滤
            </van-button>
           </span>
           </div>
           
          <div class="pro-rec">
             <div class="pro-text">
               <p class="pro-p">推荐:</p>
            </div>
             <div class="pro-select">
                <div class="pro-select-span" style="width:6.7rem">
                   <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="">
                   <p>特殊礼遇</p>
                </div>
                  <div class="pro-select-span" style="width:6.2rem">
                   <img src="https://assets.diningcity.cn/tag/discount.png" alt="">
                   <p>订立省</p>
                </div>
                 <div class="pro-select-span" style="width:6.7rem">
                   <img src="https://assets.diningcity.cn/tag/224efa1de4a8ed36b6636c72de01a866.png" alt="">
                   <p>即刻预定</p>
                </div>          
               </div>
             </div>
          </div>
       </div>
       <div style="width:100%;height:12rem; "></div>
    <ul>
      <li>
        <div class="pro-item">
   
 
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>  
        <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>
        <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>
        <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>  
          <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>  
          <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>    
          <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>  
          <li>
        <div class="pro-item">
         <div class="pro-item-inner">
             <table></table>
             <div class="pro-item-img"   style="background-image: url('https://assets.diningcity.cn/restaurantpictures/71326_restaurant_Coffee_Tree.jpg');">
            </div>
              <div class="pro-item-title" style="padding-top:0">
                 <div class="pro-content">
                    <div class="pro-con-type">
                        <span>意大利菜</span>
                    </div>
                    <div class="pro-con-name">
                        <span>
                      Camelia 意大利餐厅 浦东四季酒店
                    </span>
                   </div>
                   <div class="pro-con-price">
                           <span>
                            Avg.￥300   
                           </span>
                   </div>
                </div>
            
            </div>
                <div class="pro-con-num"  style="margin:0">
                   <div class="pro-num">
                      <div class="pro-num1">
                        8.7
                      </div>
                   </div>
                   <div class="pro-num-name">
                        Rating
                   </div>
                   <span class="pro-num-dtc">7.7 km</span>
                </div>
             </div>
               <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/6724614ab1446aac86fa7c439f99e3d3.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">VIP 特殊礼遇</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林餐盘</div>
               </div>
                  <div class="pro-card">
                   <div class="pro-card-img">
                        <img src="https://assets.diningcity.cn/tag/0c2bb3b31ccc6f5c10e70190002d6b17.png" alt="" class="pro-card-img2">
                   </div>
                    <div class="pro-card-name">米其林指南推介餐厅</div>
               </div>
           </div>
      </li>  
     </ul>
       
     </div> 
  
</template>
<script>
export default {
  data() {
    return {
      show1: false,
       show2: false,
        show3: false,
         show4: false
    }
  },

  methods: {
    showPopup(p) {
        if(p==1){
       this.show1 = true;
      }else if(p==2){
       this.show2 = true;
      }else if(p==3){
       this.show3 = true;
      }else if(p){
       this.show4=true
      }
    }
  }
};
</script>
