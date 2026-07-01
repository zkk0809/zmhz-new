<template>
  <AppHeader />
  <div class="travel-page">
    <div class="travel-layout">
      <div class="travel-nav">
        <button
          v-for="(tab, i) in tabs"
          :key="i"
          :class="{ active: activeTab === i }"
          @click="activeTab = i"
        >
          {{ tab }}
        </button>
      </div>

      <div class="travel-content">
        <!-- 景点 -->
        <div v-show="activeTab === 0" class="tab-panel">
          <div class="spot-grid">
            <div class="spot-card">
              <img src="/imgs/xihu.jpg" alt="西湖" />
              <div class="spot-info">
                <h4>西湖</h4>
                <p>杭州的标志性景点，被誉为"人间天堂"。西湖风景区包括西湖本身和周边的苏堤、白堤、断桥等景点。</p>
              </div>
            </div>
            <div class="spot-card">
              <img src="/imgs/lys.jpg" alt="灵隐寺" />
              <div class="spot-info">
                <h4>灵隐寺</h4>
                <p>位于杭州市西湖区灵隐街，是中国佛教禅宗的发源地之一，现为国家AAAAA级旅游景区。</p>
              </div>
            </div>
            <div class="spot-card">
              <img src="/imgs/qdh.jpg" alt="千岛湖" />
              <div class="spot-info">
                <h4>千岛湖</h4>
                <p>位于杭州市淳安县，是中国最大的人工湖之一，是杭州著名的旅游胜地。</p>
              </div>
            </div>
            <div class="spot-card">
              <img src="/imgs/lft.jpg" alt="雷峰塔" />
              <div class="spot-info">
                <h4>雷峰塔</h4>
                <p>位于杭州市西湖区，是中国古代建筑的代表之一，现为国家AAAAA级旅游景区。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 美食 -->
        <div v-show="activeTab === 1" class="tab-panel">
          <div class="food-grid">
            <div class="food-card">
              <img src="/imgs/xhcy.jfif" alt="西湖醋鱼" />
              <div class="food-info">
                <h4>西湖醋鱼</h4>
                <p>以西湖醋为调料，加上鲜嫩的鱼肉，口感酸甜可口的传统名菜。</p>
              </div>
            </div>
            <div class="food-card">
              <img src="/imgs/ljxr.jpg" alt="龙井虾仁" />
              <div class="food-info">
                <h4>龙井虾仁</h4>
                <p>以龙井茶和虾仁为主要原料，虾仁鲜嫩，茶香浓郁。</p>
              </div>
            </div>
            <div class="food-card">
              <img src="/imgs/ybx.jfif" alt="油爆虾" />
              <div class="food-info">
                <h4>油爆虾</h4>
                <p>虾肉鲜嫩，口感酥脆，外表金黄，香气扑鼻的传统名菜。</p>
              </div>
            </div>
            <div class="food-card">
              <img src="/imgs/nmj.jpg" alt="糯米鸡" />
              <div class="food-info">
                <h4>糯米鸡</h4>
                <p>由糯米、鸡肉、腊肠等制成的传统小吃，口感香糯可口。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 攻略 -->
        <div v-show="activeTab === 2" class="tab-panel">
          <div class="guide-content">
            <p class="guide-intro">
              如果，把杭州比喻成一个人的话，那一定是一个有着明亮双眸、读过一些诗书、柔声细语、总是微笑偶尔落泪，且待字闺中的大小姐。她有得天独厚却不张扬的美貌，浓妆淡抹总相宜的西湖、清幽的九溪十八涧、闹中取静的西溪湿地、闲云野鹤般存在的西泠印社，让几乎每一个来过的人都称赞不绝。
            </p>

            <div class="guide-sections">
              <div class="guide-section">
                <h3>出行前必备</h3>
                <ul>
                  <li><strong>电器类：</strong>手机、自拍杆、相机</li>
                  <li><strong>生活用品：</strong>防晒霜、水乳面霜、卸妆油、洗面奶、面膜</li>
                  <li><strong>衣服：</strong>根据天气带衣服、外套、运动鞋</li>
                  <li><strong>药品：</strong>肠胃药、驱蚊水、感冒药、创可贴</li>
                  <li><strong>其他：</strong>口罩、水杯、雨具、湿巾等</li>
                </ul>
              </div>
              <div class="guide-section">
                <h3>杭州交通</h3>
                <ul>
                  <li><strong>机场：</strong>巴士候机楼到达厅8号门20元/人</li>
                  <li><strong>杭州站（城站）：</strong>到西湖坐出租只要10分钟</li>
                  <li><strong>杭州东站：</strong>以高铁动车为主，离市区比较近</li>
                  <li><strong>杭州南站：</strong>离市区较远，去萧山可选</li>
                </ul>
              </div>
              <div class="guide-section">
                <h3>杭州必玩景点</h3>
                <ul>
                  <li>① 孤山路 — 在杭州西湖最像海的转角，等一场浪漫</li>
                  <li>② 苏堤 — 适合情侣、家人，一起走完苏堤就能永远不分手</li>
                  <li>③ 宝石山 — 山顶俯瞰西湖全景，看日出日落</li>
                  <li>④ 浴鹄湾 — 杭州本地人很喜欢去的地方，人少景美</li>
                  <li>⑤ 法喜寺 — 求姻缘超灵的网红寺庙</li>
                  <li>⑥ 满陇桂雨 — 秋天最诱人的地方，桂花香气四溢山谷</li>
                  <li>⑦ 小河直街 — "上有天堂，下有苏杭"的缩影</li>
                  <li>⑧ 龙坞茶园 — 逃离城市喧嚣，误入世外桃源</li>
                  <li>⑨ 良渚公园 — 风景不错，还有小鹿，误入宫崎骏漫画</li>
                  <li>⑩ 晓书馆 — 杭州最美图书馆</li>
                </ul>
              </div>
              <div class="guide-section">
                <h3>3天2晚游玩路线</h3>
                <div class="route-timeline">
                  <div class="route-day">
                    <span class="day-badge">Day 1</span>
                    <p>满陇桂雨 → 花港观鱼 → 苏堤 → 孤山路</p>
                  </div>
                  <div class="route-day">
                    <span class="day-badge">Day 2</span>
                    <p>法喜寺 → 北山街 → 宝石山 → 小河直街</p>
                  </div>
                  <div class="route-day">
                    <span class="day-badge">Day 3</span>
                    <p>良渚古城遗址公园 → 良渚文化村</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'

