<template>
  <div class="site">
    <div class="site__wrapper">
      <div class="page_action">
        <div class="title">
          Nous <span>rejoindre</span>
        </div>
        <h1 class="page_action__title">
          Envie d'<b>agir ?</b>
        </h1>
        <img class="page_action__image" alt="Photo de la team du CSOR" src="~/assets/img/join.jpg">
        <div class="page_action__content">
          <div class="page_wrapper__content__text">
            <p>
              Parce que nous favorisons la diversité des parcours de vie et des sensibilités de chaque bénévole, tu
              es le ou la bienvenue dans nos maraudes, que tu sois de profession médicale, secouriste ou absolument
              pas
              !
            </p>
            <form @submit.prevent>
              <h3>Laisse un message !</h3>
              <input id="name" autocomplete="off" name="name" placeholder="Nom et Prénom" type="text">
              <input id="email" autocomplete="off" name="email" placeholder="Email" type="email">
              <textarea id="message" cols="30" name="message" placeholder="Votre Message" rows="7" />
              <input type="submit" value="Et hop c'est partie !">
            </form>
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
