<template>
  <div class="site">
    <div class="slider" />
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
import phone from '~/components/Phone'

export default {
  name: 'Index',
  components: {
    phone
  },
  data () {
    return {
      display: null,
      intID: null,
      i: 0,
      images: [],
      bg: 1,
      slideTime: 5000
    }
  },
  mounted () {
    this.images[0] = this.getUrl('1-min')
    this.images[1] = this.getUrl('2-min')
    this.images[2] = this.getUrl('3-min')
    this.images[3] = this.getUrl('4-min')
    this.images[4] = this.getUrl('5-min')
    this.images[5] = this.getUrl('6-min')
    this.images[6] = this.getUrl('7-min')
    this.images[7] = this.getUrl('8-min')
    this.changeBackground()
  },
  // mounted () {
  //   const p = document.querySelector('.site')
  //   setInterval(() => {
  //     this.bg++
  //     console.log('bg : ' + this.bg)
  //     if (this.bg > 8) {
  //       this.bg = 1
  //     }
  //   }, 5000)
  //   this.intID = setInterval(() => {
  //     console.log('changement')
  //     p.style.background = `center/cover url('${this.getUrl(this.bg)}') no-repeat`
  //   }, 5000)
  // },
  // unmounted () {
  //   clearInterval(this.intID)
  // },
  methods: {
    getUrl (name) {
      return require(`~/assets/img/slider_home/${name}.jpg`)
    },
    changeBackground () {
      const p = document.querySelector('.slider')
      p.style.opacity = 0.2
      setTimeout(() => {
        // console.log('change')
        p.style.opacity = 1
        p.style.background = `#333 center/cover url('${this.images[this.i]}') no-repeat`
      }, 600)
      if (this.i < this.images.length - 1) {
        this.i++
      } else {
        this.i = 0
      }
      setTimeout(this.changeBackground, this.slideTime)
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
  height: 100%
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
    padding: 1em;
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
