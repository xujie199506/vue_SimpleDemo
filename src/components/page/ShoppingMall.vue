<template>
  <div>
    <van-row class="test-row">
      <van-col span="3">
        <img
          class="location"
          :src="location"
          width="80%"
        >
      </van-col>
      <van-col span="16">
        <input
          type="text"
          class="search-input"
        >
      </van-col>
      <van-col span="5">
        <van-button size="mini">搜索</van-button>
      </van-col>
    </van-row>
    <!-- swiper -->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item
          v-for="(pic,index) in bannerpic"
          :key="index"
        >
          <img
            v-lazy="pic.image"
            width="100%"
          >
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type bar -->
    <div class="type-bar">
      <div
        class=""
        v-for="(cate,index) in category"
        :key="index"
      >
        <img
          v-lazy="cate.image"
          width="90%"
        >
        <span>{{cate.mallCategoryName
          }}</span>
      </div>
    </div>
    <!-- banner -->
    <div>
      <img
        v-lazy="adbanner"
        width="100%"
      >
    </div>
    <!-- 商品推荐区 -->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(item,index) in recommendGoods"
            :key="index"
          >
            <div class="recommend-item">
              <img
                :src="item.image"
                width="80%"
              >
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <swiperDefult></swiperDefult>
  </div>
</template>

<script>
import axios from "axios";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import swiperDefult from "../swiper/swiperDefult";

export default {
  components: {
    swiper,
    swiperSlide,
    swiperDefult
  },
  data() {
    return {
      msg: "ShoppingMall",
      location: require("../../assets/images/location.png"),
      bannerpic: [],
      category: [],
      adbanner: "",
      recommendGoods: [],
      swiperOptions: {
        slidesPerView: 3
      }
    };
  },
  created() {
    axios({
      url:
        "https://www.easy-mock.com/mock/5c80b9731493b0620fb24e8b/example/hoem",
      method: "get"
    })
      .then(response => {
        console.log(response);
        if (response.status == 200) {
          this.category = response.data.data.category;
          this.adbanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerpic = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.test-row {
  height: 2.2rem;
  background-color: hsl(327, 99%, 45%);
  line-height: 2.2rem;
  /* 隐藏溢出 */
  overflow: hidden;
}
.search-input {
  width: 100%;
  height: 1rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff !important;
  background-color: #e5017d;
  color: white;
}
.location {
  padding-left: 0.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
}
.swiper-area {
  clear: both;
  max-height: 10rem;
  overflow: hidden;
}
.type-bar {
  background-color: white;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: white;
  margin-top: 0.3rem;
}
.recommend-title {
  text-align: left;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 0.2rem;
  color: #e5017d;
}
。recommend-body {
  border-bottom: 1px solid #eee;
}
.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  text-align: center;
  font-size: 12px;
}
</style>