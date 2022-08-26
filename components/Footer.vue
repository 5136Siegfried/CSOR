<template>
  <footer>
    <ul>
      <li><a href="/mentions">Mentions légales</a></li>
      <li><a href="/sitemap.xml">Plan du site</a> </li>
    </ul>
    <div class="copyright">
      <p>&copy; Copyright Collectif de Secours & Orientation de Rue - 2022</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer{
  //position: absolute;
  //bottom: 0;
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  background: rgba(229, 229, 229, 0.5);
  ul{
    display: flex;
    gap: 2rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1rem
  }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .copyright{
      text-align: center;
      margin-top: 15px;
    }
  }
}
</style>
