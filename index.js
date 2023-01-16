class Persona {
    nombre= null;
    apellido= null;
    año_nacimineto= null;
    curp=  null;
    rfc= null;
    año_actual = 2023;
    constructor( name, lastname, f_n, crp,rfece){
        this.nombre= name;
        this.apellido= lastname;
        this.año_nacimineto= f_n;
        this.curp= crp;
        this.rfc= rfece;
    }
    mostrarrfc = function(){
        return "Tu RFC es :" + this.rfc
    }
        genero = function(){
            Persona.curp.split("");
            let h ="H";
            let m = "M";

            for(i = 9; i < 11; i++){
                if(h == Persona.curp[i]){
                    
                return "Hombre";
                }
             else {
                if(m == Persona.curp[i])
                return "Mujer";
            }
    

        }
        edad = function(){
            return "Tienes una edad de :" + this.res;
            
        }
        res = this.f_nacimineto - this.año_actual;
    }
}