const activeTab = ref(0)
const tabs = ['杭州景点', '杭州美食', '旅游攻略']
</script>

<style scoped>
.travel-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 60px;
}
.travel-layout {
  display: flex;
  gap: 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  min-height: 500px;
}
.travel-nav {
  width: 180px;
  flex-shrink: 0;
  border-right: 1px solid #f0f0f0;
}
.travel-nav button {
  width: 100%;
  padding: 16px 20px;
  border: none;
  background: transparent;
  font-size: 15px;
  color: #888;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-family: inherit;
  border-bottom: 1px solid #f5f5f5;
}
.travel-nav button:hover {
  background: #fafbfc;
  color: #555;
}
.travel-nav button.active {
  background: #f0f7ff;
  color: #1a6db5;
  font-weight: 500;
  border-left: 3px solid #1a6db5;
}
.travel-content {
  flex: 1;
  padding: 32px;
  overflow-y: auto;
  max-height: 75vh;
}

/* Spot & Food Grid */
.spot-grid, .food-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.spot-card, .food-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}
.spot-card:hover, .food-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}
.spot-card img, .food-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.spot-info, .food-info {
  padding: 16px 18px;
}
.spot-info h4, .food-info h4 {
  font-family: 'Noto Serif SC', serif;
  font-size: 16px;
  color: #2c2c2c;
  margin-bottom: 6px;
}
.spot-info p, .food-info p {
  font-size: 13px;
  color: #777;
  line-height: 1.6;
}

/* Guide */
.guide-content {
  max-width: 100%;
}
.guide-intro {
  text-indent: 2em;
  font-size: 15px;
  line-height: 1.9;
  color: #555;
  margin-bottom: 28px;
}
.guide-sections {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.guide-section h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 17px;
  color: #2c2c2c;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
}
.guide-section ul {
  list-style: none;
  padding: 0;
}
.guide-section ul li {
  padding: 5px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}
.guide-section ul li strong {
  color: #444;
}
.route-timeline {
  display: flex;
  gap: 16px;
}
.route-day {
  flex: 1;
  background: #f8f9fa;
  padding: 18px;
  border-radius: 12px;
}
.day-badge {
  display: inline-block;
  background: #1a6db5;
  color: #fff;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
}
.route-day p {
  font-size: 13px;
  color: #555;
  line-height: 1.5;
}
</style>
