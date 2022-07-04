<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <div class="closeModal" @click="$emit('close-modal')">
        <img src="~assets/img/IconsCrossDark.svg" alt="fermer la fenêtre">
      </div>
      <img alt="photo restau du coeur" class="img-header" src="~/assets/img/sanitaire_original.jpg">
      <h2>Les partenariats d'actions</h2>
      <div class="content">
        <img
          alt="images graines de solidarité"
          class="floatRight"
          height="298"
          src="~/assets/img/ill_sanitaire.jpg"
          width="332"
        >
        <p>
          Au delà du soin, nos bénévoles ont un rôle préventif et informatif. Nous avons à coeur d’établir et de
          maintenir un réseau partenarial avec plusieurs associations caritatives, des établissements de soins et des
          travailleurs sociaux afin de renforcer les possibilités d’une prise en charge de qualité et un suivi hors
          de la rue.
        </p>
        <p>
          Nous intervenons aussi sur d’autres secteurs pour des évaluations et des suivis de soins (comme à Bordeaux
          Lac) et le maintien du lien lors d’hospitalisation.
        </p>
        <div class="reseau">
          <h3>Notre réseau</h3>
          <div class="partenaires">
            <a href="https://www.bordeaux.fr/" target="_blank">
              <img
                alt="Mairie de Bordeaux"
                class="logo_reseau"
                src="~/assets/img/partenaires/Mairie-bordeaux.jpg"
                title="Mairie de Bordeaux"
              >
            </a>
            <a href="https://www.chu-bordeaux.fr/" target="_blank">
              <img
                alt="CHU de Bordeaux"
                class="logo_reseau"
                src="~/assets/img/partenaires/CHU.jpg"
                title="CHU de Bordeaux"
              >
            </a>
            <a href="https://ceid-addiction.com/" target="_blank">
              <img
                alt="CEID"
                class="logo_reseau"
                src="~/assets/img/partenaires/CEID.jpg"
                title="Comité d'étude et d'information sur la drogue et les addictions"
              >
            </a>
            <a href="https://www.lacase.eu/" target="_blank">
              <img
                alt="lacase"
                class="logo_reseau"
                src="~/assets/img/partenaires/la-case.jpg"
                title="Centre d'accueil et d'accompagnement à la réduction des risques des usagers de drogues"
              >
            </a>
            <a href="https://www.bordeaux.fr/o985/ccas" target="_blank">
              <img
                alt="CCAS de Bordeaux"
                class="logo_reseau"
                src="~/assets/img/partenaires/CCAS.jpg"
                title="Centre communal d'action sociale"
              >
            </a>
            <a href="https://diaconatbordeaux.fr/" target="_blank">
              <img
                alt="Diaconat de Bordeaux"
                class="logo_reseau"
                src="~/assets/img/partenaires/Diaconat-bordeaux.jpg"
                title="Entraide protestante"
              >
            </a>
            <a href="https://www.croix-rouge.fr/Annuaire/UNITE-LOCALE-DE-BORDEAUX10" target="_blank">
              <img
                alt="Croix-Rouge"
                class="logo_reseau"
                src="~/assets/img/partenaires/croix-rouge.jpg"
                title="Croix-Rouge"
              >
            </a>
            <a href="https://www.bordeaux.fr/o88605/bordeaux-metropole-mediation" target="_blank">
              <img
                alt="Bordeaux Métropole Médiation"
                class="logo_reseau"
                src="~/assets/img/partenaires/Bordeaux-metropole-mediation.jpg"
                title="Bordeaux Métropole Médiation"
              >
            </a>
            <a href="http://alprado.fr/pole-medico-social/samu-social" target="_blank">
              <img
                alt="Samu Social"
                class="logo_reseau"
                src="~/assets/img/partenaires/samu-social.jpg"
                title="Samu Social"
              >
            </a>
            <a href="https://www.caio-bordeaux.com/" target="_blank">
              <img
                alt="Centre d'accueil, d'information et d'orientation"
                class="logo_reseau"
                src="~/assets/img/partenaires/CIAO.jpg"
                title="Centre d'accueil, d'information et d'orientation"
              >
            </a>
            <a href="https://www.infotbm.com/fr" target="_blank">
              <img
                alt="Transport Bordeaux Métropole"
                class="logo_reseau"
                src="~/assets/img/partenaires/TBM.jpg"
                title="Transport Bordeaux Métropole"
              >
            </a>
            <a href="https://ad33.restosducoeur.org/" target="_blank">
              <img
                alt="Les restaurant du coeur"
                class="logo_reseau"
                src="~/assets/img/partenaires/Restos_du_coeur.jpg"
                title="Les restaurant du coeur"
              >
            </a>
            <a href="https://www.lamaraudeducoeurbordeaux.com/" target="_blank">
              <img
                alt="La Maraude du coeur"
                class="logo_reseau"
                src="~/assets/img/partenaires/Maraude-Coeur 1.jpg"
                title="La Maraude du coeur"
              >
            </a>
            <a href="https://www.lesgratuits.org/" target="_blank">
              <img
                alt="Les gratuits gironde solidarité"
                class="logo_reseau"
                src="~/assets/img/partenaires/Les-gratuits.jpg"
                title="Les gratuits gironde solidarité"
              >
            </a>
            <a href="https://www.bordeaux.fr/o87436/graines-de-solidarite" target="_blank">
              <img
                alt="Graines De Solidarité"
                class="logo_reseau"
                src="~/assets/img/partenaires/GDS.jpg"
                title="Graines De Solidarité"
              >
            </a>
            <a href="https://lesrobinsdelarue.org/" target="_blank">
              <img
                alt="Les Robins de la Rue"
                class="logo_reseau"
                src="~/assets/img/partenaires/Robins-de-la-rue.jpg"
                title="Les Robins de la Rue"
              >
            </a>
            <a href="https://lepaindelamitie.fr/" target="_blank">
              <img
                alt="Le Pain de L'Amitié"
                class="logo_reseau"
                src="~/assets/img/partenaires/Pain-amitie.jpg"
                title="Le Pain de L'Amitié"
              >
            </a>
            <a href="https://croquette-macadam.com/" target="_blank">
              <img
                alt="Croquette & Macadam"
                class="logo_reseau"
                src="~/assets/img/partenaires/Croquette-macadam.jpg"
                title="Croquette & Macadam"
              >
            </a>
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
