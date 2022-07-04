<template>
  <div class="modal_wrapper"  @click.stop="closeModal">
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
          name="Alexandra"
          age="30"
          description="Cheffe d'équipe en prévention sécurité, pas toujours facile à suivre (en maraude... comme en discussion !)"
          :img-url="require('~/assets/img/membres/alexandra.jpg')"
          theme="1"
        />

        <FicheMembre
          name="Laura"
          age="32"
          description="Infirmière, trésorière au CSOR, couturière et championne de backgammon"
          :img-url="require('~/assets/img/membres/laura.jpg')"
          theme="2"
        />

        <FicheMembre
          name="Jess"
          age="35"
          description="Aide-soignante et la plus cool de toutes les présidentes du CSOR"
          :img-url="require('~/assets/img/membres/jess.jpg')"
          theme="1"
        />

        <FicheMembre
          name="Stéphane"
          age="39"
          description="Négociateur foncier et philantrope en herbe"
          :img-url="require('~/assets/img/membres/stephane.jpg')"
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
          name="Marc"
          age="22"
          description="Étudiant en médecine et grand fan de Tintin !"
          :img-url="require('~/assets/img/membres/marc.jpg')"
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
