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
      <img src="~/assets/img/slider_home/8-min.jpg" alt="Photo du CSOR">
    </VueSlickCarousel>
    <div class="site__wrapper">
      <div class="content">
        <contact-form v-if="display === 'mail'" class="form" />
        <phone v-if="display === 'phone'" class="form" />
        <ul class="icons">
          <li @click="display = 'mail'">
            <img src="~/assets/img/icons/mail.svg" alt="Email">
          </li>
          <li @click="display = 'phone'">
            <img src="~/assets/img/icons/phone.svg" alt="Téléphone">
          </li>
          <li><img src="~/assets/img/icons/fb.svg" alt="Facebook"></li>
          <li><img src="~/assets/img/icons/instagram.svg" alt="Instagram"></li>
          <li><img src="~/assets/img/icons/youtube.svg" alt="Youtube"></li>
          <li><img src="~/assets/img/icons/google.svg" alt="Google"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import '~/assets/slick-carousel-1.9.0.min.css'
import phone from '~/components/Phone'

export default {
  name: 'Index',
  components: {
    phone,
    VueSlickCarousel
  },
  data () {
    return {
      display: null,
      slickOptions: {
        autoplay: true,
        arrows: false,
        fade: true,
        autoplaySpeed: 10000
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.site{
  height: calc(100vh - 120px); // 120px = header (80px)+ footer(40px)
  @media screen and (max-width: 1024px) {
    min-height: 100vh;
  }
  &__wrapper{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.slider{
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.content{
  width: 50%;
  height: 100%;
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0
  }
}
.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  color: white;
  cursor: pointer;

  li {
    margin: 0 15px;
    display: flex;
    justify-content: center;
    align-items : center;
    padding: 0.5em;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: rgba(0,0,0,0.4);
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
</style>
