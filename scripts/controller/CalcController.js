class CalcController {

    constructor(){

        // atributos
        this._locale = "pt-BR"
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        // temos que colocar os métodos de inicialização aqui também
        this.initialize();
    }



    // método que vai iniciar quando entrar na página calculadora 
    initialize(){
        
        // temos que já inicializar com a data e hora, para que apareça assim que entramos na aplicação
        this.setDisplayDateTime();


        // intervalo para recarregar, para que a hora funcione corretamente.
        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000); // milesegundos
    }

    // método para pegar a data e hora atual
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            // personalizar data
            day: "2-digit",
            month: "long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        this._dateEl.innerHTML;
    }

    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    //Display
    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;
    }
    // Data
    get currentDate(){

        return new Date();
    }

    set currentDate(data){
        this._currentDate = data;
    }

    
}