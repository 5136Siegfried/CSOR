<template>
  <div class="site">
    <div class="site__wrapper">
      <div class="page_action">
        <div class="title">
          Nous <span>équiper</span>
        </div>
        <h1 class="page_action__title">
          Du matériel <br><b>en trop ?</b>
        </h1>
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
          <p class="reduc">
            Les dons en nature peuvent également donner droit à une déduction fiscale ! On dit ça comme ça...
          </p>
            <form @submit.prevent>
              <h3>Laisse un message !</h3>
              <input id="name" autocomplete="off" name="name" placeholder="Nom et Prénom" type="text">
              <input id="email" autocomplete="off" name="email" placeholder="Email" type="email">
              <textarea id="message" cols="30" name="message" placeholder="Votre Message" rows="7" />
              <input type="submit" value="Et hop c'est partie !">
            </form>
          <a href ="CSOR_dons_pharmaciens_fin.pdf"  target="_blank" class="btn btn-red">
            Je consulte la liste
          </a>
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
p{
  text-align: justify;
}

.page_action__title{
  line-height: 1.5em!important;
}
.page_action__content{
  text-align: right;
  margin-bottom: 30px;
  .reduc{
    margin-top: 2em;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    color: $red;
  }
  @media screen and (max-width: 1024px) {
    margin: 30px auto;
  }

}
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
form {
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  //width: 60%;
  margin: 30px auto;
  padding: 1.5rem;
  border: 4px solid $blue;
  border-radius: 30px;

  h3 {
    color: $blue;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }

  input, textarea {
    width: 100%;
    padding: 0.5rem 1rem;
    background: lighten($blue, 58);
    outline: none;
    border: none;
    border-radius: 10px;

    &::placeholder {
      color: white;
    }
  }
  input[type="submit"] {
    color: white;
    background: $blue;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    margin: auto;
    border: 4px solid white;
    border-radius: 30px;
    //width: auto;
    cursor: pointer;

    &:hover {
      color: white;
      background: $red;
    }
  }
  @media screen and (max-width: 500px) {
    padding: 0;
    border: none;
    width: 95%;
  }
}
</style>
