<script setup lang="ts">
import { onMounted } from 'vue';
import { NGrid, NGi, NNumberAnimation, NCarousel, NImage } from 'naive-ui'
import image from './assets/main.png'
import logo from './assets/k_logo_glow.png'
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
    missHeadNumber: 100,
    buttonName: 'Purchase',
    buttonUrl: 'https://github.com'
  },
  swipes: [
    {
      imgUrl: image,
    },
    {
      imgUrl: image,
    },
    {
      imgUrl: image,
    }
  ]
}
onMounted(() => {
  document.title = websiteConfig.title
})
</script>

<template>
  <div class="app">
    <n-grid x-gap="12" :cols="2" class="header content">
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
    <n-grid x-gap="12" cols="1 s:1 m:1 l:2 xl:2" responsive="screen" class="banner content">
      <n-gi class="info">
        <h1>{{ websiteConfig.banner.title }}</h1>
        <p>{{ websiteConfig.banner.desc }}</p>
        <div class="number">
          <div class="item">
            <h5>Customers</h5>
            <h3>
              <n-number-animation ref="numberAnimationInstRef" :from="0.0" :to="websiteConfig.banner.customersNumber"
                :active="true" locale="ru-RU" :duration="3000" />+
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
        <div class="button">
          <a :href="websiteConfig.banner.buttonUrl">{{ websiteConfig.banner.buttonName }}</a>
        </div>
      </n-gi>
      <n-gi class="pic">
        <n-carousel :show-dots="false">
          <n-image class="carousel-img" :src="item.imgUrl" v-for="(item, key) in websiteConfig.swipes" :key="key"
            object-fit="fill"  width="636" height="636" />
        </n-carousel>
      </n-gi>
    </n-grid>
  </div>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: 'CentraNo';
}

.content {
  max-width: 1200px;
  margin: 0 auto;
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
    box-shadow: 0 0 10px #232334;
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
      box-shadow: 0 0 20px #232334;
    }
  }
}

.header {
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  .title {
    font-size: 80px;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    img {
      width: 100px;

    }
  }

  .nav {
    ul {
      display: flex;
      justify-content: flex-start;

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
