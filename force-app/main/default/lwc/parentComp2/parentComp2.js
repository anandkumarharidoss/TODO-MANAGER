import { LightningElement, track } from 'lwc';

export default class ParentComp2 extends LightningElement {
    @track msg;

    constructor(){
        super();
        this.template.addEventListener('mycustomevent',this.handleCustomEvent.bind(this));
        this.template.addEventListener('myevent2',this.handleCustomEvent2.bind(this));
    }

    handleCustomEvent(event){
        this.msg = event.detail;
    }
    handleCustomEvent2(event){
        this.msg = event.detail;
    }
}