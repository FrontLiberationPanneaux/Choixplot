function Maison( {idQuestion, score} ) {

  return(
    <div className="cpBoxMaison">
        <div>
        Clignodor : {Math.round(100*score[0]/idQuestion)}%
        </div>

        <div>
        Pontsouffle  : {Math.round(100*score[1]/idQuestion)}%
        </div>

        <div>
        Serpéage  : {Math.round(100*score[2]/idQuestion)}%
        </div>

        <div>
        Serdirection  : {Math.round(100*score[3]/idQuestion)}%
        </div>
    </div>
  )
}
  
  export default Maison