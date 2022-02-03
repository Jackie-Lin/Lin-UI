<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo />
    <m-card 
      imgSrc="java.png"
      summary="组件库是软件开源协同的一个典型"
    />
    <br/>
    <m-card
      imgSrc="Vue.png"
      summary="【Flutter入门】3小时完成微信读书发现界面"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 - 528人报名</div>
          <div class="price">￥ 2889.00</div>
        </div>
      </template>
    </m-card>
    <br/>
    <m-card 
      imgSrc="springBot.png"
      :width="370"
      :imgHeight="90"
    >
      本路线旨在帮助想快速掌握SpringBoot应用的工程师，全方位多角度带你升级。
      <template>
        <div class="footer-spring">
          <div class="level">4步骤 - 6门课</div>
          <div class="level">10565收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  padding-top: 8px;
  font-size: 12px;
}
</style>
