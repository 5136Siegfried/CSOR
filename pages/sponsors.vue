<template>
  <div class="site">
    <div class="site__wrapper">
      <h1>Ils nous <br><b>soutiennent...</b></h1>
      <div class="content">
        <section class="section">
          <img class="section__first_img" src="~/assets/img/logo-bms.png" alt="logo BMS">
          <div class="section__content">
            <h3>Bordeaux Mécènes Solidaires - 2021/2022</h3>
            <p>
              BMS est une fondation territoriale. Elle agit comme tiers de confiance pour accompagner les entreprises
              dans leur politique de mécénat en Gironde et aider les associations locales à mobiliser les ressources qui
              leur sont nécessaires.
              En 2022 et pour la deuxième année consécutive, BMS soutient notre association dans le financement de ses
              actions et la location d’un local dans le centre-ville, pour entreposer le matériel nécessaire aux
              maraudes.
              Merci à eux pour leur confiance et leur aide.
            </p>
          </div>
          <img src="~/assets/img/thanks.jpg" alt="" class="section__second_img">
        </section>
        <section class="section">
          <img class="section__first_img" src="~/assets/img/grande-roue.jpeg" alt="Photo de la grande roue de Bordeaux">
          <div class="section__content">
            <h3>Grande Roue des Quinconces - 2022</h3>
            <p>
              En juillet, Éric Vatonne, responsable de la société Les Grandes Roues de France, propriétaire de la
              grande roue de Bordeaux, a effectué un don de 3 000 € à l’association.
              Une donation qui permettra au CSOR de financer des
              formations pour ses membres mais surtout d’acheter du matériel médical.
            </p>
          </div>
          <img src="~/assets/img/ill_grande-roue.jpeg" alt="Photo remise de prix" class="section__second_img">
        </section>
        <section class="section">
          <img class="section__first_img" src="~/assets/img/prix_jeunes_asso.png" alt="Prix jeunes associations">
          <div class="section__content">
            <h3>Prix des jeunes associations - 2021</h3>
            <p>
              La Ville de Bordeaux propose le "Prix des jeunes associations", un appel à projets destiné à encourager
              et valoriser l'engagement des associations bordelaises âgées de moins de 3 ans. L'action proposée, qu'elle
              soit pérenne ou ponctuelle, doit être novatrice et conçue au bénéfice des Bordelais.
              En 2021, nous avons eu la gratification de recevoir cette récompense, qui a pu aider l'association a se
              développer !
            </p>
          </div>
          <img
            src="~/assets/img/ill_prix-jeune-asso.jpg"
            alt="Photo remise du prix jeune association"
            class="section__second_img">
        </section>
        <section class="section">
          <img class="section__first_img" src="~/assets/img/logo-cosog.jpg" alt="Logo du Cosog">
          <div class="section__content">
            <h3>Subvention du COSOG - 2021</h3>
            <p>Grâce à l’appui d’une adhérente de l’association, le CSOR a pu être soutenu avec une subvention de la
              caisse des dépôts du COSOG, ce qui nous a permis principalement à acheter des consommables pour les
              maraudes.
              Un grand merci pour leur soutien !</p>
          </div>
          <img
            src="~/assets/img/ill_cosog.jpg"
            alt="Photo de matériel de soins"
            class="section__second_img">
        </section>
        <section class="section">
          <img
            class="section__first_img"
            src="~/assets/img/mairie-de-quartier.jpg"
            alt="Logo Mairie de Bordeaux centre">
          <div class="section__content">
            <h3>Mairie de quartier de Bordeaux Centre - 2020</h3>
            <p>En novembre 2020, nous avons eu le plaisir d'accueillir Mr Olivier Cazaux, maire du quartier Bordeaux
              Sud, sur notre maraude du secteur de la gare. Arborant le t-shirt CSOR pour l'occasion, il a suivi à nos
              côtés le parcours habituel, sur lequel beaucoup de sujets ont été abordés et de nombreuses questions ont
              été soulevées. Cette rencontre n'en est pas restée là, car, suite à cela, une généreuse subvention a été
              versée au CSOR par la mairie du quartier de Bordeaux Centre, afin de nous aider à nous équiper de nouveaux
              chasubles, plus pratiques et sécuritaires.</p>
          </div>
          <img
            src="~/assets/img/ill_mairie-de-quartier.jpg"
            alt="Photo de du CSOR"
            class="section__second_img">
        </section>
        <section class="section">
          <img
            class="section__first_img"
            src="~/assets/img/francois-ruffin.jpg"
            alt="Logo Mairie de Bordeaux centre">
          <div class="section__content">
            <h3>Donation du député François Ruffin - 2020</h3>
            <p>Nous avons eu le plaisir de rencontrer de François Ruffin, député France Insoumise, au hasard d’une
              maraude en décembre 2020.
              Il faut savoir que Monsieur Ruffin a décidé, depuis le début de son mandat, de ne se verser que le montant
              du SMIC sur l'indemnité parlementaire qu'il perçoit et reverser le reste à des associations. C'est dans
              cette démarche qu'il a souhaité nous soutenir en faisant un don de 1000 € au CSOR. Ce don a permis entre
              autres de financer nos t-shirts.</p>
          </div>
          <img
            src="~/assets/img/ill_francois-ruffin.jpg"
            alt="Photo de du CSOR"
            class="section__second_img">
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="scss" scoped>
h1{
  line-height: 1.5em;
}
.site__wrapper{
  .content{
    //margin: 0 200px;
    section:not(:last-child){
      position: relative;
      margin-bottom: 90px;
      ::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -50px;
        left: 50%;
        height: 3px;
        width: 100px;
        background: $red;
        transform: translateX(-50%);
      }
    }
    .section{
      width: 90%;
      margin: 33px auto;

      img{
        display: block;
        margin: auto;
      }

      img.section__first_img {
        width: 115px;
        height: 115px;
        object-fit: cover;
        object-position: top;

        @media screen and (min-width: 768px) {
          width: 130px;
          height: 130px;
          object-fit: cover;
          object-position: top;
        }
        @media screen and (min-width: 1200px) {
          width: 150px;
          height: 150px;
        }
      }
      img.section__second_img {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        object-position: center;
      }
      &__content{
        margin: 33px auto;
        text-align: justify;
        h3{
          font-weight: bold;
          color: $blue;
        }
        @media screen and (min-width: 768px) {
          margin-right: 30px;
        }
        @media screen and (min-width: 1200px) {
          margin-right: 100px;
        }
      }

      @media screen and (min-width: 768px) {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 20% 50% 30%;
        align-items: center;
      }
    }
  }
}
</style>
