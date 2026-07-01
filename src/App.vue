<template>
  <router-view />
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap');
@font-face {
  font-family: feilong;
  src: url('/font/HeFengShuDaoZhaoHeFeiLongTi-Shan(GEETYPE-FeilongGBT-Flash)-2.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #2c2c2c;
  background: #f8f9fa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.25); }
</style>
