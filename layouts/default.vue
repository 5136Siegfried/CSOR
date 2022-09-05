<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Page'
}
</script>

<style lang="scss">
*{
  -webkit-tap-highlight-color: transparent
}
img{
  user-select: none;
}
Footer{
  //position: fixed;
  //bottom: 0;
  //@media screen and (max-width: 1024px) {
  //  position: relative;
  //}
}
</style>
