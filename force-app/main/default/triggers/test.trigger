trigger test on Lead (before update) {
    for (Lead ld: trigger.new) {
        if (ld.Email != trigger.oldMap.get(ld.id).Email) {
            ld.Prior_Email__c = trigger.oldMap.get(ld.id).Email;
            update ld;
        }
    }
}