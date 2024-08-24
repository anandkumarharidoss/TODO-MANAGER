trigger AccTrigger on Account (after insert,after update) {
    
   // if(trigger.isInsert && trigger.isAfter){ 
     //   AccountTriggerHelper.afterContact(trigger.newMap,trigger.new);
   // }
    
    if(trigger.isUpdate && trigger.isAfter){
        AccountTriggerHelper.afterContactCompare(trigger.newMap,trigger.new,trigger.old,trigger.oldMap);
    }
    
}