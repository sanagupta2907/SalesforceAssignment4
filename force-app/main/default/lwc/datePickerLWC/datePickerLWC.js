import { LightningElement, api } from 'lwc';

export default class DatePickerLWC extends LightningElement {
    @api selectedDate;

    handleDateChange(event) {
        this.selectedDate = event.detail.value;
    }
}
