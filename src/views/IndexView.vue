<template>
  <AppHeader />
  <div class="section animated zoomInLeft">
    <ul>
      <li v-for="(slide, i) in slides" :key="i" :class="{ active: i === currentIndex }">
        <img :src="slide.img" :alt="slide.alt" />
      </li>
    </ul>
    <ol>
      <li
        v-for="(slide, i) in slides"
        :key="'p' + i"
        :class="{ active: i === currentIndex }"
        @click="currentIndex = i"
      ></li>
    </ol>
    <div class="left" @click="prev">&lt;</div>
    <div class="right" @click="next">&gt;</div>
  </div>
  <div class="list">
    <div class="item" :class="{ active: itemActive === 0 }" @click="goExternal" @mouseenter="itemActive = 0" @mouseleave="itemActive = -1">
      <img src="/imgs/hz3.jpg" alt="" />
      <p>一座美丽的城市--杭州</p>
    </div>
    <div class="item" :class="{ active: itemActive === 1 }" @click="goPage('/culture')" @mouseenter="itemActive = 1" @mouseleave="itemActive = -1">
      <img src="/imgs/hz6.jfif" alt="" />
      <p>走进杭州文化</p>
    </div>
    <div class="item itemlast" :class="{ active: itemActive === 2 }" @click="goPage('/travel')" @mouseenter="itemActive = 2" @mouseleave="itemActive = -1">
      <img src="/imgs/hz7.jfif" alt="" />
      <p>走进杭州旅游</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()
const currentIndex = ref(0)
const itemActive = ref(-1)
let timer = null

const slides = [
  { img: '/imgs/hz4.jpg', alt: '' },
  { img: '/imgs/hz2.jfif', alt: '' },
  { img: '/imgs/hz3.jpg', alt: '' },
  { img: '/imgs/hz1.jfif', alt: '' },
]

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const goExternal = () => {
  window.location.href = 'https://baike.baidu.com/item/%E6%9D%AD%E5%B7%9E%E5%B8%82/200167'
}
const goPage = (path) => router.push(path)

onMounted(() => {
  timer = setInterval(next, 3000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.section {
  margin: 0 auto;
  width: 70%;
  height: 70vh;
  border: 1px solid;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
}
.section ol, ul, li { list-style: none; }
.section ul { position: relative; width: 100%; height: 100%; }
.section ul li {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  opacity: 0;
  transition: all 1s linear;
}
.section ul li.active { opacity: 1; }
.section ul li img { width: 100%; height: 100%; object-fit: cover; }
.section ol {
  position: absolute;
  left: 20px; bottom: 20px;
  width: 120px; height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.section ol li {
  width: 20px; height: 20px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
}
.section ol li.active { background-color: orange; }
.section .left, .right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px; height: 50px;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
}
.section .left { left: 0; }
.section .right { right: 0; }

.list {
  width: 70%;
  height: 30vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.list .item {
  cursor: pointer;
  height: 90%;
  width: 30%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
}
.list .item.active { transform: scale(1.1); }
.list img { height: 75%; display: block; width: 100%; object-fit: cover; }
.list p { flex: 1; display: flex; align-items: center; justify-content: center; }
</style>
