<template>
  <div class="site">
    <div class="site__wrapper">
      <div class="page_action">
        <div class="title">
          Nous <span>aider</span>
        </div>
        <h1 class="page_action__title">
          Être <b>Mécène</b>
        </h1>
        <img class="page_action__image" src="~/assets/img/help.jpg" alt="Photo d'un cochon tirelire'">
        <div class="page_action__content">
          <p>
            Parce que nous avons besoin de moyens pour financer notre matériel médical et nos consommables pour les soins, toute aide financière est la bienvenue.
            De plus, nous avons pour objectif d’acquérir les équipements nécessaires à la sécurité de nos bénévoles lors des maraudes, ainsi que du matériel pédagogique pour nos formations internes.
          </p>
          <p>
            Nous finançons aussi depuis peu la location d’un petit local en ville pour entreposer tout notre
            matériel et notre stock de consommables.
          </p>
          <p class="reduc">
            Vous pouvez bénéficier d’une réduction d’impôt égale à 75% du montant de votre don, dans la limite de 1000€ de don par an et de 20% de votre revenu imposable.
          </p>
          <div class="page_wrapper__content__text__donation">
            <h4>Je fais un don :</h4>
            <ul class="donation_list">
              <li class="donation_list_little donation_list_little_1">
                <a href="https://www.helloasso.com/associations/csor/formulaires/1" target="_blank">1€</a>
              </li>
              <li class="donation_list_little donation_list_little_5">
                <a href="https://www.helloasso.com/associations/csor/formulaires/1" target="_blank">5€</a>
              </li>
              <li class="donation_list_little donation_list_little_20">
                <a href="https://www.helloasso.com/associations/csor/formulaires/1" target="_blank">20€</a>
              </li>
              <li class="donation_list_little donation_list_big">
                <a href="https://www.helloasso.com/associations/csor/formulaires/1" target="_blank">Ce que vous
                  voulez
                  !</a>
              </li>
            </ul>
          </div>
          <p class="schoko">
            (On accepte aussi les chèques, les espèces et les abricots secs ou une chocolatine !)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style lang="scss" scoped>
.title span:before{
  background: $blue!important;
}
.page_action__content{
  margin-bottom: 30px;
  .reduc{
    margin-top: 2em;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: $red;
  }
  .schoko{
    color: $blue;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;
  }
}
.page_wrapper__content__text__donation{
  margin-top: 5rem;
  padding: 3rem;
  border: 4px solid $blue;
  border-radius: 30px;
h4{
  color: $blue;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
}
  .donation_list{
    margin-top: 2rem;
    display: grid;
    gap: 20px;
    grid-template-areas:
"l1 l5 l20"
"big big big";
    &_little{
      color: white;
      font-weight: 700;
      text-align: center;
      background: $blue;
      border-radius: 30px;
      cursor: pointer;
      &_1{
        grid-area: l1;
      }
      &_5{
        grid-area: l5;
      }
      &_20{
        grid-area: l20;
      }
      &:hover{
        background: $red;
      }
    }
    &_big{
      grid-area: big;
    }
    li{
      padding: 0.2em 0.5em;
    }
    a{
      display: inline-block;
      width: 100%;
      font-weight: 500;
    }
    @media screen and (max-width: 350px) {
      display: flex;
      flex-direction: column;

      li{
        font-size: 2rem;
        padding: 0.2em 0.5em
      }
    }
  }
}
</style>
