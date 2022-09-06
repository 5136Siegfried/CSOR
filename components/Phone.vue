<template>
  <div class="phoneBox">
    <h3>Un petit <span>coup de fil ?</span></h3>
    <p class="tel">06 73 60 62 65</p>
    <a href="tel:+0673606265" class="call">Appeler</a>
    <p class="info">
      Si on ne décroche pas, <br>
      laissez un message ou bien un texto,<br>
      on vous répondra dès qu’on peut !
    </p>
  </div>
</template>

<script>
export default {
  name: 'Phone'
}
</script>

<style lang="scss" scoped>
h3{
  text-transform: uppercase;
  color: white;
  text-align: left;
  font-size: 2vw;
  line-height: 3vw;
  font-weight: 500;
  > span{
    display: block;
    font-size: 3vw;
    font-weight: 700;
  }
  @media screen and (max-width: 1024px) {
    color: $blue;
    font-weight: 500;
    font-size: 7vw;
    text-align: left;
    line-height: 13vw;

    >span{
      font-size: 10vw;
      font-weight: 700;
      display: block;
    }
  }
}
.phoneBox{
  margin: 2rem auto;
  width: 70%;
  border: 5px solid white;
  border-radius: 30px;
  padding: 2rem;
  color: white;
  background: rgba(0,0,0,0.4);
  .tel{
    width: 70%;
    margin: 3rem auto;
    text-align: center;
    font-size: 2rem;
    color: black;
    background: rgba(181, 177, 177, 0.9);
    border-radius: 10px;
  }
  .call{
    display: block;
    text-align: center;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    background: transparent;
    padding: 0.5rem 2rem;
    margin: 3rem auto ;
    border: 4px solid white;
    border-radius: 20px;
    width: 200px;
    cursor: pointer;

    &:hover{
      background: white;
      color: black;
    }
  }
  p{
    text-align: center;
    font-weight: 700;
  }
}
@media screen and (max-width: 1024px) {
  .phoneBox{
    width: unset;
    color: $blue;
    background: unset;
    margin: 0 auto;
    padding: 0 2rem;

    p{
      &.tel{
        font-size: 2rem;
        font-weight: 700;
        width: unset;
        margin: 3rem auto;
        padding: 1rem 2rem;
        border-radius: 10px;
        background: lighten($blue, 60%);
      }
      &.info{
        margin: 3rem auto
      }
    }
    .call{
      background: $red;
      color: white;
      padding: 0.5em 2em;
      border-radius: 30px;
      &:hover{
        color: white;
        background: $red;
      }
    }
  }
}
@media screen and (max-width: 310px) {
.phoneBox{
  p.tel{
    font-size: 1.5rem;
  }
}
}
</style>
