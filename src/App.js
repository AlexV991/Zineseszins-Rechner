import Header from './components/Header'
import Values from './components/Values'
import Result from './components/Result'

import {useState} from 'react'



function App() {

  const [endkapital, setEndkapital] = useState('')
  const [einzahlungen, setEinzahlungen] = useState('')
  
 

  const newEndkapital = (e) => {

    const end  =  Math.round(e.startkapital * Math.pow((e.zinssatz/100+1), e.spardauer) + (e.sparrate*12)*
    (Math.pow(e.zinssatz/100+1, e.spardauer) -1 ) / ((e.zinssatz/100+1)-1));
    setEndkapital([end])
    } 
  
  
    const einzahlungenGesamt = (e) => {
        const einzahlung = Math.round(parseInt(e.startkapital) + (parseInt(e.sparrate*12*e.spardauer)))
        setEinzahlungen ([einzahlung])
    } 
  
    const chart = (e) => {
      let finalEndkapital = e.startkapital 
      let zinsen = 0 
      let arrayZinsen = []
      let arrayEndkapital = []
      let jahre = []
      let kapital = e.startkapital
      

      for( let i =0; i < e.spardauer; i++){
        
        finalEndkapital = Math.round(finalEndkapital *(e.zinssatz/100+1)+(e.sparrate*12)*(e.zinssatz/100 -1)/(e.zinssatz/100-1))
        zinsen = finalEndkapital - e.startkapital - ((i+1) *(12*e.sparrate))
        kapital =parseInt(kapital) + parseInt(12*e.sparrate)
       
        arrayZinsen.push(zinsen)
        arrayEndkapital.push(kapital)
        jahre.push(i+1)
      }

    }


  return (
    <div className="container">
      <Header />
      <Values  newEndkapital ={newEndkapital} einzahlungenGesamt = {einzahlungenGesamt} chart ={chart} />
      {endkapital !== "" && 
      <Result  einzahlungen = {einzahlungen} endkapital = {endkapital} />}  
    </div>
  );
}

export default App;
