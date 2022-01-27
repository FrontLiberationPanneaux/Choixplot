import { Question } from "../datas/Questions"


function BoxQuestion( {idQuestion, updateId} ) {
  return (
    <h1 className="cpQuestion"> Q {idQuestion + 1}: {Question[idQuestion].enonce} </h1>
  )
}
  
  export default BoxQuestion