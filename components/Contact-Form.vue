<template>
  <form id="formJoin" @submit.prevent="sendMail">
    <h3>Contactez-nous</h3>
    <input
      id="name"
      v-model="form.name"
      autocomplete="off"
      name="name"
      placeholder="Nom et Prénom"
      type="text"
    >
    <input
      id="email"
      v-model="form.email"
      autocomplete="off"
      name="email"
      placeholder="Email"
      type="email"
    >
    <input
      id="topic"
      v-model="form.topic"
      autocomplete="off"
      name="topic"
      placeholder="Sujet"
      type="text"
    >
    <textarea
      id="message"
      v-model="form.message"
      cols="30"
      name="message"
      placeholder="Votre Message"
      rows="7"
    />
    <p
      v-if="formMessage"
      class="formMessage"
      :class="formMessage.error ? 'red' : 'green'"
    >
      {{ formMessage.text }}
    </p>
    <input type="submit" class="btnSubmit" value="Envoyer">
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data () {
    return {
      form: {
        name: null,
        email: null,
        topic: null,
        message: null
      },
      formMessage: {
        error: false,
        text: ''
      }
    }
  },
  methods: {
    sendMail () {
      const btn = document.querySelector('.btnSubmit')

      if (!this.form.name || !this.form.email || !this.form.message) {
        this.formMessage.error = true
        this.formMessage.text = 'Merci de renseigner toutes les informations.'
      } else {
        btn.disabled = true
        btn.value = 'Envoie du message ...'
        const data = {
          service_id: 'service_60ovomj',
          template_id: 'template_9dq9hru',
          user_id: 'kyXZSYMRcmfQI_5hV',
          template_params: {
            name: this.form.name,
            email: this.form.email,
            topic: this.form.topic,
            message: this.form.message
          }
        }
        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
          .then((res) => {
            if (res.status === 200) {
              this.formMessage.text = 'Votre message a bien été envoyé.'
              btn.value = 'Envoyer'
              btn.disabled = false
            }
          })
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
  .formMessage.green{
    color: greenyellow;
  }
  .formMessage.red{
    color: #ff4141;
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
    min-width: 50%;
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
    gap: 30px;
    margin: 2rem auto;
    padding: 1rem
  }
  @media screen and (max-width: 360px) {
    margin: 1rem auto
  }
}
</style>
