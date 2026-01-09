import React from 'react'
import buttons from './buttons'
import Buttons from './buttons'
export default function header() {
    return (
        <div>
            <header>
                <div className="text_header">
                    <h1>Des compétences d'aujourd’hui qui ont de l'avenir</h1>
                    <h3>Notre différence ? Une école 100% en ligne et un modèle pédagogique unique qui seront les clés de votre réussite.</h3>
                </div>
                <div className="img_header">

                </div>
            </header>
            
             <div className="bigheader_card">
            <div className="student_card">
                <h1>Étudiants</h1>
                <p>Faites un grand pas vers votre nouvelle carrière en suivant l’une de nos formations diplômantes.</p>
            <Buttons />
            </div>

            <div className="employeur_card">
                <h1>Employeurs</h1>
                <p>Recrutez des alternants qui créent de la valeur rapidement et formez vos équipes aux compétences à fort impact.</p>
            <Buttons />
            </div>
            
            </div>

        </div>
    )
}
