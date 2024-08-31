import { LightningElement, track, api } from 'lwc';

export default class DecoratorSample extends LightningElement {
    @track username ='pr';
    @api publicprop = 'publicprop';
}