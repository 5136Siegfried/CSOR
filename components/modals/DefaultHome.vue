<template>
  <div class="defaultHome box">
    <p>
      <span class="bienvenue">Bienvenue</span> sur le site du<br>
    </p>
    <h1>
      Collectif de Secours<br>
      & Orientation de Rue !
    </h1>
    <p>
      Ici vous pourrez en apprendre un peu plus sur ce que nous faisons, et qui sait, peut-être que ça vous
      donnera envie de nous rejoindre...
    </p>
    <p>
      Bonne visite ! :)
    </p>
    <div class="separator" />
    <p>
      <b>Nos maraudes ont lieu<br>
        les lundis, mercredis et vendredi,<br>
        de 19h à 22h.</b>
    </p>

    <a href="/actions">Plus d'info ici</a>
  </div>
</template>

<script>
export default {
  name: 'DefaultHome'
}
</script>

<style lang="scss" scoped>
.defaultHome{
  grid-area: home;
  color: white;
  width: 70%;
  margin: auto;
  padding: 2rem;
  border: 4px solid white;
  border-radius: 30px;
  background: rgba(0,0,0,0.6);
  text-align: center;
  @media screen and (max-width: 1688px) {
    width: 60%;
  }
  @media screen and (max-width: 1405px) {
    width: 70%;
  }
@media screen and (max-width: 1024px) {
  all: unset;
  background: white;
  width: 70%;
  margin: auto;
}
  @media screen and (max-width: 500px) {
    width: 90%;
  }
}
h1{
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-weight: 700;
  @media  screen and (max-width: 950px) {
    text-align: center;
    margin: auto;
  }
}
p{
  margin: 1em 0;
  font-size: 1.3rem;
  &:first-child{
    margin: 0;
  }
  b{
    font-weight: 700;
  }
  .bienvenue{
    @media screen and (max-width: 1024px) {
      display: block;
      font-size: calc(3rem + 1vh);
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
.separator{
  display: block;
  height: 4px;
  width: 50%;
  margin: 30px auto;
  background-color: white;
  @media screen and (max-width: 1024px) {
    background: $red;
  }
  @media screen and (max-height: 680px ) {
    margin:  0 auto;
  }
}
a{
  display: inline-block;
  font-weight: 700;
  border: 2px solid white;
  border-radius: 30px;
  padding: 0.5em 1em;
  margin: 0.5rem 0;
  &:hover{
    background-color: rgba(255,255,255,0.4);
    color: black;
  }

  @media screen and (max-width: 1024px) {
    color: white;
    background: $red;
    &:hover{
      color: white;
      background: $red;
    }
  }
}
</style>
