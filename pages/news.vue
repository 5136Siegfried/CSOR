<template>
  <div class="site">
    <div class="site__wrapper">
      <h1>Les <b>news !</b></h1>
      <div class="content">
        <p>arrive très bientôt ;)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="scss" scoped>
.site{
  min-height: calc(100vh - 100px);
}
.site__wrapper{
  height: calc(70vh - 100px);
  .content{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items : center;
    p{
      color: $blue;
      font-size: clamp(2vh, 4rem, 2rem);
    }
  }
}
</style>
