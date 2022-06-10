<template>
  <header>
    <button v-if="$device.isMobileOrTablet" id="burger" @click="isActive = ! isActive">
      Burger
    </button>
    <div class="header__wrapper" :class="{active : isActive}">
      <nav class="nav_left">
        <ul>
          <li><a href="/about">Qui somme-nous ?</a></li>
          <li><a href="/actions">Nos actions</a></li>
          <li><a href="/news">Les actus</a></li>
          <li><a href="/shop">La boutique</a></li>
        </ul>
      </nav>
      <a href="/"><img class="logo" src="~/assets/img/logo.jpg" alt="logo du csor"></a>
      <nav class="nav_right">
        <ul>
          <li><a href="/join">Nous <span>rejoindre</span></a></li>
          <li><a href="/help">Nous <span>aider</span></a></li>
          <li><a href="/donation">Nous <span>équiper</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  width: 100%;
}
.header__wrapper{
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-areas:
"nav-left logo nav-right";
  justify-content: space-around;
  height: 80px;
  color: white;
  background: $blue;

  nav {
    height: 100%;
    margin-top: 30px;
    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      //gap: 3rem

      @media screen and (max-width: 1024px){
        flex-direction: column;

        li{
          margin: 1rem 0
        }
      }
    }
    li a{
      position: relative;
      z-index: 5;
      padding: 1em;
    }
  }
  > a{
    grid-area: logo;
  }
  nav.nav_left ul li{
    @media screen and (max-width: 1024px) {
      text-align: right;
      font-size: 1.5rem;
    }
  }
  nav.nav_right ul li{
    font-size: 1.5rem;
    @media screen and (max-width: 1024px) {
      text-align: center;
      font-size: 2rem;
    }
  }
  nav.nav_left ul li a{
    font-weight: 500;
    &:hover{
      font-weight: 700;
      //font-size: 1.2em;
    }
  }
  nav.nav_right ul li a, nav.nav_right ul li a span{
    font-weight: 700;
    text-transform: uppercase;
    @media screen and (max-width: 1560px){
      //font-size: 1.3rem
    }
  }
  nav.nav_right ul li a{
    transition: font-size 0.7s;
    -webkit-transition: font-size 0.7s;
    &:hover::after {
      content: "";
      display: block;
      position: absolute;
      top: 25%;
      left: 30%;
      width: 0;
      height: 40%;
      opacity: 0;
      background: $red;
      z-index: -1;
      animation: 0.5s shape ease-in-out forwards;
    }
    &:hover{
      font-size: 1.3em;
      //font-weight: 900;
    }
  }
  nav.nav_right ul li a span{
      @media screen and (max-width: 1024px) {
        position: relative;
        &:before{
          content: "";
          position: absolute;
          top: 10%;
          right: 0;
          z-index: -1;
          width: 100%;
          height: 80%;
          background: $red;
          transform: skew(-5deg) rotate(-5deg);
        }
      }
  }
  .logo{
    display: block;
    z-index: 10;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 30px auto 0 auto;
    width: 175px;
    height: 190px;
    object-position: center;
    object-fit: cover;
    box-shadow: 0 0 15px rgba(108, 122, 137, 0.5);

    @media screen and (max-width: 1600px){
      width: 126px;
      height: 142px;
    }
    @media screen and (max-width: 1360px){
      width: 100px;
      height: 110px;
    }
  }

  @media screen and (max-width: 1024px){
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 300px;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
  "logo"
  "nav_left"
  "nav-right";
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
}
.header__wrapper.active{
  transform: translateX(0);
}
#burger{
  position: absolute;
  z-index: 100;
  top: 30px;
  right: 30px;
  background: transparent;
  color: white;
}
@keyframes shape {
  to {
    width: 40%;
    opacity: 1;
    transform: rotate(-7deg);
  }
}
</style>
