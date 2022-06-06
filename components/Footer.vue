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
  position: absolute;
  width: 100%;
  padding: 0.5rem 2rem;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: rgba(229, 229, 229, 0.5);
  ul{
    display: flex;
    gap: 2rem;
  }
}
</style>
