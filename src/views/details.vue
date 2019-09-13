<template>
    <div>
        <div>
            <img id="details_img_d1" class="details_img" src="../../public/img/01aa.jpg" alt="">
            <img id="details_img_d2"  class="details_img" src="../../public/img/6fcd36ea9be3dbce429202f2757123bc.jpg" alt="">
            <img id="details_img_d3"  class="details_img" src="../../public/img/01aa.jpg" alt="">
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
    </div>
</template>
<script>

</script>
<style>
#details_span1{
    color:#dc2224;
    font-size:1.5625rem;
}
#details_btn1{
    color:#95989a;
    border:0.0625rem solid #95989a;
    border-radius:0.25rem;
    padding: 0.125rem 0.4375rem;
    margin-right: 0.9375rem;

}
#details_title{
    font-size: 1.5625rem;
    color:#333;
    font-weight:600;
    line-height: 1.2
}
.details_img{
    width:100%;
    /* width:20.625rem; */
    height:13.75rem;
}
#details_img_d1{
    display:none;
}
#details_img_d2{
    display: none
}
</style>