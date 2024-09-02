import { LightningElement,track,api } from 'lwc';

export default class ChildComp extends LightningElement {
    @track message;
    txt;

    @api 
    changeMessage(strString){
        this.message = strString.toUpperCase();
    }

    @api
    changeContent(strVal){
        this.txt = strVal.toLowerCase();
    }
}