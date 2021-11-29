


const Result = ({einzahlungen, endkapital}) => {
    

//    const newEndkapital =  {startkapital} * Math.pow (1+{zinssatz},{spardauer}) + ({sparrate}*12)*((Math.pow(1+{zinssatz}, {spardauer}) -1 ) 
//    / ({zinssatz} -1));

 
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
