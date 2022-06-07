<template>
  <div class="modal_wrapper">
    <div class="modal benevoles">
      <div class="prez">
        <div class="content">
          <h2>Nos Bénévoles</h2>
          <p>
            Après ses débuts tumultueux et riches en émotions, le CSOR est au fil du temps devenu le groupe tel qu’il
            est aujourd’hui, un groupe de maraudeurs issus de tous milieux, du médical à la puériculture en passant par le
            bâtiment et l’artisanat, il n’y en a pas deux semblables et nous apportons tous notre pierre personnelle à
            l’édifice !
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
          theme="1"
        />

        <FicheMembre
          name="Laura"
          age="32"
          description="Infirmière, trésorière au CSOR, couturière et championne de backgammon"
          theme="2"
        />

        <FicheMembre
          name="Jess"
          age="35"
          description="Aide-soignante et présidente du CSOR très sympa, même si elle comprend jamais rien à ce qu'on lui demande"
          theme="1"
        />

        <FicheMembre
          name="Ginette"
          age="54"
          description="Assistante maternelle et maraudeuse engagée"
          theme="2"
        />

        <FicheMembre
          name="Dominik"
          age="?"
          description="Maraudeuse, artiste au grand coeur et arpenteuse de mondes"
          theme="1"
        />

        <FicheMembre
          name="Vincent"
          age="28"
          description="Comédien et régisseur cinéma. Un gars simple exerçant des métiers compliqués"
          theme="2"
        />

        <FicheMembre
          name="Juliane"
          age="32"
          description="Graphiste, maraudeuse,et fervente défenseuse des abeilles et de la justice"
          theme="1"
        />

        <FicheMembre
          name="Ginette"
          age="54"
          description="Assistante maternelle et maraudeuse engagée"
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
  name: 'Benevoles'
}
</script>

<style lang="scss" scoped>
.prez {
  display: flex;
  //gap: 30px;

  .content {
    flex: 1;
  }

  .image {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
