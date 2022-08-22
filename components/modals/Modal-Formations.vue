<template>
  <div class="modal_wrapper" @click.stop="closeModal">
    <div class="modal origines">
      <div class="closeModal" @click="$emit('close-modal')">
        <img src="~assets/img/IconsCrossDark.svg" alt="fermer la fenêtre">
      </div>
      <img
        class="img-header"
        src="~/assets/img/formation_original.jpg"
        alt="photo prise pendant une formation"
      >
      <h2>Les formations internes</h2>
      <div class="content">
        <p>
          Au cours de l'année, des professionnel.le.s du soin et de la santé mettent à disposition leurs compétences pour transmettre aux bénévoles du CSOR des notions importantes et utiles pour nos maraudes.
        </p>
        <img
          src="~/assets/img/ill_formation.jpg"
          alt="images exemple formation"
        >
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  p {
    margin: 1em 0;
  }
  strong {
    font-weight: 700;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    margin-left: 2em;
  }

  @media screen and (max-width: 750px) {
    display: block;
  }
}
</style>
