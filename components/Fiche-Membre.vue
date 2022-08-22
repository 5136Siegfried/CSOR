<template>
  <div class="card" :class="`style${theme}`">
    <img width="136" height="136" :src="imgUrl" :alt="`Photo de ${name}`">
    <p class="info">
      {{ name }} - {{ age }} ans
    </p>
    <p class="description">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FicheMembre',
  props: {
    name: {
      type: String,
      default: 'John'
    },
    description: {
      type: String,
      default: 'Inconnu'
    },
    age: {
      type: Number,
      default: 0
    },
    imgUrl: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  color: white;
  position: relative;
  width: 200px;
  margin: 0 10px;
  img{
    border: 1px solid white;
    object-position: top;
    object-fit: cover;
  }
  p{
    font-size: 0.8rem;
    &.info{
      font-weight: 700;
    }
  }
}
.card.style1{
  &:before{
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    left: -10%;
    z-index: -5;
    width: 120%;
    height: 70%;
    background: $blue;
    transform: rotate(3deg);
  }
  p.description{
    transform: rotate(3deg);
  }
}
.card.style2{
  &:before{
    content: "";
    display: block;
    position: absolute;
    bottom: -10px;
    left: -10%;
    z-index: -5;
    width: 120%;
    height: 70%;
    background: lighten($blue, 50%);
    transform: rotate(-3deg);
  }
  p.description{
    transform: rotate(-3deg);
  }
}
</style>
