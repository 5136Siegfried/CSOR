<template>
  <a href="tel:+0673606265">06 73 60 62 65</a>
</template>

<script>
export default {
  name: 'Phone'
}
</script>

<style lang="scss" scoped>
a{
  color: white!important;
  background-color: rgba(0,0,0,0.6);
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.1rem;
  font-weight: 700;
  width: 70%;
  margin: 3rem auto;
  padding: 1rem 2rem;
  border: 4px solid white;
  border-radius: 15px;
@media screen and (max-width: 1024px) {
  width: 70%;
}
}
</style>
