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
          <a href="/CSOR_dons_pharmaciens_fin.pdf" target="_blank" class="btn btn-red">
            Je consulte la liste
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Help',
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
            topic: 'Du matériel à donner',
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
