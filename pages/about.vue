<template>
  <div class="site">
    <h1><b>Qui</b> sommes-nous ?</h1>
    <div class="content">
      <div
        class="bloc bloc1"
        @click="showModalOrigines = true"
      >
        <p>Nos origines</p>
        <div class="hover">
          <p>En savoir <br>plus</p>
        </div>
      </div>
      <div class="bloc bloc2" @click="showModalBenevoles = true">
        <p>Nos bénévoles</p>
        <div class="hover">
          <p>En savoir <br>plus</p>
        </div>
      </div>
      <div class="bloc bloc3" @click="showModalValeurs = true">
        <p>Nos valeurs</p>
        <div class="hover">
          <p>En savoir <br>plus</p>
        </div>
      </div>
    </div>
    <ModalOrigines v-if="showModalOrigines" @close-modal="showModalOrigines = false" />
    <ModalBenevoles v-if="showModalBenevoles" @close-modal="showModalBenevoles = false" />
    <ModalValeurs v-if="showModalValeurs" @close-modal="showModalValeurs = false" />
  </div>
</template>

<script>
import ModalOrigines from '~/components/modals/Modal-Origines'
import ModalBenevoles from '~/components/modals/Modal-Benevoles'
import ModalValeurs from '~/components/modals/Modal-Valeurs'

export default {
  name: 'About',
  components: {
    ModalOrigines,
    ModalBenevoles,
    ModalValeurs
  },
  data () {
    return {
      showModalOrigines: false,
      showModalBenevoles: false,
      showModalValeurs: false
    }
  }
}
</script>

<style lang="scss" scoped>

.content {
  display: flex;
  justify-content: center;
  //gap: 50px;
  margin-top: 50px;

  .bloc {
    position: relative;
    color: white;
    background: $blue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 362px;
    height: 362px;
    margin: 2rem;
    cursor: pointer;
    overflow: hidden;

    &.bloc1 {
      opacity: 0.4;
      & .hover{
        background: url("~/assets/img/origines_hover.jpg");
      }
    }
    &.bloc2 {
      opacity: 0.6;
      & .hover{
        background: url("~/assets/img/benevoles_hover.jpg");
      }
    }
    &.bloc3 {
      opacity: 0.8;
      & .hover{
        background: url("~/assets/img/valeurs_hover.jpg");
      }
    }
    p {
      font-size: 2rem;
      font-weight: 400;
    }
    .hover{
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      transition: 0.5s;
      p{
        text-align: center;
        font-weight: 700;
      }
    }
    &:hover{
      opacity: 1;
    }
    &:hover .hover{
      top: 0;
    }
  }
}
</style>
