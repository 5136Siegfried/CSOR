<template>
  <div class="site">
    <div class="site__wrapper">
      <!--    <Header />-->
      <h1>Nos <b>actions</b></h1>
      <div class="content">
        <div class="bloc bloc1">
          <h2>Les maraudes <span>de soin</span></h2>
          <div class="img_container">
            <img
              alt="photo de maraude"
              src="~/assets/img/maraudes_original.jpg"
              width="425"
              @click="showModal = 'maraudes'"
            >
            <div class="hover" @click="showModal = 'maraudes'">
              <p>En savoir plus</p>
            </div>
          </div>
        </div>
        <div class="bloc bloc2">
          <h2>Les partenaires <span>d'actions</span></h2>
          <div class="img_container">
            <img
              alt="photo restau du coeur"
              src="~/assets/img/sanitaire_original.jpg"
              width="425"
              @click="showModal = 'sanitaire'"
            >
            <div class="hover" @click="showModal = 'sanitaire'">
              <p>En savoir plus</p>
            </div>
          </div>
        </div>
        <div class="bloc bloc3">
          <h2>Les ateliers <span>de formation</span></h2>
          <div class="img_container">
            <img
              alt="photo de formation du csor"
              src="~/assets/img/formation.jpg"
              width="425"
              @click="showModal = 'formations'"
            >
            <div class="hover" @click="showModal = 'formations'">
              <p>En savoir plus</p>
            </div>
          </div>
        </div>
      </div>
      <ModalMaraudes v-if="showModal === 'maraudes'" @close-modal="showModal = null" />
      <ModalPartenaires v-if="showModal === 'sanitaire'" @close-modal="showModal = null" />
      <ModalFormations v-if="showModal === 'formations'" @close-modal="showModal = null" />
    </div>
  </div>
</template>

<script>
import ModalMaraudes from '~/components/modals/Modal-Maraudes'
import ModalPartenaires from '~/components/modals/Modal-Partenaires'
import ModalFormations from '~/components/modals/Modal-Formations'

export default {
  name: 'Actions',
  components: {
    ModalMaraudes,
    ModalPartenaires,
    ModalFormations
  },
  // layout: 'page',
  data () {
    return {
      showModal: null
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  //gap: 2rem;

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
}

.bloc {
  position: relative;
  margin: 2rem;

  h2 {
    position: absolute;
    z-index: 5;
    transition: all $transition_duration ease-in-out;

    span {
      display: inline;
      position: absolute;
    }
    @media screen and (max-width: 330px) {
      font-size: 1rem;
    }
  }
  .img_container {
    position: relative;
    width: 425px;
    height: 425px;
    border-radius: 100%;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hover {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: $blue;
      opacity: 0.9;
      transform-origin: right;
      transform: rotate(-180deg);
      transition: 0.5s;

      p {
        color: white;
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
      }
    }

    &:hover .hover {
      animation: appear 0.5s ease-in-out forwards;
    }
  }
  &:hover h2 {
    transform: scale(1.3);
  }
  @media screen and (max-width: 500px) {
    width: 80%;
    height: 80vmin;
    margin: 3rem 0;
    .img_container{
      width: 100%;
      height: 100%;
    }
  }
}

.bloc1 {
  h2 {
    top: -30px;
    left: 25%;
    transform: rotate(-3deg);
    @include framed_title($red);

    span {
      right: -50px;
      bottom: -30px;
      transform: rotate(-5deg);
      @include framed_title($blue);
      @media screen and (max-width: 330px) {
        right: -30px;
        bottom: -20px
      }
    }
  }
}
.bloc2 {
  h2 {
    top: -30px;
    left: 25%;
    transform: rotate(3deg);
    @include framed_title($blue);

    span {
      bottom: -40px;
      left: 10%;
      transform: rotate(-5deg);
      @include framed_title($red);
      @media screen and (max-width: 330px) {
        bottom: -20px;
      }
    }
  }
}
.bloc3 {
  h2 {
    top: -30px;
    left: 25%;
    transform: rotate(-8deg);
    @include framed_title($red);

    span {
      right: -50px;
      bottom: -40px;
      transform: rotate(5deg);
      @include framed_title($blue);
      @media screen and (max-width: 330px) {
        bottom: -25px;
      }
    }
  }
}

@keyframes appear {
  to {
    transform: rotate(0);
  }
}
</style>
