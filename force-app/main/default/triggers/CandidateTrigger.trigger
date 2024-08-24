trigger CandidateTrigger on Candidate__c(before insert, before update, before delete,
                                         after insert, after update, after delete, after undelete){
       if(trigger.isInsert)                                      
			TriggerHandlerCandiate.BeforeCreate(Trigger.new,Trigger.newMap);   
	   if(trigger.isUpdate)	                                             
            TriggerHandlerCandiate.AfterUpdate(Trigger.new,Trigger.old,Trigger.newMap,Trigger.OldMap);                                                
}