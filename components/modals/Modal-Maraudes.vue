<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <div class="closeModal" @click="$emit('close-modal')">
        <img src="~assets/img/IconsCrossDark.svg" alt="fermer la fenêtre">
      </div>
      <img class="img-header" src="~/assets/img/maraudes_original.jpg" alt="photo des croix bleues">
      <h2>Les maraudes de soin</h2>
      <div class="content">
        <img
          class="floatRight"
          src="~/assets/img/ill_maraudes.jpg"
          width="351"
          height="327"
          alt="images croix bleues"
        >
        <p>Tout au long de l’année, nous réalisons des maraudes sanitaires plusieurs fois par semaine en soirée.</p>
        <p>
          Au cours de ces maraudes, nous réalisons des soins de premiers secours ( ou 1 er necessité) auprès des
          personnes en situation de précarité. Nous réalisons des pansements plus ou moins complexes selon le niveau
          de compétences des équipiers et l’expertise des professionnels sur le terrain sur des plaies diverses
          (brûlures, morsures, coupures,...).
        </p>
        <p>
          L’objectif principal est de créer un climat de confiance avec les personnes rencontrées et de leur permettre
          de retrouver un parcours de soin classique. Cela passe par l’orientation vers des structures étatiques comme
          la PASS (Permanence d’Accès aux Soins de Santé), le CEID, la CASE, le CCAS,...
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
  name: 'Maraudes'
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
    &.floatRight {
      float: right;
      margin-left: 2em;
    }

    &.floatLeft {
      float: left;
      margin-right: 2em;
    }
  }
}

</style>
