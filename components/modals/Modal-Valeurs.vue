<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <img class="img-header" src="~/assets/img/valeurs.jpg" alt="photo des croix bleues">
      <h2>Nos Valeurs !</h2>
      <div class="content">
        <img class="floatRight" src="http://via.placeholder.com/328x298" alt="images croix bleues">

        <p>
          Il y a beaucoup de choses qui peuvent manquer aux gens de la rue, au premier regard. Nourriture, chauffage,
          vêtements, hébergement bien sûr.
        </p>
        <p>
          Le CSOR est né d’une problématique plus insidieuse qui concerne la santé, physique ou mentale. Les gens dans
          la rue sont souvent confrontés à des maladies, des blessures ou des handicaps qui, dans un contexte de vie
          saine seraient facilement gérables.
          <strong>Dans la rue, ils peuvent prendre une ampleur différente, depuis la
            petite plaie qui s’infecte aux angoisses sociales qui rendent toutes démarches et recherches d’aide
            difficiles
          </strong>. C’est en se basant sur cette compréhension que nous avons défini les valeurs que porte
          notre association :
        </p>

        <img
          class="floatLeft"
          src="http://via.placeholder.com/298x470"
          alt="images croix bleues"
        >
        <ul>
          <li>
            <strong>Recréer un lien avec les personnes en difficulté </strong>: leur redonner l’attention et l’écoute
            dont ils ne bénéficient plus en étant sortant du système social ;
          </li>
          <li>
            <strong>Pratiquer une véritable écoute bienveillante </strong>: ne pas infantiliser les gens en décidant à
            leur place ce qu’il leur faut, et leur permettre d’exprimer leurs besoins ;
          </li>
          <li>
            <strong>Orienter et faire connaître les structures de soins </strong>: la plupart des gens de la rue ne
            connaissent pas toutes les associations, lieux d’accueil, lieux d’hygiène etc. Notre mission est de les
            diriger pour recevoir la bonne aide, au bon moment ;
          </li>
          <li>
            <strong>Être un relai entre les différentes structures hospitalières et médico-sociales </strong>:
            faciliter le suivi des gens d’un étape à une autre et les accompagner dans leur évolution ;
          </li>
          <li>
            <strong>Soigner </strong>: bien évidemment, quand les circonstances le permettent, nous assurons
            nous-mêmes les soins médicaux et les suivis, grâce à nos soignants et tous nos bénévoles qui apprennent
            à leur contact ;
          </li>
          <li>
            <strong>Se former nous-même </strong>: pour que chaque bénévole découvre ce qu’il peut apporter de sa
            propre expérience, et le développer à son rythme grâce à nos ateliers d’initiation et de formation.
          </li>
        </ul>
        <img class="floatRight" src="http://via.placeholder.com/409x400" alt="images croix bleues">

        <p>
          Nous avons découvert au fil des rues un véritable besoin, au-delà même de la santé, un besoin humain et un
          besoin de repères auquel nous nous sommes donné pour mission de répondre. Dans le respect, la bienveillance,
          la patience, nous essayons de rétablir un lien avec des personnes devant lesquelles on détourne souvent le
          regard et qui se sentent perdues et délaissées. Rétablir une confiance perdue pour permettre un dialogue
          ouvert et une compréhension des attentes de chacun. Et faire des pansements, évidemment. Et indiquer le
          service hospitalier le plus adapté, aussi.
        </p>
        <p>
          En somme, être présent, à l’écoute, et apporter le meilleur de soi à des personnes dans cette situation
          humainement intolérable qu’est la vie dans la rue.
        </p>
      </div>
      <button @click="$emit('close-modal')">
        Fermer
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Valeurs'
}
</script>

<style lang="scss" scoped>
.img-header {
  display: block;
  width: 100%;
  height: 370px;
  margin: auto;
  object-position: center;
  object-fit: cover;
}

.content {
  p {
    margin: 1em 0
  }

  strong {
    font-weight: 700;
  }

  img {
    &.floatRight {
      float: right;
      margin-left: 2em;
    }

    &.floatLeft {
      float: left;
      margin-right: 2em;
    }
  }
}

</style>
