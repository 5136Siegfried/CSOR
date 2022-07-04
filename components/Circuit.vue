<template>
  <div class="circuit" :class="color">
    <h4>Circuit <span v-html="place" /></h4>
    <ul>
      <li v-for="item in circuit" :key="item">
        {{ item }}
      </li>
    </ul>
    <div class="partner">
      <p>
        En lien avec <br>
        <span v-html="partner" />
      </p>
      <img :src="imgUrl" alt="logo partenaire">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Circuit',
  mounted () {
    console.log(this.circuit)
  },
  props: ['place', 'color', 'circuit', 'partner', 'imgUrl'],
  methods: {
    getUrl (name) {
      return `/assets/img/partenaires/${name}.jpg`
    }
  }
}
</script>

<style lang="scss" scoped>
.circuit{
  color: white;
  padding: 10px;
}
.circuit.red{
  grid-area: red;
  background-color: $red;
}
.circuit.blue{
  grid-area: blue;
  background-color: $blue;
}

h4{
  height: 40px;
}
h4, h4 span{
  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;
}
ul{
  text-align: left;
  padding-left: 30px;
  list-style: disc;
  margin: 5px;

  @media screen and (max-width: 1280px) {
    font-size: 1.3rem;
    > li {
      margin: 0.5em 0;
    }
  }
}
.partner{
  position: absolute;
  width: 93%;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  text-align: left;
  color: black;
  background-color: white;
  padding: 10px;
  p > span{
    font-weight: bold;
    letter-spacing: 1px;
  }
  img{
    height: 80%;
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
