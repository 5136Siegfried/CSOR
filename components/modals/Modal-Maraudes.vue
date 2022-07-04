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
          Au cours de ces maraudes, nous réalisons des soins de premiers secours ( ou 1<sup>ère</sup> necessité) auprès
          des
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

      <div class="utils">
        <h3>Où nous <b>trouver ?</b></h3>
        <p>
          Pendant nos maraudes sanitaires,<br>
          les lundi, mercredi & vendredi, de 19h à 22h
        </p>
        <div class="circuits">
          <Circuit
            place="Gare"
            color="red"
            :circuit="['Capucins', 'Cours de la Marne', 'Gare St Jean', 'Belcier']"
            partner="Graines<br> de Solidarité"
            :img-url="require('~/assets/img/partenaires/GDS.jpg')"
          />
          <Circuit
            place="S<sup>te</sup> Cath"
            color="blue"
            :circuit="['La Victoire', 'Sainte-Catherine', 'Parking Victor Hugo', 'Place Saint-Projet', 'Grand Théâtre']"
            partner="Les Robins<br> de la Rue"
            :img-url="require('~/assets/img/partenaires/RDLR.jpg')"
          />
          <div class="circuit">
            <p>
              Nous intervenons également ponctuellement sur d’autres secteurs
              en collaboration avec <b>Les Gratuits</b> et la <b>Maraude du Coeur</b>.
            </p>
            <div class="wrapper">
              <img src="~/assets/img/partenaires/les-gratuits.png" alt="logo les gratuits">
              <img src="~/assets/img/partenaires/maraude-Coeur 1.png" alt="logo les maraudes du coeur">
            </div>
          </div>
        </div>
      </div>

      <p class="last">
        L’ensemble de nos maraudes est en constante ré-évaluation
        en fonction de la disponibilité de nos équipes et des besoins sur le terrain.
      </p>

      <button @click="$emit('close-modal')">
        Fermer
      </button>
    </div>
  </div>
</template>

<script>
import Circuit from '../Circuit'
export default {
  name: 'Maraudes',
  components: {
    Circuit
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

.utils{
  margin-top: 50px;
  > h3{
    float: left;
    text-transform: uppercase;
    text-align: left;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.2em;
    > b {
      display: block;
      font-size: 2.5rem;
      font-weight: 900;
    }
  }
  > p{
    font-size: 1.3rem;
    font-weight: bold;
    color: $blue;
    text-align: left;
    padding-top: 20px;
    margin-left: 40%;
  }
  @media screen and (max-width: 876px) {
    display: flex;
    flex-direction: column;
    h3, p{
      margin: 0 30px;
    }
  }
}
.circuits{
  margin-top: 40px;
  clear: both;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  > .circuit{
    position: relative;
    flex: 1;
    padding-bottom: 100px;
    max-width: 300px;
    min-width: 275px;
    @media screen and (max-width: 315px) {
      min-width: 100%;
    }
  }
}
.circuit:last-child{
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: last;
  padding: 10px;
  color: $blue;
  background-color: $lightgrey;
  p > b{font-weight: bold}
}

p.last{
  font-weight: 700;
  color: $blue;
  text-align: center;
  margin: 1em 0
}
</style>
