import { LightningElement, api, track, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";

const FIELDS = [ "Account.AccountName__c","Account.Phone", "Account.Website", "Account.Email__c", "Account.Startdate__c"];

export default class Meralwc extends LightningElement {

  @api recordId;

  @wire(getRecord, { recordId: "$recordId", fields: FIELDS })
  account;
  get accountName() {
    return this.account?.data?.fields?.AccountName__c?.value || '';
}

get phone() {
    return this.account?.data?.fields?.Phone?.value || '';
}

get website() {
    return this.account?.data?.fields?.Website?.value || '';
}

get email() {
    return this.account?.data?.fields?.Email__c?.value || '';
}

get startDate() {
    return this.account?.data?.fields?.Startdate__c?.value || '';
}

}