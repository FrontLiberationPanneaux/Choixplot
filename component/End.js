function End( {idQuestion, score} ) {

    if (score[0]>=score[1] && score[0]>=score[2] && score[0]>=score[3]){
        return(
            <div className="cpBoxEnd">
                <h1 className="cpEndTitle">Clignodor !</h1>
                <p>Le courage et toi ne font qu&apos;un. Enfin, c&apos;est ce que les gens autour de toi disent au premier abord. Tu évites beaucoup d&apos;accidents et aide ainsi à la survie du plus grand nombre. Ta force est ton atout, mais fais attention à l&apos;utiliser au bon moment, car allumer son cligno au dernier moment, c&apos;est le meilleur moyen de mettre ses proches en danger !</p> 
            </div>
        )
    }else if(score[1]>=score[0] && score[1]>=score[2] && score[1]>=score[3]){
        return(
            <div className="cpBoxEnd">
                <h1 className="cpEndTitle">Pontsouffle !</h1>
                <p>Tu es loyal et n&apos;hésites pas à soutenir les gens vers le haut. Tu es toujours présent pour les aider à traverser des périodes difficiles. Sans toi, tes compagnons de route tomberaient au fond du gouffre.</p> 
            </div>
        )
    }else if(score[2]>=score[1] && score[2]>=score[0] && score[2]>=score[3]){
        return(
            <div className="cpBoxEnd">
                <h1 className="cpEndTitle">Serpéage !</h1>
                <p>Tu le sais, tu es très rusé. Tel le rat que tu es, tu ramasses l&apos;argent de tes compagnons de routes en leur promettant loyauté et de meilleures autoroutes. Pourtant, tu ne peux t&apos;empêcher de garder cette moula dans ta poche. Tu n&apos;acceptes pas de rendre un service si tu n&apos;obtiens rien en retour.</p> 
            </div>
        )
    }else if(score[3]>=score[1] && score[3]>=score[2] && score[3]>=score[0]){
        return(
            <div className="cpBoxEnd">
                <h1 className="cpEndTitle">Serdirection !</h1>
                <p>Tu connais ton code sur le bout des doigts. L&apos;intelligence et toi, ça ne fait qu&apos;un. D&apos;aucuns disent que ton QI est plus élevé que celui d&apos;Einstein. D&apos;autres estiment que tu es un superhéros de la conduite. Tu ne t&apos;es jamais fait flasher et tu sais que ça n&apos;arrivera jamais. Avec toi, pas besoin de GPS ni de passager, tu connais tes cartes mieux que Michelin !</p> 
            </div>
        )
    }

    return(
      <div className="cpBoxEnd">
          <h1 className="cpEndTitle">Une erreur est survenue</h1>
      </div>
    )
  }
    
    export default End