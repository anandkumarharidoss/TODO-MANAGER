import { LightningElement } from 'lwc';

export default class FirstElement extends LightningElement {
    firstname;
    lastname;
    fullname;
    isflag = false;

    changeFirstNameHandler(event){
       this.firstname = event.target.value;
    }

    changeLastNameHandler(event){
        this.lastname = event.target.value;
     }

     changeSubmitHandler(event){
        this.fullname = this.firstname + this.lastname;
        if(this.fullname == 'anandkumarharidoss'){
         this.isflag = true;
        }
     }
}