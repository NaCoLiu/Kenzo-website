<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { NGrid, NGi, NNumberAnimation, NCarousel, NImage, NBackTop, NCarouselItem } from 'naive-ui'




import f from './assets/images/1.png'
import s from './assets/images/2.png'
import t from './assets/images/3.png'
import d from './assets/images/4.png'
import b from './assets/images/5.png'
import logo from './assets/k_logo_glow.png'
import image from './assets/images/card.svg'
import './assets/fonts/font.style.css'

const websiteConfig = {
  title: 'Kenzo',
  logo: logo,
  navigatorList: [
    {
      'name': 'store',
      'url': 'https://google.com'
    },
    {
      'name': 'discord',
      'url': 'https://discord.com'
    }
  ],
  banner: {
    title: "Anti-Aim made the right way.",
    desc: 'At Kenzo, we aim to create the best possible experience. Our LUAs will help you in every aspect, to guarantee the best gameplay possible.',
    customersNumber: 1000,
    missHeadNumber: 10,
    buttonName: 'Purchase',
    buttonUrl: 'https://github.com'
  },
  swipes: [
    f,
    s,
    t,
    d,
    b
  ]
}
const scrollTo = (options?: ScrollToOptions) => {
  window.scroll(options)
}
onMounted(() => {
  document.title = websiteConfig.title
})
</script>

<template>
  <div class="app" ref="windowsRef">
    <n-grid :cols='1' class="header content">
      <n-gi class="title">
        <img :src="websiteConfig.logo" alt="logo">
      </n-gi>
      <n-gi class="nav">
        <ul>
          <li v-for="(item, key) in websiteConfig.navigatorList" :key="key">
            <a :href=item.url target="_blank"> {{ item.name }}</a>
          </li>
        </ul>
      </n-gi>
    </n-grid>
    <n-grid x-gap="12" cols="1 s:2 m:2 l:2 xl:2" y-gap="50" responsive="screen" class="banner content">
      <n-gi class="info">
        <h1>{{ websiteConfig.banner.title }}</h1>
        <p>{{ websiteConfig.banner.desc }}</p>
        <div class="number">
          <div class="item">
            <h5>Customers</h5>
            <h3>
              {{ websiteConfig.banner.customersNumber }}+
            </h3>
          </div>
          <div class="sized"></div>
          <div class="item">
            <h5>Missed Heads</h5>
            <h3>
              <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="websiteConfig.banner.missHeadNumber"
                :active="true" :precision="3" locale="ru-RU" :duration="5000" />
            </h3>
          </div>
        </div>

        <div class="button" @click="scrollTo({ top: 8888, behavior: 'smooth' })">
          <a>{{ websiteConfig.banner.buttonName }}</a>
        </div>

      </n-gi>
      <n-gi class="pic">
        <n-carousel effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);" show-arrow
          autoplay next-slide-style="transform: translateX(10%) translateZ(-100px);" :show-dots="false">
          <n-carousel-item v-for="(item, key) in websiteConfig.swipes" :key="key">
            <n-image class="carousel-img" :src="item" object-fit="cover" height="650" />
          </n-carousel-item>
        </n-carousel>
      </n-gi>
    </n-grid>

    <n-grid x-gap="30" cols="1 s:3 m:3 l:4 xl:4" y-gap="50" responsive="screen" class="card">
      <n-gi class="card-item">
        <header>Live</header>
        <ul>
          <li><span>+</span>Anti-Aim Builder</li>
          <li><span>+</span>Cloud Config Sytem</li>
          <li><span>+</span>Slow Updates</li>
          <li><span class="l">-</span>Anti-Aim Exploits</li>
          <li><span class="l">-</span>Unreleased Features</li>
          <li><span class="l">-</span>Roll Resolver</li>
        </ul>
        <div class="bottom">Click to Purchase</div>
      </n-gi>
      <n-gi class="card-item">
        <header>Beta</header>
        <ul>
          <li><span>+</span> Anti-Aim builder</li>
          <li><span>+</span> Anti-Aim Exploits</li>
          <li><span>+</span> Cloud Config System</li>
          <li><span>+</span> Fast Updates</li>
          <li><span class="l">-</span> Unreleased Features</li>
          <li><span class="l">-</span> Roll Resolver</li>
        </ul>
        <div class="bottom">Click to Purchase</div>
      </n-gi>
      <n-gi class="card-item">
        <header>Alpha</header>
        <ul>
          <li><span>+</span> Anti-Aim & Brute Builder</li>
          <li><span>+</span> Cloud Config System</li>
          <li><span>+</span> Instant Updates</li>
          <li><span>+</span> Unreleased Features</li>
          <li><span>+</span> Roll Resolver</li>
        </ul>
        <div class="bottom">Click to Purchase</div>
      </n-gi>
      <n-gi class="card-item">
        <header>NeverLose</header>
        <ul>
          <li><span>+</span> Anti-Aim</li>
          <li><span>+</span> Brute Builder</li>
          <li><span>+</span> Cloud Config System</li>
          <li><span>+</span> Instant Updates</li>
          
        </ul>
        <div class="bottom">Click to Purchase</div>
      </n-gi>

    </n-grid>
    <div class="footer">
      Kenzo © 2023
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'CentraNo';
  color: white;
}

