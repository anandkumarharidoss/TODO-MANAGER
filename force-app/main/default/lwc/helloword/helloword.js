import { LightningElement } from 'lwc';
export default class Helloword extends LightningElement {

    firstname = '';
    lastname = '';

    handleChange(event){
        const field = event.target.name;
        
        if(field === 'firstname'){
            this.firstname = event.target.value;
        }else if(field ==='lastname'){
            this.lastname = event.target.value;
        }    
    }

    get concatname(){
        return this.firstname + ' ' + this.lastname;
    }
}