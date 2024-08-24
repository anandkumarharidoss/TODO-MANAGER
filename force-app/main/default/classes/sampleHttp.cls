public class sampleHttp {
    public void getSqlData() {
        // Instantiate a new http object        
        Http h = new Http();        
        // Instantiate a new HTTP request, specify the method (GET) as well as the endpoint        
        HttpRequest req = new HttpRequest(); 
        String endUrl = 'http://carrotcube-esb-zynx.cloudhub.io/zynx/PlanDefinition';
        req.setEndpoint(endUrl);        
        req.setMethod('GET');        
        // Send the request, and return a response        
       // HttpResponse res = h.send(req);
        String response = '{"summaryList":[{"patient_id":"2", "sf_patient_id":"pati-2"},{"patient_id":"3", "sf_patient_id":"pati-3"}]}';       
        HttpResponse res = h.send(req);       
       //system.debug('@@@debug@@'+res.getBody()); 
        JSON2ApexTickets myClass = JSON2ApexTickets.parse(response); 
        system.debug('@@@debugclass@@'+myClass);  
        
        /* use this loop to insert but not here 
        List<PatientObj> pat = new List<PatientObj>();        
        for(PatientObj patIn: myClass){
            PatientObj a = new PatientObj();
            a.patient_id = patIn.patient_id;
            a.sf_patient_id = patIn.sf_patient_id;
            pat.add(a);
        }
        system.debug('@@pat@@'+pat);
        insert pat; */
        
       /*try {
            resp = http.send(req);
        } catch(System.CalloutException e) {
            System.debug('Callout error: '+ e);
            System.debug(resp.toString());            
        }*/ 
    }
}