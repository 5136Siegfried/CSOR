<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <img class="img-header" src="~/assets/img/sanitaire_original.jpg" alt="photo restau du coeur">
      <h2>Les partenariats</h2>
      <div class="content">
        <img
          class="floatRight"
          src="http://via.placeholder.com/332x298"
          width="332"
          height="298"
          alt="images graines de solidarité"
        >
        <p>
          Le CSOR s’allie aux autres associations bordelaises oeuvrant auprès des publics précaires comme les Robins de
          la Rue, le Gratuits, les Restos du coeur (en période hivernale), la maraude du coeur afin de rencontrer des
          personnes en dehors des parcours de maraude et évaluer les besoins en santé présents.
        </p>
        <p class="important">
          Rajouter un paragraphe sur les liens que nous avons avec le milieu médico-social
        </p>
        <div class="reseau">
          <h3>Notre réseau</h3>
          <div class="partenaires">
            <img
              src="~/assets/img/partenaires/Mairie-bordeaux.jpg"
              alt="Mairie de Bordeaux"
              title="Mairie de Bordeaux" >
            <img
              src="~/assets/img/partenaires/CHU.jpg"
              alt="CHU de Bordeaux"
              title="CHU de Bordeaux" >
            <img
              src="~/assets/img/partenaires/CEID.jpg"
              alt="CEID"
              title="Comité d'étude et d'information sur la drogue et les addictions"
            >
            <img
              src="~/assets/img/partenaires/la-case.jpg"
              alt="lacase"
              title="Centre d'accueil et d'accompagnement à la réduction des risques des usagers de drogues"
            >
            <img
              src="~/assets/img/partenaires/CCAS.jpg"
              alt="CCAS de Bordeaux"
              title="Centre communal d'action sociale"
            >
            <img
              src="~/assets/img/partenaires/Diaconat-bordeaux.jpg"
              alt="Diaconat de Bordeaux"
              title="Entraide protestante"
            >
            <img
              src="~/assets/img/partenaires/croix-rouge.jpg"
              alt="Croix-Rouge"
              title="Croix-Rouge"
            >
            <img
              src="~/assets/img/partenaires/Bordeaux-metropole-mediation.jpg"
              alt="Bordeaux Métropole Médiation"
              title="Bordeaux Métropole Médiation"
            >
            <img
              src="~/assets/img/partenaires/samu-social.jpg"
              alt="Samu Social"
              title="Samu Social"
            >
            <img
              src="~/assets/img/partenaires/CIAO.jpg"
              alt="Centre d'accueil, d'information et d'orientation"
              title="Centre d'accueil, d'information et d'orientation"
            >
            <img
              src="~/assets/img/partenaires/TBM.jpg"
              alt="Transport Bordeaux Métropole"
              title="Transport Bordeaux Métropole"
            >
            <img
              src="~/assets/img/partenaires/Restos_du_coeur.jpg"
              alt="Les restaurant du coeur"
              title="Les restaurant du coeur"
            >
            <img
              src="~/assets/img/partenaires/Maraude-Coeur 1.jpg"
              alt="La Maraude du coeur"
              title="La Maraude du coeur"
            >
            <img
              src="~/assets/img/partenaires/Les-gratuits.jpg"
              alt="Les gratuits gironde solidarité"
              title="Les gratuits gironde solidarité"
            >
            <img
              src="~/assets/img/partenaires/GDS.jpg"
              alt="Graines De Solidarité"
              title="Graines De Solidarité"
            >
            <img
              src="~/assets/img/partenaires/Robins-de-la-rue.jpg"
              alt="Les Robins de la Rue"
              title="Les Robins de la Rue"
            >
            <img
              src="~/assets/img/partenaires/Pain-amitie.jpg"
              alt="Le Pain de L'Amitié"
              title="Le Pain de L'Amitié"
            >
            <img
              src="~/assets/img/partenaires/Croquette-macadam.jpg"
              alt="Croquette & Macadam"
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
  h3{
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
  .reseau{
    clear: both;
    .partenaires{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5rem
    }
  }
}

</style>
