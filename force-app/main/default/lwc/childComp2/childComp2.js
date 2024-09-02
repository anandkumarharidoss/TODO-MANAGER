import { LightningElement } from 'lwc';

export default class ChildComp2 extends LightningElement {

    handleChange(event){
        const name = event.target.value;
        const selectEvent = new CustomEvent('mycustomevent',{detail:name,bubbles:true});
        this.dispatchEvent(selectEvent);

        const selectEvent2 = new CustomEvent('myevent2',{detail:name});
        this.dispatchEvent(selectEvent2);
    }

}