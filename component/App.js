import BoxQuestion from "./BoxQuestion"
import BoxReponses from "./BoxReponses"
import Maison from "./Maison"
import End from "./End"
import { Question } from "../datas/Questions"
import Image from "next/image";
import { useState } from 'react'
import imgChoixplot from '../assets/choixplot.png'

function App() {
    const [idQuestion, updateId] = useState(-1)
    const [score, updateScore] = useState([0,0,0,0]) // [Cd, Pe, Se, Sn]

    
    if(idQuestion == -1){
        return ( 
            <div>
                <div className="cpImgChoixplot">
                    <Image placeholder="blur" src={imgChoixplot} alt="Choixplot"/>
                </div>
                <p className="cpStartTexte">
                    Notre RH, Choixplot, s&apos;occupe d&apos;assigner aux membres une des quatre maisons de Plodlard, en fonction de leur personnalité.
                    Pour connaitre votre maison, il suffit de passer le court test de Choixplot.
                </p>
                <div className="cpCenter"><button className="cpStart" onClick={(e) => updateId(0)}>
                    Commencer
                </button></div>
            </div>
        )
    }else if(idQuestion >= 13){
        return ( 
            <div>
                <Maison idQuestion={idQuestion} score={score}/>
                <div className="cpImgChoixplot">
                    <Image placeholder="blur" src={imgChoixplot} alt="Choixplot"/>
                </div>
                <End idQuestion={idQuestion} score={score}/>
            </div>
        )
    }else{
        return (
            <div>
                <div className="cpBoxImg">
                    <Image placeholder="blur" src={Question[idQuestion].img} alt="Image contextuel à la question"/>
                </div>

                <div className="cpBoxQuestion">   
                    <BoxQuestion idQuestion={idQuestion} updateId={updateId}/>
                    <BoxReponses idQuestion={idQuestion} updateId={updateId} score={score} updateScore={updateScore}/>
                </div>
            </div>
        )
    }
}

export default App