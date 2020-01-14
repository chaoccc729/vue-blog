<template>
  <div class="footer">
    <ul class="app-footer" >
      <li v-for="(item,index) in navList" :key="index" @click="change(index)">
        <router-link :to="item.path" :style="{color:item.color}">
          <p  class="iconfont" :class="item.icon"></p>
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 data(){
   return{
    navList:[
      {
        name:'资讯',
        color:'#000000',
        icon:'icon-zixun',
        path:'/home'
      },
      {
        name:'社区',
        color:'#999999',
        icon:'icon-shequ',
        path:'/community'
      },
      {
        name:'视频',
        color:'#999999',
        icon:'icon-video',
        path:'/video'
      },
      {
        name:'我的',
        color:'#999999',
        icon:'icon-wode',
        path:'/mine'
      },
    ]
   }
  },
  methods:{
    change(index){
      for(var i=0 ;i<this.navList.length ;i++){
        this.navList[i].color = '#999999';
        if(index == i){
          this.navList[i].color = '#000000';
        }
      };
    }
  }
}
</script>

<style lang="scss">
  .app-footer{ 
    width: 3.75rem;
    height: .5rem;
    line-height: .25rem;
    margin: 0 auto;
    padding-top: .1rem;
    text-align: center;
    background: #ffffff;
    position: relative;
    li{
      width: .92rem;
      float: left;
      color: #999999;
      font-size: .10rem;
      p{
        font-size: .21rem;
      }
      a{
        color: #999999;
      }
    }
  }
</style>