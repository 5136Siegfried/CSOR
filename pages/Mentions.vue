<template>
  <div class="site">
    <div class="site__wrapper">
      <div class="page_action">
        <h1 class="page_action__title">
          Mentions <br><b>Légales</b>
        </h1>
        <img class="page_action__image" alt="Mentions Légales" src="~/assets/img/mentions.svg">
        <div class="page_action__content">
          <div class="page_wrapper__content__text">
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie
              numérique, il est précisé aux utilisateurs du site csor.fr l’identité des différents intervenants dans le
              cadre de sa réalisation et de son suivi.
            </p>

            <p>
              <b>Édition du site</b>
              Le site csor.fr est édité par l’association CSOR, association à but non lucratif régie par la loi de 1901,
              reconnue d'intérêt général, dont le siège social est situé à Bordeaux (33), immatriculée au Journal
              Officiel des association, N° SIREN 884763905.
            </p>

            <p>
              <b>Responsable de publication</b>
              Jessica Miont (Présidente du CSOR)
            </p>

            <p>
              <b>Nous contacter</b>
              Par email : <a href="mailto:csor.bx@gmail.com">csor.bx@gmail.com</a>
            </p>

            <p>
              <b>Hébergeur</b>
              Le site csor.fr est hébergé par HOSTINGER, dont le siège social est situé HOSTINGER INTERNATIONAL LTD,
              61 Lordou Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen suivant :
              https://www.hostinger.fr/contact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join'
}
</script>
<style lang="scss" scoped>
.site{
  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 95px);
    width: 90%;
    margin: auto;
  }
}
h1{
  line-height: 1.5em!important;
  @media screen and (max-width: 1024px) {
    margin: 0;
  }
}
.page_action{
 align-items: start;
}
.page_action__image{
  height: 70%;
  width: auto;
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
.page_action__content{
  width: 100%;
  margin: 0;
}
p{
  margin: 2em 0;
  b{
    display: block;
    font-weight: bold;
  }
}
</style>
