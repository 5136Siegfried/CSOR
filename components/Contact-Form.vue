<template>
  <form @submit.prevent>
    <h3>Contactez-nous</h3>
    <input id="name" type="text" name="name" placeholder="Nom et Prénom" autocomplete="off">
    <input id="email" type="email" name="email" placeholder="Email" autocomplete="off">
    <textarea id="message" name="message" cols="30" rows="10" placeholder="Votre Message" />
    <input type="submit" value="Envoyer">
  </form>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  gap: 50px;
  flex-direction: column;
  width: 50%;
  margin: auto;
  padding: 2rem;
  border: 4px solid white;
  border-radius: 30px;
  h3{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  input, textarea{
    padding: 1rem 1.5rem;
    background: rgba(251, 252, 253, 0.7);
    outline: none;
    border: none;
    border-radius: 10px;
    &::placeholder{
      color: black;
    }
  }
  input[type="submit"]{
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    background: transparent;
    padding: 0.5rem 2rem;
    margin: auto;
    border: 4px solid white;
    border-radius: 20px;
    width: 50%;
    cursor: pointer;

    &:hover{
      color: black;
      background: white;
    }
  }
}
</style>
