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
            <form id="formJoin" @submit.prevent="sendMail">
              <h3>Laisse un message !</h3>
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
              <input type="submit" class="btnSubmit" value="Et hop c'est parti !">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Join',
  data () {
    return {
      form: {
        name: null,
        email: null,
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
            topic: 'Nous rejoindre',
            message: this.form.message
          }
        }
        axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
          .then((res) => {
            if (res.status === 200) {
              this.formMessage.text = 'Votre message a bien été envoyé.'
              btn.value = 'Et hop c\'est parti !'
              btn.disabled = false
            } else {
              this.formMessage.error = true
              this.formMessage.text =
                'Nous somme désolé, une erreur est survenue. Merci de nous contacter par mail au : csor.bx@gmail.com'
            }
          })
          .catch((error) => {
            console.log(error.message)
            this.formMessage.error = true
            this.formMessage.text =
              'Nous somme désolé, une erreur est survenue. Merci de nous contacter par mail au : csor.bx@gmail.com'
          })
      }
    }
  }
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
  .formMessage.green{
    color: green;
  }
  .formMessage.red{
    color: red;
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
