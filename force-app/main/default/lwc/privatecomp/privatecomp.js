import { LightningElement,track } from 'lwc';

export default class Privatecomp extends LightningElement {
    @track  reactivePrivateProperty;
    nonReactivePrivateProperty;
    changeHandler1(event){
        this.reactivePrivateProperty = event.target.value;
    }
    changeHandler2(event){
        this.nonReactivePrivateProperty = event.target.value;
    }
}