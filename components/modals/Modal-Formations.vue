<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <img class="img-header" src="~/assets/img/formation_original.jpg" alt="photo prise pendant une formation">
      <h2>Les formations internes</h2>
      <div class="content">
        <img
          src="http://via.placeholder.com/500x240"
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
  name: 'Formation'
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
