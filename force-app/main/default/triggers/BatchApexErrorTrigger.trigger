trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
	 list<BatchLeadConvertErrors__c> leadConvertErrorList = new list<BatchLeadConvertErrors__c>();
for (BatchApexErrorEvent e : trigger.new) {
leadConvertErrorList.add(new BatchLeadConvertErrors__c(AsyncApexJobId__c=e.AsyncApexJobId,Records__c=e.JobScope,StackTrace__c=e.StackTrace));
}
system.debug('*****leadConvertErrorList ***'+leadConvertErrorList);
if (leadConvertErrorList.size() > 0 ) {
Insert leadConvertErrorList;
}
}