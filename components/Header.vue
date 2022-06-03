<template>
  <header>
    <nav class="nav_left">
      <ul>
        <li><a href="/about">Qui somme nous ?</a></li>
        <li><a href="/actions">Nos actions</a></li>
        <li>Les actus</li>
        <li>La boutique</li>
      </ul>
    </nav>
    <a href="/"><img class="logo" src="~/assets/img/logo.jpg" alt="logo du csor"></a>
    <nav class="nav_right">
      <ul>
        <li><a href="/join">Nous rejoindre</a></li>
        <li><a href="/help">Nous aider</a></li>
        <li><a href="/donation">Nous équiper</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header{
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 1fr 3fr;
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
      gap: 3rem
    }
    li a{
      position: relative;
      z-index: 5;
      &:hover::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 25%;
        width: 0;
        height: 100%;
        opacity: 0;
        background: $red;
        z-index: -1;
        animation: 0.5s shape ease-in-out forwards;
      }
    }
  }
  nav.nav_left ul li{
    font-weight: 500;
    //grid-column-start: 1;
    //grid-column-end: 2;
  }
  nav.nav_right ul li a{
    //grid-column-start: 3;
    font-size :1.5rem;
    font-weight: 700;
    text-transform: uppercase
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
  }
}

@keyframes shape {
  to {
    width: 50%;
    opacity: 1;
    transform: rotate(-7deg);
  }
}
</style>
