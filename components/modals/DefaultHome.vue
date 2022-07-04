<template>
  <div class="defaultHome">
    <p>
      Bienvenue sur le site du<br>
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
  color: white;
  width: 50%;
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
  @media screen and (max-width: 1350px) {
    width: 50%;
  }
  @media screen and (max-width: 1200px) {
    width: 70%;
  }
  @media screen and (max-width: 1024px) {
    margin: 2rem auto;
  }
  @media screen and (max-width: 400px){
    width: 90%;
    margin: 3rem auto
  }
  @media screen and (max-width: 275px) {
    margin: 1rem auto
  }
}
h1{
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-weight: 700;
  .br{
    display: none;
  }
  @media  screen and (max-width: 950px) {
    text-align: center;
    margin: auto;
    .br{display: inline}
  }
}
p{
  margin: 1em 0;
  font-size: 1.3rem;
  &:first-child{margin: 0}
  b{
    font-weight: 700;
  }
}
.separator{
  display: block;
  height: 4px;
  width: 50%;
  margin: 30px auto;
  background-color: white;
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
}
</style>
