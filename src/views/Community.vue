<template>
  <div class="community">
    <span class="title">社区交流</span>

     <ul class="community-wrapper">
      <li v-for="(item,index) in communityList" :key="index" @click="change(index)">
        {{item.name}}
        <p class="block" v-show="item.isS"></p>
      </li>
    </ul>

    <ul v-show="isStatae[0]">
      <li class="teclist-content"  v-for="(des,index) in tecList" :key="index">
        <img :src="des.photo" alt="">
        <p>{{des.name}}</p>
        <p>{{des.time}}</p>
        <img :src="des.picture" alt="">
        <p>{{des.article}}</p>
        <p></p>
        <p class="iconfont icon-love-b"> {{des.like}}</p>
        <p class="iconfont icon-yijian"> {{des.message}}</p>
        <p class="iconfont icon-kanguo"> {{des.see}}</p>
      </li>
    </ul>

    <ul v-show="isStatae[1]">
      <li class="teclist-content"  v-for="(des,index) in lifeList" :key="index">
        <img :src="des.photo" alt="">
        <p>{{des.name}}</p>
        <p>{{des.time}}</p>
        <img :src="des.picture" alt="">
        <p>{{des.article}}</p>
        <p></p>
        <p class="iconfont icon-love-b"> {{des.like}}</p>
        <p class="iconfont icon-yijian"> {{des.message}}</p>
        <p class="iconfont icon-kanguo"> {{des.see}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      communityList:[
        {
          name:'技术贴',
          isS: true,
        },
        {
          name:'生活圈',
          isS: false,
        },
        {
          name:'日常减肥',
          isS: false,
        },
        {
          name:'兴趣吧',
          isS: false,
        },
      ],
      tecList:[
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265535345,1890400617&fm=26&gp=0.jpg',
          name:'未知世界',
          time:'40分钟前',
          picture:'http://img1.imgtn.bdimg.com/it/u=3351018000,862558243&fm=26&gp=0.jpg',
          picnumber:1,
          article:'既能用到我所学过的心理学知识，暗示我过去的经历，又能突出设计要以用户体验为基础的重要性。',
          like:320,
          message:588,
          see:100
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265535345,1890400617&fm=26&gp=0.jpg',
          name:'未知世界',
          time:'40分钟前',
          picture:'http://img1.imgtn.bdimg.com/it/u=3351018000,862558243&fm=26&gp=0.jpg',
          picture2:'http://img4.imgtn.bdimg.com/it/u=3707052184,2481401326&fm=26&gp=0.jpg',
          picnumber:2,
          article:'既能用到我所学过的心理学知识，暗示我过去的经历，又能突出设计要以用户体验为基础的重要性。',
          like:320,
          message:588,
          see:100
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265535345,1890400617&fm=26&gp=0.jpg',
          name:'未知世界',
          time:'40分钟前',
          picture:'http://img1.imgtn.bdimg.com/it/u=3351018000,862558243&fm=26&gp=0.jpg',
          picnumber:1,
          article:'既能用到我所学过的心理学知识，暗示我过去的经历，又能突出设计要以用户体验为基础的重要性。',
          like:320,
          message:588,
          see:100
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265535345,1890400617&fm=26&gp=0.jpg',
          name:'未知世界',
          time:'40分钟前',
          picture:'http://img1.imgtn.bdimg.com/it/u=3351018000,862558243&fm=26&gp=0.jpg',
          picnumber:1,
          article:'既能用到我所学过的心理学知识，暗示我过去的经历，又能突出设计要以用户体验为基础的重要性。',
          like:3022,
          message:588,
          see:100
        }
      ],
      lifeList:[
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=265535345,1890400617&fm=26&gp=0.jpg',
          name:'未知世界',
          time:'40分钟前',
          picture:'http://img1.imgtn.bdimg.com/it/u=3351018000,862558243&fm=26&gp=0.jpg',
          article:'既能用到我所学过的心理学知识，暗示我过去的经历，又能突出设计要以用户体验为基础的重要性。',
          like:320,
          message:588,
          see:100
        }
      ],
      isStatae:[
        true,
        false,
        false,
        false,
      ],
    }
  },
  methods:{
    change(index){
      for(var i=0 ;i<this.communityList.length ;i++){
        this.isStatae[i] = false;
        this.communityList[i].isS = false;
        if(index == i){
          this.isStatae[i] = true;
          this.communityList[i].isS = true;
        }
      };
    }
  },
  // create(){
  //   for(var i=0;i<tecList.length;i++)
  //   {
  //     if(this.tecList[1].picnumber==2){

  //     }
  //   }
  // }
}
</script>
<style lang="scss" scoped>
  .title{
    height: .6rem;
    line-height: .6rem;
    margin-left: .12rem;
    font-size: .16rem;
  }
  .community-wrapper{
    width: 3.75rem;
    height: .28rem;
    li{
      float: left;
      width: .9rem;
      height: .28rem;
      line-height: .28rem;
      text-align: center;
      font-size: .16rem;
    }
  }
  .teclist-content{
    width: 3.75rem;
    height: 3.14rem;
    position: relative;
    img:nth-child(1){
      width: .3rem;
      height: .3rem;
      top: .12rem;
      left: .12rem;
      border-radius: .15rem;
      position: absolute;
    }
    p:nth-child(2){
      top: .2rem;
      left: .54rem;
      font-size: .14rem;
      position: absolute;
    }
    p:nth-child(3){
      top: .2rem;
      left: 2.93rem;
      font-size: .12rem;
      position: absolute;
    }
    img:nth-child(4){
      width: 3.02rem;
      height: 1.65rem;
      top: .52rem;
      left: .45rem;
      border-radius: .15rem;
      position: absolute;
    }
    p:nth-child(5){
      width: 2.98rem;
      height: .38rem;
      top: 2.23rem;
      left: .51rem;
      font-size: .12rem;
      position: absolute;
    }
    p:nth-child(6){
      width: 3rem;
      height: .005rem;
      top: 2.72rem;
      left: .48rem;
      background:#EDEDED;
      position: absolute;
    }
    p:nth-child(7){
      top: 2.9rem;
      left: .51rem;
      position: absolute;
    }
    p:nth-child(8){
      top: 2.9rem;
      left: 1.8rem;
      position: absolute;
    }
    p:nth-child(9){
      top: 2.9rem;
      left: 2.9rem;
      position: absolute;
    }
  }
  .block{
    width: .3rem;
    height: .02rem;
    margin-left: .3rem;
    background: #000000;
  }
</style>