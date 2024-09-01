import { LightningElement,api } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    @api empDetail = {
        empName:"John",
        empAddress:"TX"
    }

    constructor(){
        super();
        console.log('Child Contructor is called First');
    }

    connectedCallback(){
        console.log('Child Connectedcallback is called');
    }

    renderedCallback(){
        console.log('Child renderedCallback is called');
    }

    disconnectedCallback(){
        console.log('Child Disconnectedcallback is called');
    }

}