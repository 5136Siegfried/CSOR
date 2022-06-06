<template>
  <div class="site">
    <h1>Envie d'<b>agir ?</b></h1>
    <div class="page_wrapper">
      <img src="~/assets/img/join.jpg" alt="Photo de la team du CSOR">
      <div class="page_wrapper__content">
        <div class="page_wrapper__content__text">
          <p>
            Parce que nous favorisons la diversité des parcours de vie et des sensibilités de chaque bénévole, tu
            es le ou la bienvenue dans nos maraudes, que tu sois de profession médicale, secouriste ou absolument pas !
          </p>
          <form @submit.prevent>
            <h3>Laisse un message !</h3>
            <input id="name" type="text" name="name" placeholder="Nom et Prénom" autocomplete="off">
            <input id="email" type="email" name="email" placeholder="Email" autocomplete="off">
            <textarea id="message" name="message" cols="30" rows="7" placeholder="Votre Message" />
            <input type="submit" value="Et hop c'est partie !">
          </form>
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
form{
  display: flex;
  gap: 20px;
  flex-direction: column;
  //width: 60%;
  margin: 30px auto 0 auto;
  padding: 2rem;
  border: 4px solid $blue;
  border-radius: 30px;
  h3{
    color: $blue;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  input, textarea{
    padding: 0.5rem 1rem;
    background: lighten($blue, 58);
    outline: none;
    border: none;
    border-radius: 10px;
    &::placeholder{
      color: white;
    }
  }
  input[type="submit"]{
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

    &:hover{
      color: white;
      background: $red;
    }
  }
}
</style>
