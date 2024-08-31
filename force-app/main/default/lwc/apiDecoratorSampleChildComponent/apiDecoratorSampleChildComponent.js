import { LightningElement, api } from 'lwc';

export default class ApiDecoratorSampleChildComponent extends LightningElement {
    @api message;
}