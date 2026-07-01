<template>
  <AppHeader />
  <div class="index-page">
    <!-- Hero Carousel -->
    <div class="carousel-container">
      <div class="carousel">
        <div
          v-for="(slide, i) in slides"
          :key="i"
          class="slide"
          :class="{ active: i === currentIndex }"
        >
          <img :src="slide.img" :alt="slide.alt" />
          <div class="slide-overlay"></div>
        </div>
      </div>
      <div class="carousel-indicators">
        <span
          v-for="(slide, i) in slides"
          :key="'p' + i"
          class="indicator"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
        ></span>
      </div>
      <div class="carousel-arrow left" @click="prev">‹</div>
      <div class="carousel-arrow right" @click="next">›</div>
    </div>

    <!-- Cards Section -->
    <div class="cards-section">
      <div class="card" @click="goExternal">
        <div class="card-image">
          <img src="/imgs/hz3.jpg" alt="" />
        </div>
        <div class="card-content">
          <h3>美丽杭州</h3>
          <p>一座美丽的城市，西湖之畔，钱塘江边的诗画天堂</p>
          <span class="card-link">了解更多 →</span>
        </div>
      </div>
      <div class="card" @click="goPage('/culture')">
        <div class="card-image">
          <img src="/imgs/hz6.jfif" alt="" />
        </div>
        <div class="card-content">
          <h3>杭州文化</h3>
          <p>千年古都的文化底蕴，良渚文明的璀璨光芒</p>
          <span class="card-link">探索文化 →</span>
        </div>
      </div>
      <div class="card" @click="goPage('/travel')">
        <div class="card-image">
          <img src="/imgs/hz7.jfif" alt="" />
        </div>
        <div class="card-content">
          <h3>杭州旅游</h3>
          <p>西湖美景、千岛碧水，开启一段诗意的旅程</p>
          <span class="card-link">旅游攻略 →</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const router = useRouter()
const currentIndex = ref(0)
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
  timer = setInterval(next, 4000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
.index-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 60px;
  padding-top: 24px;
}

/* Carousel */
.carousel-container {
  position: relative;
  width: 100%;
  height: 65vh;
  max-height: 680px;
  min-height: 380px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
}
.slide.active {
  opacity: 1;
}
.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 45%);
}
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 24px;
  display: flex;
  gap: 8px;
  z-index: 2;
}
.indicator {
  width: 28px;
  height: 4px;
  background: rgba(255,255,255,0.4);
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s;
}
.indicator.active {
  background: #fff;
  width: 44px;
}
.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  font-size: 22px;
  color: #333;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border: none;
}
.carousel-arrow:hover {
  background: #fff;
  transform: translateY(-50%) scale(1.08);
}
.carousel-arrow.left { left: 16px; }
.carousel-arrow.right { right: 16px; }

/* Cards */
.cards-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.card {
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1);
}
.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}
.card:hover .card-image img {
  transform: scale(1.06);
}
.card-content {
  padding: 20px;
}
.card-content h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 17px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 6px;
}
.card-content p {
  font-size: 13px;
  color: #999;
  line-height: 1.5;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card-link {
  font-size: 13px;
  color: #1a6db5;
  font-weight: 500;
  letter-spacing: 0.3px;
}
</style>
