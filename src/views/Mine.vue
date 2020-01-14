<template>
  <div class="mine">
    <span class="mine-content">视频专区</span>
    <div class="study">
      <img src="../assets/images/111.jpg" alt="">
      <span>学习不止步</span>
      <span>学习本应该就是终身的事情！共勉</span>

      <ul class="message">
        <li>
          <p>120</p>
          <p>发帖数</p>
        </li>
        <li>
          <p>320</p>
          <p>回帖数</p>
        </li>
        <li>
          <p>890</p>
          <p>评论数</p>
        </li>
      </ul>
    </div>

    <ul class="list">
      <router-link to="/message">
        <li>
        <p class="iconfont icon-xiaoxi"></p>
        <p>我的消息</p>
        <p>20</p>
        <p class="iconfont icon-youjiantou"></p>
      </li>
      </router-link>
      <li>
        <p class="iconfont icon-pinglun"></p>
        <p>我的评论</p>
        <p>23</p>
        <p class="iconfont icon-youjiantou"></p>
      </li>
      <li>
        <p class="iconfont icon-tianchongxing-"></p>
        <p>我的好友</p>
        <p>34</p>
        <p class="iconfont icon-youjiantou"></p>
      </li>
      <li>
        <p class="iconfont icon-shoucang"></p>
        <p>我的收藏</p>
        <p>34</p>
        <p class="iconfont icon-youjiantou"></p>
      </li>
      <li class="block"></li>
      <li>
        <p class="iconfont icon-xitong"></p>
        <p>系统设置</p>
        <p>45</p>
        <p class="iconfont icon-youjiantou"></p>
      </li>
      <li>
        <p class="iconfont icon-ziyuan"></p>
        <p>意见反馈</p>
        <p>34</p>
        <p class="iconfont icon-youjiantou"></p>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .mine-content{
    width: .83rem;
    height: .5em;
    line-height: .5rem;
    margin-left: .1rem;
    color: #272727;
    font-size: .2rem;
  }
  .study{
    width: 3.42rem;
    height: 1.4rem;
    margin-left: .17rem;
    box-shadow: 0 4px 18px 0 rgba(0,0,0,0.09);
    border-radius: 20px;
    position: relative;
    img{
      width: .66rem;
      height: .66rem;
      top: .18rem;
      left: .16rem;
      position: absolute;
    }
    span:nth-child(2){
      top: .24rem;
      left: 1.06rem;
      position: absolute;
    }
    span:nth-child(3){
      top: .56rem;
      left: 1.06rem;
      font-size: .13rem;
      position: absolute;
    }
    .message{
      top: .9rem;
      left: .9rem;
      font-size: .16rem;
      position: absolute;
      li{
        float: left;
        width: .78rem;
        text-align: center;
        p:nth-child(2){
          font-size: .11rem;
          color: #9B9B9B;
        }
      }
    }
  }

  .list{
    width: 3.75rem;
    padding-top: .42rem;
    li{
      width: 3.38rem;
      height: .5rem;
      line-height: .5rem;
      margin: 0 auto;
      font-size: .15rem;
      color: #272727;
      p{
        float: left;
      }
      p:nth-child(2){
        padding-left: .2rem;
      }
      p:nth-child(3){
        padding-left: 2rem;
      }
    }
    .block{
      width: 3.75rem;
      height: .1rem;
      background: #F7F7F7;;
    }
  }
</style>