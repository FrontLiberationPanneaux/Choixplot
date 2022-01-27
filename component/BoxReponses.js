import { Question } from "../datas/Questions"


function handleClick(reponse, idQuestion, updateId, score, updateScore){
  updateId(idQuestion + 1)

  updateScore([score[0]+reponse.tabScore[0],score[1]+reponse.tabScore[1],score[2]+reponse.tabScore[2],score[3]+reponse.tabScore[3]])
}

function BoxReponses( {idQuestion, updateId, score, updateScore} ) {

  return(
    <div className="cpBoxReponses">
      {Question[idQuestion].reponses.map( (rep, index) =>(
        <button key={`${rep.texte}-${index}`} className="cpReponse" onClick={(e) => handleClick(rep, idQuestion, updateId, score, updateScore)}>
          {rep.texte}
        </button>
      ))}
    </div>
  )
}
  
  export default BoxReponses