<template>
  <div class="message">
    <div class="message-content">
      <router-link to="/mine">
        <p class="iconfont icon-zuojiantou"></p>
      </router-link>
      <p>我的消息</p>
    </div>

    <ul class="message-wrapper">
      <li class="message-love">
        <img src="../assets/images/222.jpg" alt="">
        <p>系统通知</p>
      </li>
      <li class="message-love">
        <img src="../assets/images/Oval Copy@2x.png" alt="">
        <p>我的收藏</p>
      </li>
      <li class="block"></li>
      <li class="message-containter" v-for="(item,index) in list" :key="index">
        <img :src="item.photo" alt="">
        <p>{{item.name}}</p>
        <p>{{item.message}}</p>
        <p>{{item.time}}</p>
        <p>{{item.number}}</p>
        <p></p>
      </li>
    </ul>
    <div class="message-footer"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          name:'外太空的爆米花',
          photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg',
          time:'下午 1:45',
          message:'最近的有书单分享哈！',
          number:'3'
        },
        {
          name:'外太空的爆米花',
          photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg',
          time:'下午 1:45',
          message:'最近的有书单分享哈！',
          number:'6'
        },
        {
          name:'外太空的爆米花',
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
          time:'下午 1:45',
          message:'最近的有书单分享哈！',
          number:'8'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .message-content{
    width: 3.65rem;
    height: .5rem;
    line-height: .5rem;
    padding-left: .1rem;
    border-bottom: 1px solid #EDEDED;
    p{
      float: left;
      font-size: .18rem;
      color: #4A4A4A;
    }
    p:nth-child(2){
      padding-left: 1.2rem;
    }
  }
  .message-footer{
    width: 3.75rem;
    height: .5rem;
    bottom: 0;
    background: #ffffff;
    position: fixed;
    z-index: 999;
  }
  .message-love{
    width: 3.75rem;
    height: .76rem;
    line-height: .76rem;
    position: relative;
    img{
      width: .46rem;
      height: .46rem;
      top: .15rem;
      left: .16rem;
      position: absolute;
    }
    p{
      left: .8rem;
      position: absolute;
    }
  }
  .block{
    width: 3.75rem;
    height: .1rem;
    background: #F7F7F7;;
  }
  .message-containter{
    width: 3.75rem;
    height: .75rem;
    position: relative;
    img{
      width: .46rem;
      height: .46rem;
      top: .16rem;
      left: .16rem;
      border-radius: .23rem;
      position: absolute;
    }
    p:nth-child(2){
      top: .18rem;
      left: .73rem;
      font-size: .14rem;
      color: #282828;
      position: absolute;
    }
    p:nth-child(3){
      top: .44rem;
      left: .73rem;
      font-size: .12rem;
      color: #999999;
      position: absolute;
    }
    p:nth-child(4){
      top: .3rem;
      right: .12rem;
      font-size: .12rem;
      color: #999999;
      position: absolute;
    }
    p:nth-child(5){
      width: .15rem;
      height: .15rem;
      top: .2rem;
      right: 1.84rem;
      font-size: .12rem;
      border-radius: .075rem;
      color: #ffffff;
      background: #F95E5E;
      text-align: center;
      position: absolute;
    }
  }
</style>