<template>
  <ul class="app-header">
    <li class="iconfont icon-xinhao"></li>
    <li>千库网</li>
    <li class="iconfont icon-WIFI"></li>
    <li>9:41 AM</li>
    <li class="iconfont icon-lanya"></li>
    <li>100%</li>
    <li class="iconfont icon-dianliang201"></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .app-header{
    width: 3.75rem;
    height: .25rem;
    font-size: .17rem;
    margin: 0 auto;
    background: #ffffff;
    position: relative;
    li{
      float: left;
    }
    li:nth-child(1){
      left: .05rem;
      position: absolute;
    }
    li:nth-child(2){
      width: 1rem;
      left: .24rem;
      position: absolute;
    }
    li:nth-child(3){
      left: .8rem;
      position: absolute;
    }
    li:nth-child(4){
      width: 1rem;
      left: 1.65rem;
      position: absolute;
    }
    li:nth-child(5){
      left: 2.8rem;
      position: absolute;
    }
    li:nth-child(6){
      left: 3rem;
      position: absolute;
    }
    li:nth-child(7){
      left: 3.45rem;
      position: absolute;
    }
  }
</style>