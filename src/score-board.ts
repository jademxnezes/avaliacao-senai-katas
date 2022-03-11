export class Pontuacao{
   
    
    
    public timeA = 0;
    public timeB = 0;

 
    public pontuacaoTimeA1(){
        return this.timeA = this.timeA + 1 
    }
    public pontuacaoTimeA2(){
        return this.timeA = this.timeA + 2
    }
    public pontuacaoTimeA3(){
        return this.timeA = this.timeA + 3
    }
    public pontuacaoTimeB1(){
        return this.timeB = this.timeB + 1 
    }
    public pontuacaoTimeB2(){
        return this.timeB = this.timeB + 2
    }
    public pontuacaoTimeB3(): number | void{
        return this.timeB = this.timeB + 3 
    }

     public getPontuacao(){
        
        let placarA = `000`
        let placarB = `000`

        if (this.timeA > 9) {
            placarA  = `0${this.timeA}`
           
        }
        if (this.timeA <= 9) {
            placarA  = `00${this.timeA}`
           
        }
       
        if (this.timeA > 99) {
            placarA  = `${this.timeA}`
          
        }
        if(this.timeA > 999){
            this.timeA = 999
            placarA = `${this.timeA}`
            var erro = "Não pode ser acima de 999"
            return erro;

        }



        if (this.timeB <= 9) {
            placarB  = `00${this.timeB}`
            
        }
        if (this.timeB > 9) {
            placarB  = `0${this.timeB}`
           
        }
        if (this.timeB > 99) {
            placarB  = `${this.timeB}`
       
        }
        if(this.timeB > 999){
            this.timeB = 999
            placarB = `${this.timeB}`
            var erro = "Não pode ser acima de 999"
            return erro;
        }
        
        return `${placarA}:${placarB}`
    }
}