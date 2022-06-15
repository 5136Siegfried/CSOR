<template>
  <form @submit.prevent>
    <h3>Contactez-nous</h3>
    <input id="name" type="text" name="name" placeholder="Nom et Prénom" autocomplete="off">
    <input id="email" type="email" name="email" placeholder="Email" autocomplete="off">
    <textarea id="message" name="message" cols="30" rows="10" placeholder="Votre Message" />
    <input type="submit" value="Envoyer" @click="sendmail">
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  methods: {
    sendmail () {
      // const data = {
      //   service_id: 'service_jo8s9p4',
      //   template_id: 'service_jo8s9p4',
      //   user_id: 'WxvWqXjlCWF7c_ake',
      //   template_params: {
      //     username: 'John',
      //     mail: 'test@test.com',
      //     message: 'Salut !',
      //     'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
      //   }
      // }
      const form = document.querySelector('form')
      const data = new FormData(form)
      try {
        axios({
          method: 'post',
          url: 'https://csor.fr/testmail.php',
          data
        }).then(res => console.log(res))
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  gap: 50px;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 2rem;
  border: 4px solid white;
  border-radius: 30px;
  background: rgba(0,0,0,0.4);
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
    margin: 0 auto 1rem auto;
    border: 4px solid white;
    border-radius: 20px;
    width: 50%;
    cursor: pointer;

    &:hover{
      color: black;
      background: white;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    gap: 40px;
    padding: 1rem
  }
}
</style>
