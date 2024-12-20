r<template>
  <div class="modal_wrapper" @click.stop="closeModal">
    <div class="modal benevoles">
      <div class="closeModal" @click="$emit('close-modal')">
        <img src="~assets/img/IconsCrossDark.svg" alt="fermer la fenêtre">
      </div>
      <div class="prez">
        <div class="content">
          <h2>Nos Bénévoles</h2>
          <p>
            Après ses débuts tumultueux et riches en émotions, le CSOR est, au fil du temps, devenu le groupe tel qu’il est aujourd’hui.
            Nous sommes un groupe de maraudeurs issus de tous milieux, du médical à la puériculture en passant par le bâtiment et l’artisanat.
            Il n’y en a pas deux semblables et nous apportons tous notre pierre personnelle à l’édifice !
          </p>
        </div>
        <div class="image">
          <img src="~/assets/img/benevoles.jpg" alt="bénévoles">
        </div>
      </div>
      <div class="listeMembres">
        <FicheMembre
          name="Siegfried"
          age="34"
          description="Equipier de la Protection civile. Il tir à l'arc nu et modèle le nuage informatique !"
          :img-url="require('~/assets/img/membres/siegfried.jpg')"
          theme="2"
        />

        <FicheMembre
          name="Thierry"
          age="58"
          description="Il est tailleur mais n'a pas un coeur de pierre"
          :img-url="require('~/assets/img/membres/thierry.jpg')"
          theme="2"
        />

        <FicheMembre
          name="Jess"
          age="35"
          description="Aide-soignante reconvertie du bâtiment à la santé"
          :img-url="require('~/assets/img/membres/jess2.jpg')"
          theme="1"
        />

        <FicheMembre
          name="Philippe"
          age="54"
          description="Ancien (assistant) directeur régional de Dunder&mifflin, philantrope"
          :img-url="require('~/assets/img/membres/philippe.jpg')"
          theme="2"
        />

        <FicheMembre
          name="Dominik"
          age="60"
          description="Maraudeuse, artiste au grand sac, sherpa d'exception et arpenteuse de mondes"
          :img-url="require('~/assets/img/membres/dominik.jpg')"
          theme="1"
        />

        <FicheMembre
          name="Vincent"
          age="28"
          description="Comédien et régisseur cinéma. Un gars simple exerçant des métiers compliqués"
          :img-url="require('~/assets/img/membres/vincent.jpg')"
          theme="2"
        />

        <FicheMembre
          name="Juliane"
          age="32"
          description="Graphiste, maraudeuse,et fervente défenseuse des abeilles et de la justice"
          :img-url="require('~/assets/img/membres/juliane.jpg')"
          theme="1"
        />

        <FicheMembre
          name="Eric"
          age="64"
          description="Un cheminot qui a déraillé !"
          :img-url="require('~/assets/img/membres/eric.jpg')"
          theme="2"
        />
      </div>
      <p><strong>Et peut-être vous bientôt ? ;)</strong></p>

      <button @click="$emit('close-modal')">
        Fermer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Benevoles',
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
.prez {
  display: flex;

  .content {
    flex: 1;
    margin-right: 2rem;
    @media screen and (max-width: 750px) {
      margin: 0;
      line-height: 1.8em;
      //font-size: 1.5rem;
    }
  }

  .image {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
}

.listeMembres {
  margin: 50px 0;
  display: flex;
  justify-content: center;
  gap: 100px;
  flex-wrap: wrap;
}

p strong {
  font-size: 1.2rem;
  font-weight: 700;
}
</style>
