<template>
  <form @submit.prevent="sendMail">
    <h3>Contactez-nous</h3>
    <input
      id="name"
      v-model="form.name"
      type="text"
      name="name"
      placeholder="Nom et Prénom"
      autocomplete="off"
    >
    <input
      id="email"
      v-model="form.email"
      type="email"
      name="email"
      placeholder="Email"
      autocomplete="off"
    >
    <textarea
      id="message"
      v-model="form.message"
      name="message"
      cols="30"
      rows="7"
      placeholder="Votre Message"
    />
    <input type="submit" value="Envoyer">
  </form>
</template>

<script>
export default {
  name: 'ContactForm',
  data () {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendMail () {
      if (this.form.name !== '' && this.form.email !== '' && this.form.message !== '') {
        // console.log(this.form.name)
        // console.log(this.form.email)
        // console.log(this.form.message)
        const formData = new FormData()
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)
        formData.append('message', this.form.message)

        fetch('https://www.csor.fr/testmail.php', {
          mode: 'no-cors',
          method: 'POST'
        })
      } else {
        // eslint-disable-next-line no-console
        console.error('Information(s) manquante(s) (name/email/message obligatoire)')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  display: flex;
  gap: 25px;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 2rem;
  border: 4px solid white;
  border-radius: 30px;
  background: rgba(0,0,0,0.4);
  h3{
    color: white;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    @media screen and (max-height: 800px) {
      font-size: 1.5rem;
    }
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
    @media screen and (max-height: 800px) {
      padding: 0.5rem 1rem
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
    @media screen and (max-height: 800px) {
      margin: 0 auto
    }
  }
  @media screen and (max-width: 1024px) {
    width: 90%;
    gap: 40px;
    margin: 5rem auto;
    padding: 1rem
  }
  @media screen and (max-width: 360px) {
    margin: 1rem auto
  }
}
</style>
