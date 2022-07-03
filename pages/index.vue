<template>
  <div class="site">
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
      <img class="logo" src="~/assets/img/logo.jpg" alt="Logo du CSOR">
      <div class="content">
        <DefaultHome v-if="display === 'default'" class="default" />
        <Contact-form v-if="display === 'mail'" class="form" />
        <Phone v-if="display === 'phone'" class="form" />
        <ul class="icons">
          <li @click="displayBlock('mail')">
            <img src="~/assets/img/icons/mail.svg" alt="Email">
          </li>
          <li @click="displayBlock('phone')">
            <img src="~/assets/img/icons/phone.svg" alt="Téléphone">
          </li>
          <li>
            <a href="https://www.facebook.com/CollectifSecoursOrientationdeRue/" target="_blank">
              <img src="~/assets/img/icons/fb.svg" alt="Facebook">
            </a>
          </li>
        </ul>
      </div>
      <img class="award" src="~/assets/img/prix_jeunes_asso.png" alt="logo prix des jeunes asso">
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
    displayBlock (target) {
      if (this.display !== target) {
        this.display = target
      } else {
        this.display = 'default'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.logo{
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 130px;
    object-fit: contain;
  }
  @media screen and (max-width: 355px) {
    width: 100px;
  }
  @media screen and (max-width: 267px) {
    width: 70px;
  }
  @media screen and (max-width: 246px) {
    width: 50px;
  }
}
.site{
  height: calc(100vh - 80px); // header (80px)
  @media screen and (max-width: 1024px) {
    min-height: 100vh;
  }
  &__wrapper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
  }
}
.content{
  width: 50%;
  height: 100%;
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 2rem;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0
  }
  @media screen and (max-width: 400px) {
    align-items: center;
  }
}
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  color: white;
  cursor: pointer;
  margin-right: 50px;

  li {
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items : center;
    padding: 0.7em;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: rgba(0,0,0,0.4);
    > a{
      height: 100%;
    }
    > img{
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 1024px) {
      margin: 0 15px;
    }
    @media screen and (max-width: 580px) {
      width: 40px;
      height: 40px;
      padding: 8px;
    }
    @media screen and (max-width: 360px) {
      margin: 20px
    }
  }
  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 400px) {
    margin: 0;
  }
}
.form{
  width: 60%;
  @media screen and (max-width: 630px) {
    width: 75%;
  }
  @media screen and (max-width: 470px) {
    width: 90%;
  }
}
.award{
  position: absolute;
  bottom: 0;
  left: 0;
  @media screen and (max-width: 1024px) {
    width: 150px;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
}
</style>
