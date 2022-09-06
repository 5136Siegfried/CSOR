<template>
  <div class="site">
      <img class="logo" src="~/assets/img/logo.svg" alt="Logo du CSOR">
    <VueSlickCarousel class="slider" v-bind="slickOptions">
      <img src="~/assets/img/slider_home/1-min.jpg" alt="Photo du CSOR">
      <img src="~/assets/img/slider_home/2-min.jpg" alt="Photo du CSOR">
      <img src="~/assets/img/slider_home/3-min.jpg" alt="Photo du CSOR">
      <img src="~/assets/img/slider_home/4-min.jpg" alt="Photo du CSOR">
      <img src="~/assets/img/slider_home/5-min.jpg" alt="Photo du CSOR">
      <img src="~/assets/img/slider_home/6-min.jpg" alt="Photo du CSOR">
      <img src="~/assets/img/slider_home/7-min.jpg" alt="Photo du CSOR">
    </VueSlickCarousel>
    <div class="site__wrapper">
      <div class="content">
        <DefaultHome v-if="display === 'default'" class="default"/>
        <Contact-form v-if="display === 'mail'" class="form"/>
        <Phone v-if="display === 'phone'" class="form" />
        <ul class="icons">
          <li @click="display = 'default'" :class="{'active' : display === 'default'}">
            <img src="~/assets/img/icons/home.svg" alt="Home">
          </li>
          <li @click="display = 'mail'"  :class="{'active' : display === 'mail'}">
            <img src="~/assets/img/icons/mail.svg" alt="Email">
          </li>
          <li @click="display = 'phone'" :class="{'active' : display === 'phone'}">
            <img src="~/assets/img/icons/phone.svg" alt="Téléphone">
          </li>
          <li>
            <a href="https://www.facebook.com/CollectifSecoursOrientationdeRue/" target="_blank">
              <img src="~/assets/img/icons/fb.svg" alt="Facebook">
            </a>
          </li>
        </ul>
      </div>
      <a href="https://www.facebook.com/CollectifSecoursOrientationdeRue/posts/346357860405718" target="_blank">
        <img class="award" src="~/assets/img/prix_jeunes_asso.png" alt="logo prix des jeunes asso">
      </a>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import '~/assets/slick-carousel-1.9.0.min.css'
import Phone from '~/components/Phone'
import DefaultHome from '~/components/modals/DefaultHome'

export default {
  name: 'Index',
  components: {
    DefaultHome,
    Phone,
    VueSlickCarousel
  },
  data () {
    return {
      display: 'default',
      slickOptions: {
        autoplay: true,
        arrows: false,
        fade: false,
        lazyLoad: 'progressive',
        autoplaySpeed: 5000
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.logo{
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    width: 130px;
    position: absolute;
    top: 20px;
    left: 50%;
  transform: translateX(-50%);
    z-index: 15;
  }
}
.slider{
  @media screen and (max-width: 1024px) {
    height: 225px;
  }
}
.site{
  height: calc(100vh - 80px); // header (80px)
  &__wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;

    @media screen and (max-width: 1024px) {
      position: relative;
      height: unset;
    }
  }
  @media screen and (max-width: 1024px) {
    height: unset;
    min-height: 100vh;
  }
}
.content{
  position: relative;
  width: 50%;
  height: 100%;
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
    display: grid;
    margin: auto;
    text-align: center;
    color: $blue;
    grid-template-areas:
  "icons"
  "home";
  }
  @media screen and (max-width: 530px) {
    width: 90%;
  }
}
.icons {
  grid-area: icons;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  user-select: none;
  //margin-right: 50px;

  > li {
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items : center;
    padding: 0.7em;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: rgba(0,0,0, 0.4);
    user-select: none;
    > a{
      user-select: none;
      height: 100%;
    > img{
      user-select: none;
      width: 100%;
      height: 100%;
    }
    }
    > img{
      width: 100%;
      height: 100%;
    }

    &.active{
      background: $blue;
    }

    @media screen and (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    padding-bottom: 30px;

    > li {
      background: rgba(0, 47, 135, 0.4);
    }
  }
}
.award{
  position: absolute;
  bottom: 30px;
  left: 0;
  @media screen and (max-width: 1024px) {
    width: 150px;
    top: -130px
  }
  @media screen and (max-width: 415px) {
    display: none;
  }
}
</style>
