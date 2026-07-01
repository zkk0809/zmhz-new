<template>
  <AppHeader />
  <div class="culture-page">
    <div class="article-card">
      <div class="article-hero">
        <img src="/imgs/hz8.jfif" alt="杭州" />
      </div>
      <div class="article-body">
        <p>
          杭州，简称杭，古称临安、钱塘，是浙江省省会、<a href="#">副省级市</a>、<a href="#">杭州都市圈</a>核心城市、特大城市、<a href="#">长江三角洲</a>中心城市之一。杭州地处长江三角洲南翼、<a href="#">杭州湾</a>西端，是"<a href="#">丝绸之路经济带</a>"和"21世纪<a href="#">海上丝绸之路</a>"的延伸交点和"网上丝绸之路"战略枢纽城市。截至2022年末，杭州市全市土地面积16850平方千米，下辖10个区、1个县级市、2个县，实现<a href="#">地区生产总值</a>18753亿元，全市常住人口1237.6万人。
        </p>
        <p>
          杭州属于<a href="#">亚热带季风气候</a>，在地形位置上处在<a href="#">天目山</a>系余脉的低山丘陵与平原的交接地带、西南部为低山丘陵地形，境内最高峰<a href="#">天竺山</a>海拔 413m，其余南高峰、<a href="#">葛岭</a>顶峰等均在300~100m之间，环抱西湖延绵向北东呈复向斜。整个平原河渠纵横、水网密布，具有我国典型的<a href="#">江南水乡</a>地貌。杭州市属于钦杭成矿带区域，是我省重要的多金属<a href="#">成矿带</a>，<a href="#">石灰岩</a>资源储量丰富优势突出。
        </p>
        <p>
          截至2022年末全市拥有<a href="#">普通高等学校</a>40所，普通高中98所，<a href="#">职高</a>和<a href="#">中等专业学校</a>39所，初中305所，小学507所，<a href="#">幼儿园</a>1073所，拥有各类医疗卫生机构5818个，累计拥有国家级企业技术中心43家，国家技术创新示范企业14家，省级技术创新示范企业11家。
        </p>
        <p>
          杭州是中国八大古都之一，<a href="#">中国历史文化名城</a>。从<a href="#">新石器时代</a>的萧山跨湖桥文化开始。距今5000多年前的<a href="#">良渚文化</a>被称为"中华文明的曙光"。公元前222年（<a href="#">秦王政</a>二十五年）设<a href="#">钱唐县</a>，<a href="#">五代十国时期</a>，<a href="#">吴越国</a>于公元893年，建都杭州，历时86年。南宋<a href="#">建炎</a>三年（1129）宋室南迁至杭州，并改"杭州"为"临安府"，1927年"杭州市"正式设立；1949年，<a href="#">杭州市人民政府</a>成立。
        </p>
        <p>
          旅游景点有<a href="#">西湖风景区</a>、<a href="#">西溪国家湿地公园</a>、<a href="#">京杭大运河</a>杭州段(运河景区)、千岛湖、苏堤春晓和<a href="#">曲院风荷</a>等等。
        </p>
      </div>
    </div>

    <div class="video-card">
      <h2 class="section-title">杭州亚运会</h2>
      <video src="/video/1165721246-1-16.mp4" controls></video>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style scoped>
.culture-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 24px 60px;
}
.article-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 32px;
}
.article-hero {
  height: 280px;
  overflow: hidden;
}
.article-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article-body {
  padding: 36px 40px 40px;
}
.article-body p {
  text-indent: 2em;
  font-size: 15px;
  line-height: 1.9;
  color: #444;
  margin-bottom: 16px;
}
.article-body a {
  text-decoration: none;
  color: #1a6db5;
  border-bottom: 1px solid rgba(26, 109, 181, 0.25);
  transition: all 0.2s;
}
.article-body a:hover {
  color: #0d4a80;
  border-bottom-color: #0d4a80;
}
.video-card {
  background: #fff;
  border-radius: 16px;
  padding: 32px 32px 24px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
}
.section-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 20px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 20px;
  text-align: center;
}
.video-card video {
  width: 100%;
  border-radius: 10px;
  background: #000;
}
</style>
