<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { NGrid, NGi, NNumberAnimation, NCarousel, NImage, NScrollbar, NCarouselItem, NIcon } from 'naive-ui'

import './assets/fonts/font.style.css'
import { IosArrowDown } from '@vicons/ionicons4'
import { scrollTo, hrefTarget } from './utils/index'
import { websiteConfig } from './utils/config'

const page = ref();

onMounted(() => {
  document.title = websiteConfig.title
})

</script>

<template>
  <div class="app" >
    <div class="headerContent">
      <n-grid :cols='3' x-gap="0" class="header content">
        <n-gi class="title">
          <img :src="websiteConfig.logo" alt="logo">
        </n-gi>
        <n-gi class="nav">
          <ul>
            <li v-for="(item, key) in websiteConfig.navigatorList" :key="key">
              <a @click="item.inside ? scrollTo(page, item.part) : hrefTarget(item.url)"> {{ item.name }}</a>
            </li>
          </ul>
        </n-gi>

      </n-grid>
    </div>
    <n-carousel direction="vertical" :show-dots="false" style="width: 100%; height: 100vh" :touchable="false" ref="page"
      :mousewheel="false" show-arrow :transition-props="{ name: 'creative' }" effect="custom" class="pageView">
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--right" @click="next">
            <NIcon>
              <IosArrowDown />
            </NIcon>
          </button>
        </div>
      </template>
      <n-scrollbar class="part" style="max-height: 100vh">
        <div class="banner part ">
          <n-grid x-gap="12" cols="1 s:2 m:2 l:2 xl:2" y-gap="50" responsive="screen" class="content">
            <n-gi class="info animate__animated animate__backInLeft">

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
                    <n-number-animation ref="numberAnimationInstRef" :from="0.0"
                      :to="websiteConfig.banner.missHeadNumber" :active="true" :precision="3" locale="ru-RU"
                      :duration="5000" />
                  </h3>
                </div>
              </div>

              <div class="button" @click="scrollTo(page, 1)">
                <a>{{ websiteConfig.banner.buttonName }}</a>
              </div>

            </n-gi>
            <n-gi class="pic animate__animated animate__backInRight">
              <n-carousel effect="card" prev-slide-style="transform: translateX(-150%) translateZ(-800px);" show-arrow
                autoplay next-slide-style="transform: translateX(10%) translateZ(-100px);" :show-dots="false">
                <n-carousel-item v-for="(item, key) in websiteConfig.swipes" :key="key">
                  <n-image class="carousel-img" :src="item" object-fit="cover" height="650" />
                </n-carousel-item>
              </n-carousel>
            </n-gi>
          </n-grid>
        </div>
      </n-scrollbar>

      <n-scrollbar class="part" style="max-height: 100vh">
        <div class="part">
          <div class="version">
            <div class="skeet animate__slideInUp animate__animated">

              GAME<span>SENSE</span>

            </div>

          </div>
          <n-grid x-gap="30" cols="1 s:1 m:1 l:3 xl:3" y-gap="50" responsive="screen" class="card">
            <n-gi class="card-item animate__zoomInDown animate__animated" v-for="(i, k) in websiteConfig.shopConfig.first" :key="k">
              <header>{{ i.name }}</header>
              <ul>
                <li v-for="(item, key) in i.list" :key="key"><span :class="[{ 'l': !item.state }]">{{
                  item.state ? '+' : '-'
                }}</span>{{ item.name }}</li>
              </ul>
              <div class="bottom" @click="hrefTarget(i.ButtonUrl)">{{ i.ButtonName }}</div>
            </n-gi>
          </n-grid>
        </div>
      </n-scrollbar>
      <n-scrollbar class="part" style="max-height: 100vh">
        <div class="part">
          <div class="version  animate__slideInUp animate__animated">
            <div class="nl">
              NEVER<span>LOSE</span>
            </div>
          </div>
          <n-grid x-gap="30" cols="1 s:1 m:1 l:3 xl:3" y-gap="50" responsive="screen" class="card">
            <n-gi class="card-item"></n-gi>
            <n-gi class="card-item animate__zoomInDown animate__animated" v-for="(i, k) in websiteConfig.shopConfig.second" :key="k">
              <header>{{ i.name }}</header>
              <ul>
                <li v-for="(item, key) in i.list" :key="key"><span :class="[{ 'l': !item.state }]">{{
                  item.state ? '+' : '-'
                }}</span>{{ item.name }}</li>
              </ul>
              <div class="bottom" @click="hrefTarget(i.ButtonUrl)">{{ i.ButtonName }}</div>
            </n-gi>
            <n-gi class="card-item"></n-gi>
          </n-grid>

        </div>
      </n-scrollbar>
    </n-carousel>
    <div class="footer">
      <div class="copyright">
        Kenzo © 2023
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);

  .animate__animated {
    opacity: 0;
  }
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'CentraNo';
  color: white;
}

.footer {

  width: 100%;
  text-align: center;
  text-shadow: 0 0 3px #191920;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .copyright {
    color: white;
    font-weight: 900;
  }
}


.custom-arrow {
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 20px;
  justify-content: center;

}

.custom-arrow--right {

  font-size: 39px;
  text-shadow: 0 0 3px #0095b9;

}

.custom-arrow button {
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
}

.version {
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  .skeet {
    font-size: 50px;

    span {
      color: #95b800;
    }
  }

  .nl {
    font-size: 50px;
    font-weight: 700;

    span {
      color: #0095b9;
    }
  }
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  padding: 0 30px;
  max-width: 1200px;
  box-sizing: border-box;
  margin: 0 auto;

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
    margin-bottom: 20px;
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
    cursor: pointer;
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

.part {
  padding-top: 150px !important;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 80px;
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

.headerContent {
  max-width: 1200px;
  margin: 0 auto !important;

}

.header {
  position: absolute;
  z-index: 999;
  top: 0;
  align-items: center;


  .title {
    font-size: 80px;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    img {
      padding-top: 10px;
      width: 70px;
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
          cursor: pointer;
          color: white;
          text-decoration: none;
          text-transform: uppercase;
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
