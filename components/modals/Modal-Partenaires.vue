<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <div class="closeModal" @click="$emit('close-modal')">
        <img src="~assets/img/IconsCrossDark.svg" alt="fermer la fenêtre">
      </div>
      <img alt="photo restau du coeur" class="img-header" src="~/assets/img/sanitaire_original.jpg">
      <h2>Les partenariats</h2>
      <div class="content">
        <img
          alt="images graines de solidarité"
          class="floatRight"
          height="298"
          src="~/assets/img/ill_sanitaire.jpg"
          width="332"
        >
        <p>
          Le CSOR s’allie aux autres associations bordelaises oeuvrant auprès des publics précaires comme:
          les Robins de la Rue, les Gratuits, les Restos du cœur (en période hivernale), la maraude du cœur.
          Ainsi, nous rencontrons des personnes en dehors des parcours de maraude et pouvons évaluer les besoins en santé présents.
        </p>
        <p class="important">
          Rajouter un paragraphe sur les liens que nous avons avec le milieu médico-social
        </p>
        <div class="reseau">
          <h3>Notre réseau</h3>
          <div class="partenaires">
            <img
              alt="Mairie de Bordeaux"
              class="logo_reseau"
              src="~/assets/img/partenaires/Mairie-bordeaux.jpg"
              title="Mairie de Bordeaux"
            >
            <img
              alt="CHU de Bordeaux"
              class="logo_reseau"
              src="~/assets/img/partenaires/CHU.jpg"
              title="CHU de Bordeaux"
            >
            <img
              alt="CEID"
              class="logo_reseau"
              src="~/assets/img/partenaires/CEID.jpg"
              title="Comité d'étude et d'information sur la drogue et les addictions"
            >
            <img
              alt="lacase"
              class="logo_reseau"
              src="~/assets/img/partenaires/la-case.jpg"
              title="Centre d'accueil et d'accompagnement à la réduction des risques des usagers de drogues"
            >
            <img
              alt="CCAS de Bordeaux"
              class="logo_reseau"
              src="~/assets/img/partenaires/CCAS.jpg"
              title="Centre communal d'action sociale"
            >
            <img
              alt="Diaconat de Bordeaux"
              class="logo_reseau"
              src="~/assets/img/partenaires/Diaconat-bordeaux.jpg"
              title="Entraide protestante"
            >
            <img
              alt="Croix-Rouge"
              class="logo_reseau"
              src="~/assets/img/partenaires/croix-rouge.jpg"
              title="Croix-Rouge"
            >
            <img
              alt="Bordeaux Métropole Médiation"
              class="logo_reseau"
              src="~/assets/img/partenaires/Bordeaux-metropole-mediation.jpg"
              title="Bordeaux Métropole Médiation"
            >
            <img
              alt="Samu Social"
              class="logo_reseau"
              src="~/assets/img/partenaires/samu-social.jpg"
              title="Samu Social"
            >
            <img
              alt="Centre d'accueil, d'information et d'orientation"
              class="logo_reseau"
              src="~/assets/img/partenaires/CIAO.jpg"
              title="Centre d'accueil, d'information et d'orientation"
            >
            <img
              alt="Transport Bordeaux Métropole"
              class="logo_reseau"
              src="~/assets/img/partenaires/TBM.jpg"
              title="Transport Bordeaux Métropole"
            >
            <img
              alt="Les restaurant du coeur"
              class="logo_reseau"
              src="~/assets/img/partenaires/Restos_du_coeur.jpg"
              title="Les restaurant du coeur"
            >
            <img
              alt="La Maraude du coeur"
              class="logo_reseau"
              src="~/assets/img/partenaires/Maraude-Coeur 1.jpg"
              title="La Maraude du coeur"
            >
            <img
              alt="Les gratuits gironde solidarité"
              class="logo_reseau"
              src="~/assets/img/partenaires/Les-gratuits.jpg"
              title="Les gratuits gironde solidarité"
            >
            <img
              alt="Graines De Solidarité"
              class="logo_reseau"
              src="~/assets/img/partenaires/GDS.jpg"
              title="Graines De Solidarité"
            >
            <img
              alt="Les Robins de la Rue"
              class="logo_reseau"
              src="~/assets/img/partenaires/Robins-de-la-rue.jpg"
              title="Les Robins de la Rue"
            >
            <img
              alt="Le Pain de L'Amitié"
              class="logo_reseau"
              src="~/assets/img/partenaires/Pain-amitie.jpg"
              title="Le Pain de L'Amitié"
            >
            <img
              alt="Croquette & Macadam"
              class="logo_reseau"
              src="~/assets/img/partenaires/Croquette-macadam.jpg"
              title="Croquette & Macadam"
            >
          </div>
        </div>
      </div>
      <button @click="$emit('close-modal')">
        Fermer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Partenaire'
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
  h3 {
    color: $blue;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

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

  .reseau {
    clear: both;

    .partenaires {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem
    }
  }
}

</style>
