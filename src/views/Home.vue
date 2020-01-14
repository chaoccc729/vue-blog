<template>
  <div class="wrap">
    <header class="home">
      <span>咨询</span>
      <input placeholder="搜索文章或作者..." type="search">
      <P class="iconfont icon-sousuo"></P>
    </header>

    <div id="imgs">
      <Swiper v-if="imgs.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500">
        <Slide v-for="(item,index) in imgs" :key="index">
          <img :src="item" alt="">
        </Slide>
      </Swiper>
    </div>
    
    <ul class="home-wrapper">
      <li v-for="(item,index) in homeList" :key="index" @click="change(index)">
        {{item.name}}
        <p class="block" v-show="item.isC"></p>
      </li>
    </ul>

    <ul class="reco-list" v-show="isStatae[0]">
      <li v-for="(des,index) in recoList" :key="index">
        <img :src="des.photo" alt="">
        <img :src="des.picture" alt="">
        <p>{{des.name}}</p>
        <p>{{des.title}}</p>
        <p>{{des.time}}</p>
      </li>
    </ul>

    <ul class="reco-list" v-show="isStatae[1]">
      <li v-for="(des,index) in hoverList" :key="index">
        <img :src="des.photo" alt="">
        <img :src="des.picture" alt="">
        <p>{{des.name}}</p>
        <p>{{des.title}}</p>
        <p>{{des.time}}</p>
      </li>
    </ul>

    <ul class="design-list" v-show="isStatae[2]">
      <li v-for="(des,index) in designList" :key="index">
        {{des.question}}
      </li>
    </ul>

    <ul class="reco-list" v-show="isStatae[3]">
      <li v-for="(des,index) in thinkList" :key="index">
        <img :src="des.photo" alt="">
        <img :src="des.picture" alt="">
        <p>{{des.name}}</p>
        <p>{{des.title}}</p>
        <p>{{des.time}}</p>
      </li>
    </ul>

    <ul class="reco-list" v-show="isStatae[4]">
      <li v-for="(des,index) in recoList" :key="index">
        <img :src="des.photo" alt="">
        <img :src="des.picture" alt="">
        <p>{{des.name}}</p>
        <p>{{des.title}}</p>
        <p>{{des.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Swiper, Slide } from 'vue-swiper-component';
  export default{
    data(){
      return{
        imgs:[
          'https://f10.baidu.com/it/u=2759052031,4008546239&fm=72',
          'https://f12.baidu.com/it/u=2429965334,75889142&fm=72',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=362749520,3541634905&fm=15&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=32045796,2474854096&fm=26&gp=0.jpg'
        ],
        homeList:[
          {
            name:'推荐',
            isC:true,
          },
          {
            name:'24小时',
            isC:false,
          },
          {
            name:'设计圈',
            isC:false,
          },
          {
            name:'创新思维',
            isC:false,
          },
          {
            name:'娱乐淘宝',
            isC:false,
          },
        ],
        recoList:[
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          },
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          },
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          },
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          },
        ],
        isStatae:[
          true,
          false,
          false,
          false,
          false
        ],
        hoverList:[
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          },
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          },
        ],
        designList:[
          {
            question:'用户体验设计师中可能问到的十个高频问题'
          },
          {
            question:'用户体验设计师中可能问到的十个高频问题'
          },
          {
            question:'用户体验设计师中可能问到的十个高频问题'
          },
        ],
        thinkList:[
          {
            title:'来自德国小城的本土日化品牌，在中国开辟了全新广阔的市场',
            picture:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
            photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3583433020,118316633&fm=26&gp=0.jpg',
            name:'中国经济网',
            time:'1小时前'
          }
        ]
      }
    },
    components: {
      Swiper,
      Slide
    },
  methods:{
    change(index){
      console.log(index)
      for(var i=0 ;i<this.homeList.length ;i++){
        this.homeList[i].isC = false;
        this.isStatae[i] = false;
        if(index == i){
          this.homeList[i].isC = true;
          this.isStatae[i] = true;
        }
      };
    }
  }
  }
</script>
<style lang="scss" scoped>
  .home{
    float: left;
    width: 3.75rem;
    height: .64rem;
    position: relative;
    span{
      top: .19rem;
      left: .12rem;
      color: #272727;
      font-size: .2rem;
      position: absolute;
    }
    input{
      width: 2.74rem;
      height: .3rem;
      top: .14rem;
      right: .12rem;
      padding-left: .1rem;
      border: 1px solid #7D7D7D;
      border-radius: 30px;
      position: absolute;
    }
    p{
      top: .18rem;
      left: 3.34rem;
      position: absolute;
    }
  }
  #imgs{
    width: 3.75rem;
    height: 1.29rem;
    img{
      width: 2.93rem;
      height: 1.29rem;
      margin-left: .38rem;
      border-radius: 15px;
    }
  }
  .home-wrapper{
    width: 5rem;
    height: .28rem;
    margin-top: .8rem;
    overflow: auto;
    li{
      float: left;
      width: .8rem;
      height: .28rem;
      line-height: .28rem;
      text-align: center;
      font-size: .16rem;
    } 
  }
  .block{
    width: .3rem;
    height: .02rem;
    margin-left: .25rem;
    background: #000000;
    position: absolute;
  }
  .reco-list{
    width: 3.75rem;
    li{
      width: 3.51rem;
      height: 1.22rem;
      margin: 0 auto;
      margin-top: .20rem;
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
      position: relative;
      img:nth-child(1){
        width: 1.15rem;
        height: 1.01rem;
        top: .11rem;
        left: .1rem;
        border-radius: 12px;
        position: absolute;
      }
      img:nth-child(2){
        width: .24rem;
        height: .24rem;
        bottom: .14rem;
        left: 1.36rem;
        border-radius: .12rem;
        position: absolute;
      }
      p:nth-child(3){
        top: .9rem;
        left: 1.68rem;
        font-size: .14rem;
        color: #9B9B9B;
        position: absolute;
      }
      p:nth-child(4){
        top: .14rem;
        left: 1.36rem;
        font-size: .14rem;
        color: #434343;
        position: absolute;
      }
      p:nth-child(5){
        top: .91rem;
        left: 2.93rem;
        font-size: .14rem;
        color: #9B9B9B;
        position: absolute;
      }
    }
  }
  .design-list{
    width: 3.75rem;
    li{
      width: 3.5rem;
      height: .4rem;
      margin: .1rem auto;
      line-height: .4rem;
      text-align: center;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.12);
      border-radius: 12px;
    }
  }
</style>