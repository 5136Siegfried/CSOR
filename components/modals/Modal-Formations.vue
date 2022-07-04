<template>
  <div class="modal_wrapper"  @click.stop="closeModal">
    <div class="modal origines">
      <div class="closeModal" @click="$emit('close-modal')">
        <img src="~assets/img/IconsCrossDark.svg" alt="fermer la fenêtre">
      </div>
      <img class="img-header" src="~/assets/img/formation_original.jpg" alt="photo prise pendant une formation">
      <h2>Les formations internes</h2>
      <div class="content">
        <img
          src="~/assets/img/ill_formation.jpg"
          width="500"
          height="240"
          alt="images exemple formation"
        >

        <p>
          Chaque mois, les bénévoles adhérents de l’association peuvent participer à des ateliers de formations non
          diplômantes sur des sujets variés comme les gestes d'urgence, les différents types de pansements,
          l’addictologie, ... Certaines des formations proposées sont ouvertes aux autres associations travaillant
          auprès du même public.
        </p>
      </div>

      <button @click="$emit('close-modal')">
        Fermer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Formation',
  methods: {
    closeModal (e) {
      if (e.target === e.currentTarget) {
        this.$emit('close-modal')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-header {
  display: block;
  width: 100%;
  height: 370px;
  margin: auto;
  object-position: center;
  object-fit: cover;
}

.content {
  p {
    margin: 1em 0
  }

  strong {
    font-weight: 700;
  }

  img {
    float: right;
    margin-left: 2em;
  }
}
</style>
