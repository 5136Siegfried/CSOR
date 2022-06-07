<template>
  <div class="site">
    <div class="home">
      <section class="left">
        <div class="content">
          <p class="citation">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <p class="citation_source">
            Ginette, bénévole du CSOR
          </p>
        </div>
      </section>
      <section class="right">
        <contact-form v-if="display === 'mail'" />
        <phone v-if="display === 'phone'" />
        <ul class="icons">
          <li><img src="~/assets/img/icons/mail.svg" alt="Email" @click="display = 'mail'"></li>
          <li><img src="~/assets/img/icons/phone.svg" alt="Téléphone" @click="display = 'phone'"></li>
          <li><img src="~/assets/img/icons/fb.svg" alt="Facebook"></li>
          <li><img src="~/assets/img/icons/instagram.svg" alt="Instagrame"></li>
          <li><img src="~/assets/img/icons/youtube.svg" alt="Youtube"></li>
          <li><img src="~/assets/img/icons/google.svg" alt="Google"></li>
        </ul>
      </section>
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
      display: null
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: 1fr;
  /*justify-content: center;*/
  align-items: center;
  color: white;
  height: calc(100vh - 80px);
  background: center/cover url("~/assets/img/home_bg.jpg") no-repeat;
}

section {
  padding: 2rem;
  height: 100%;
}

section.left {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

section.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

section .content {
  width: 50%;
  margin: auto;
}

.citation {
  font-size: 3rem;
  margin-bottom: 1rem;

  &:before, &:after {
    content: "\""
  }

  &_source {
    font-size: 1rem;
  }
}

.icons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  //gap: 50px;
  color: white;
  cursor: pointer;
  li{
    margin: 0 25px
  }
}
</style>
