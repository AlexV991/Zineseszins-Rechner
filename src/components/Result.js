


const Result = ({einzahlungen, endkapital}) => {
    
    return (
        <div className ='allResults' >
            <div > 
            <div className = 'singleResults'>Endkapital </div>
            <div className = 'Ergebnis' > {endkapital} € </div>
            </div>
            <div>
            <div className = 'singleResults'>Gesamte Einzahlungen </div>
            <div className = 'Ergebnis'> {einzahlungen} €</div> 
            </div>
            <div>
            <div className = 'singleResults'>Erhaltene Zinszahlungen </div>
            <div className = 'Ergebnis'> {endkapital - einzahlungen} €</div> 
            </div>
        </div>
        
    )
}

export default Result
