<template>
  <div class="modal_wrapper">
    <div class="modal origines">
      <img class="img-header" src="~/assets/img/cover-croix-bleues.jpg" alt="photo des croix bleues">
      <h2>D'ou on vient</h2>
      <div class="content">
        <img src="http://via.placeholder.com/328x298" alt="images croix bleues">

        <p>
          <strong>Si aujourd’hui nous sommes un collectif de maraudeurs dévoué à l’écoute et aux soins des personnes
          sans-abris, notre groupe a pris racine dans la période troublée des Gilets Jaunes</strong>. C’est là que les
          membres
          fondateurs de l’actuel CSOR se sont rencontrés et associés pour former le groupe de Street-Médics les
          Croix-Bleues,
          entièrement consacré au secours des participants aux manifestations qui, nous le savons tous, ont atteints des
          sommets de violences à une période.
        </p>

        <p>
          On peut dire que l’esprit et les valeurs qui nous composent aujourd’hui était déjà là à l’époque...
          <strong>Deux années plus tard, on bat encore le pavé, moins de lacrymogènes et plus de paroles, mais la
            volonté de panser les plaies et d’apaiser les esprits est toujours la même</strong>.
        </p>

        <p>
          Pendant le retour au calme progressif, notre groupe, pas encore officiel mais reconnu pour ses actions, a été
          contacté par l’association Graine de Solidarité. Cette association de distribution alimentaire s’était trouvé
          plusieurs fois confrontée à des sans-abris blessés ou malades, et n’avait pas la possibilité de leur apporter
          les soins nécessaires.
        </p>

        <p>
          <strong>Le partenariat qu’ils nous ont proposé a lancé la machine qui aboutirait à la création du
          CSOR</strong>.
        </p>

        <p>
          D’abord à les suivre sur leurs distributions avec le matériel que nous nous procurions où nous le pouvions,
          en dons ou apports personnels, nous nous sommes petit à petit séparés pour des raisons pratiques de timing
          et de parcours, restant toujours en contact en cas de besoin d’un côté ou de l’autre.
        </p>
        <p>
          Une autre étape déterminante pour l’officialisation de notre joyeux petit groupe a été la crise sanitaire,
          qui a initialement mis un coup d’arrêt à toutes les associations de distributions alimentaires. Inutile
          d’expliquer la gravité de la situation, la seule solution étant que les associations alimentaires comme <strong>Les Restos du
            Coeur</strong> soient assistées par un groupe à visée médicale (je vous laisse deviner qui…) pour faire
          appliquer les normes sanitaires et sécuriser autant que possible les gens pendant la pandémie.
        </p>
        <p>
          Et pour ce faire, on y arrive, il était plus simple d’avoir une existence officielle. Jusqu’ici, si on a bien
          suivi, le groupe n’était pas encore le CSOR, au mieux une bande d’enthousiastes pleins de bonnes
          intentions.
        </p>
        <p><strong>C’est en Juin 2020 que l’association est officiellement crée !</strong></p>

        <p>
          Pour en savoir plus, je t’invite à continuer ta visite du site, on y parle de gens engagés, de gens qui ont
          besoin d’aide, et de comment harmoniser les deux. Et peut-être que tu te découvriras l’envie de nous rejoindre pour une maraude de découverte, et plus si
          affinités, tout le monde est bienvenu !
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
  name: 'Origines'
}
</script>

<style lang="scss" scoped>
.img-header{
  display: block;
  width: 100%;
  height: 370px;
  margin: auto;
  object-position: center;
  object-fit: cover;
}
.content{
  p{
    margin: 1em 0
  }
  strong{
    font-weight: 700;
  }
  img{
    float: right;
    margin-left: 2em;
  }
}

</style>
