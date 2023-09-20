export class Juego {

    constructor(userNumber){
        this.randomNumber = Math.floor(Math.random() * 11);
        this.userNumber = userNumber;
    }

    getUserNumber(){
        return this.userNumber;
    }
    getRandomNumber(){
        return this.randomNumber;
    }

    checkNumber(){
        if(this.randomNumber < this.userNumber){
            return "Menos!!!!!";
        }else if(this.randomNumber > this.userNumber){
            return "Más!!!!!"
        }else{
            return "Felicidades Ramonchu está feliz!!!!"
        }
    }
}