.footer {
  max-width: 1200px;
  margin: 20px auto;
  text-align: center;
  text-shadow: 0 0 3px #191920;

}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  padding: 0 30px;
  max-width: 1200px;
  box-sizing: border-box;
  margin: 150px auto 152px;

  header {
    // background: url('./assets/images/card.svg');
    backdrop-filter: blur(20px);
    background-color: #1d1f2f;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    // border-bottom: 2px solid #37373e;
    border-radius: 10px;
    color: #fff !important;
    margin-bottom: 50px;
    display: block;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: .8px;
    // box-shadow: 0 0 12px 3px #585883d2;
    line-height: 1;

    padding: 20px 0;
    text-align: center;
  }

  .bottom {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 30px;
    color: #fff;
    display: block;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: .8px;
    background-color: #585883d2;
    line-height: 1;
    padding: 20px;
    // box-shadow: 0 0 12px 3px #1b1b42d2;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    transition: .3s ease-in-out;
  }

  ul {
    // box-shadow: 0 0 12px 3px #585883d2;
    border-radius: 10px;
    overflow: hidden;
  }

  ul>li {
    align-items: center;
    background-color: #191920;
    display: flex;
    margin: 0;
    padding: 15px 20px;
    color: #fff !important;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: .8px;
    line-height: 1.5em;
    font-family: 'CentraNo';

    span {
      color: #8da8ff !important;
      padding: 0 10px;
      text-shadow: 0 0 20px #8da8ff;
      font-size: 25px;
      font-weight: 700;
      margin: 0;
    }

    .l {
      color: grey !important;
      padding: 0 13px;
      text-shadow: 0 0 20px #fff;
    }

    &:nth-child(odd) {
      background-color: #1e1e25;
    }
  }

}

.pic {
  .n-carousel {
    height: 680px !important;
  }
}

.banner {
  padding: 10px 35px;
  box-sizing: border-box;

  .number {
    display: flex;

    .item {
      color: white;
      font-family: 'CentraNo';

      h5 {
        font-weight: 300;
        font-size: 18px;
      }

      h3 {
        font-size: 45px;
      }
    }

    .sized {
      padding: 0 20px;
    }
  }

  .info {
    h1 {
      color: white;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 70px;
    }

    p {
      color: white;
      padding: 20px 0;
      font-size: 18px;
      font-family: 'CentraNo';
      font-weight: 500;
    }
  }

  .button {
    display: inline-block;
    background-color: #232334;
    border-radius: 10px;
    // box-shadow: 0 0 10px #232334;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: .8px;
    margin-top: 50px;
    padding: 15px 30px;
    text-decoration: none;
    text-shadow: 0 0 20px #8da8ff;
    transition: .3s ease-in-out;
    cursor: pointer;

    a {
      color: white;
      text-decoration: none;
      font-weight: 900;
    }

    &:hover {
      box-shadow: 0 0 20px #11112e6e;
    }
  }
}

.header {
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-bottom: 30px;

  .title {
    position: absolute;
    font-size: 80px;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top: 40px;
    margin-left: 25px;

    img {
      width: 80px;
    }
  }

  .nav {

    ul {
      display: flex;
      justify-content: center;

      li {
        list-style: none;
        padding: 0 20px;

        a {
          color: white;
          text-decoration: none;
          text-transform: uppercase;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          font-size: 25px;
          transition: all .5s;

          &:hover {
            text-shadow: 0 0 20px #8da8ff;
            transition: all .5s;
          }
        }
      }
    }
  }
}
</style>
