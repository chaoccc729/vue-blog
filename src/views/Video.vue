<template>
  <div class="video">
    <span class="video-content">视频专区</span>
    <ul class="list">
      <li v-for="(item,index) in nameList" :key="index">
        <img :src="item.photo" alt="">
        <p>{{item.name}}</p>
        <span id="follow" :style="{color:item.color,background:item.bg}">{{item.follow}}</span>
      </li>
    </ul>

    <div class="video-wrapper"></div>

    <ul class="video-img">
      <li v-for="(item,index) in videoList" :key="index">
        <img :src="item" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nameList:[
        {
          photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg',
          name:'艾米丽',
          follow:'关注',
          bg:'#000000',
          color:'#ffffff'
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3749323882,846155126&fm=26&gp=0.jpg',
          name:'qwer',
          follow:'关注',
          bg:'#000000',
          color:'#ffffff'
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
          name:'sdf',
          follow:'关注',
          bg:'#000000',
          color:'#ffffff'
        },
        {
          photo:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg',
          name:'vb',
          follow:'已关注',
          bg:'#ffffff',
          color:'#9B9B9B'
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3749323882,846155126&fm=26&gp=0.jpg',
          name:'dfg',
          follow:'关注',
          bg:'#000000',
          color:'#ffffff'
        },
        {
          photo:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=571610305,1553276443&fm=26&gp=0.jpg',
          name:'rty',
          follow:'已关注',
          bg:'#ffffff',
          color:'#9B9B9B'
        }
      ],
      videoList:[
        'http://i1.fuimg.com/697609/ea94032192fd87bb.png',
        'http://i1.fuimg.com/697609/ea94032192fd87bb.png',
        'http://i1.fuimg.com/697609/ea94032192fd87bb.png',
        'http://i1.fuimg.com/697609/ea94032192fd87bb.png',
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .video-content{
    width: .83rem;
    height: .5em;
    line-height: .5rem;
    margin-left: .1rem;
    color: #272727;
    font-size: .2rem;
  }
  .list{
    width: 3.75re;
    height: 1.2rem;
    margin: 0 auto;
    li{
      float: left;
      width: .62rem;
      text-align: center;
      img{
      width: .5rem;
      height: .5rem;
      border-radius: .25rem;
      }
      p{
        font-size: .13rem;
      }
      span{
        padding-left: .1rem;
        padding-right: .1rem;
        font-size: .12rem;
        border-radius: 10px;
      }
    }
  }
  .video-wrapper{
    width: 3.75rem;
    height: .08rem;
    background: #F7F7F7;
  }
  .video-img{
    width: 3.75rem;
    li{
      float: left;
      padding-left: .1rem;
      padding-right: .04rem;
      padding-top: .12rem;
      img{
        width: 1.7rem;
        height: 2.56rem;
      }
    }
  }
</style>