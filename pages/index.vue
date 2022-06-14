<template>
  <div class="site">
    <div class="site__wrapper">
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
          <li><img src="~/assets/img/icons/instagram.svg" alt="Instagram"></li>
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
.site {
  background: center/cover url("~/assets/img/home_bg.jpg") no-repeat;
}

.site__wrapper {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: 1fr;
  /*justify-content: center;*/
  align-items: center;
  color: white;
  height: calc(100vh - 80px);
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
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
  @media screen and (max-width: 1024px) {
    height: 80%;
    > .content {
      display: none;
    }
  }
}

section.right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: 20%;
  }
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
  margin: 20px 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //gap: 50px;
  color: white;
  cursor: pointer;

  li {
    margin: 0 25px;
    @media screen and (max-width: 1024px) {
      margin: 0 15px
    }
  }
}
</style>
