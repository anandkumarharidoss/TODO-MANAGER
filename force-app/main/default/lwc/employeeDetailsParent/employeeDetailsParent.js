import { LightningElement } from 'lwc';

export default class EmployeeDetailsParent extends LightningElement {
    empDetails=[
        {
            empName:'Steve',empAddress:'US'
        },
        {
            empName:'Roggers',empAddress:'CN'
        },
        {
            empName:'Amar',empAddress:'IN'
        },
        {
            empName:'Chi',empAddress:'CH'
        },
        {
            empName:'Akbar',empAddress:'PK'
        },
    ]

    constructor(){
        super();
        console.log('Parent Contructor is called First');
    }

    connectedCallback(){
        console.log('Parent Connectedcallback is called');
    }

    renderedCallback(){
        console.log('Parent renderedCallback is called');
    }

    disconnectedCallback(){
        console.log('Parent Disconnectedcallback is called');
    }
}