import React from 'react'

class Password extends React.Component{
    constructor(){
        super()
        // TO DO
        this.state = {
            parola:"",
            password:""
        }
    }

    passwordcontrollo(prova) {
        for (let i=0; prova.length < 8; i++) {
                prova += "#"      
        }
        if(prova.indexOf("a")||prova.indexOf("s")||prova.indexOf("l")||prova.indexOf("e")||prova.indexOf("o")||prova.indexOf("g")||prova.indexOf("")){
            for(let j=prova.length-1;j>=0; j--){
              prova = prova.replace(/a/,"@");
              prova = prova.replace(/s/,"$");
              prova = prova.replace(/l/,"1");
              prova = prova.replace(/e/,"3");
              prova = prova.replace(/o/,"0");
              prova = prova.replace(/g/,"6");
              prova = prova.replace(/ /,"_");
            }      
        }
        else{
            
        }
      return prova;
      }

      aggiornaChiaro = (evento)=>{
        let testo = evento.target.value;
        this.setState({
            parola: testo,
            password: this.passwordcontrollo(testo)
        })
        console.log(this.state.password)
    }

    render(){
        return (
            <section>
                <h1>Generatore di password</h1>
                <div>
                    <label>Inserisci una parola</label><br/>
                    <input type="text" value={this.state.parola} onChange={this.aggiornaChiaro}/>
                </div>
                <div>
                    <label>La tua password</label><br/>
                    <input type="text" readOnly value={this.state.password}  />
                </div>
            </section>
        )
    }
}
export default Password;