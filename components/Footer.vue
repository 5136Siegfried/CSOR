<template>
  <footer>
    <ul>
      <li>Devenir partenaire</li>
      <li>Rapport d'activité</li>
      <li>Espace Presse</li>
      <li>Mentions légales</li>
      <li>Plan du site </li>
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
