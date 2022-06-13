<template>
  <div class="site">
    <div class="site__wrapper">
      <div class="page_action">
        <div class="title">Nous <span>équiper</span></div>
        <h1 class="page_action__title">Du matériel <br><b>en trop ?</b></h1>
        <img class="page_action__image" src="~/assets/img/donation.jpg" alt="Photo d'équipement médicale'">
        <div class="page_action__content">
          <p>
            Parce que vous avez peut-être envie de nous aider autrement, nous serons heureux de récupérer votre
            matériel
            médical non-utilisé. Vous pouvez aussi vous rendre dans votre pharmacie avec une liste du matériel dont
            nous
            avons régulièrement besoin pour faire participer votre pharmacien-ne à notre action !
          </p>
          <p>
            N’hésitez pas à nous demander si vous voulez plus d’informations à ce sujet.
          </p>
          <button class="btn btn-red">
            Je consulte la liste
          </button>
          <div class="page_wrapper__content__text__donation">
            <h4>J'ai du matériel<br> pour vous !</h4>
            <button class="btn btn-blue">
              Contact
            </button>
          </div>
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
//h1 b{
//  line-height: 0.5em;
//}
button{
  display: block;
  margin: auto;
  &.btn-red{
    margin-top: 2rem;
  }
  &.btn-blue{
    margin-top: 1rem;
  }
}
.page_wrapper__content{
  p{
    margin: 2rem 0;
  }
}
.page_wrapper__content__text__donation{
  margin-top: 2rem;
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
    a{
      display: inline-block;
      width: 100%;
    }
  }
}
</style>
