import {useState} from 'react'
import { GrCircleQuestion } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip'


const Values = ({newEndkapital, einzahlungenGesamt, chart}) => {
    const[startkapital, setStartkapital] = useState('');
    const[sparrate, setSparrate] = useState('');
    const[spardauer, setSpardauer] = useState('');
    const[zinssatz, setZinssatz] = useState('');
        
    const onSubmit = (e) => {
        e.preventDefault();
        
        newEndkapital({startkapital, sparrate, spardauer, zinssatz});
        einzahlungenGesamt({startkapital, sparrate, spardauer});
        chart({startkapital, sparrate, spardauer, zinssatz});

        
    }

    

    return (
    <form className="add-form" >  
        <div className ="form-control">
          <label className ='zinsrechner-label'>Startkapital
           <GrCircleQuestion data-tip data-for="startkapital" className = 'question-font' />
           <ReactTooltip id="startkapital" place="left" effect="solid">
           Dein Startkapital, welches du gleich von Anfang an investieren möchtest. Wenn du nur monatlich sparrst, trage bitte 0 ein. 
           </ReactTooltip>
           </label>
            <input type = 'number' 
            placeholder = '5.000€' 
            onChange = {(e) => {setStartkapital(e.target.value); }} />
          
        </div>

        <div className ="form-control">
          <label>Monatliche Sparrate
          <GrCircleQuestion data-tip data-for="sparrate" className = 'question-font' />
           <ReactTooltip id="sparrate" place="left" effect="solid">
           Das Geld welches du pro Monat anlegen möchtest.(Kann auch 0 sein)
           </ReactTooltip>
          </label>
          <input type = 'number' 
          placeholder = '100€' 
          onChange = {(e) => setSparrate (e.target.value)} />
        </div>

        <div className ="form-control">
          <label>Anlagezeitraum (in Jahren)
          <GrCircleQuestion data-tip data-for="anlagezeitraum" className = 'question-font' />
           <ReactTooltip id="anlagezeitraum" place="left" effect="solid">
          Der Zeitraum über den du dein Geld anlegst. 
           </ReactTooltip>
          </label>
          <input type = 'number' 
          placeholder = '5 Jahre' 
          onChange = {(e) => setSpardauer (e.target.value)} />
        </div>

        <div className ="form-control">
          <label>Jährlicher Zinssatz (in Prozent)
          <GrCircleQuestion data-tip data-for="zinssatz" className = 'question-font' />
          <ReactTooltip id="zinssatz" place="left" effect="solid">
            Der Zinssatz den du für ein Jahr erhälst. 
          </ReactTooltip>
          </label>
          <input type = 'number' 
          placeholder = '5%' 
          onChange = {(e) => setZinssatz(e.target.value)} />
        </div>
        
         {/* <Button /> */}
         <div className="results" >
           <button
           onClick={onSubmit}
           className = 'btn'
           type='submit'
          >Berechnen</button> 
        </div>  
 
    </form>
    )
}

export default Values
