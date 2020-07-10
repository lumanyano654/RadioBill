describe("The radio button bill factory functions", function() {
    
    it ("should be able to give call total when 'call' is entered", function() {

        let radioBillFact = radioBill();

        radioBillFact.theBillTotal('call');

        assert.equal(2.75, radioBillFact.theOverallTotal())
        
    })

    it ("should be able to give call total when 'call' is entered four times", function() {

        let radioBillFact = radioBill();

        radioBillFact.TotalCalls ();
        radioBillFact.TotalCalls ();
        radioBillFact.TotalCalls ();
        radioBillFact.TotalCalls ();
        
        
        assert.equal(0, radioBillFact.theOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered", function() {

        let radioBillFact = radioBill();

        radioBillFact.TotalSms ();

        assert.equal(0, radioBillFact.theOverallTotal())
        
    })

    it ("should be able to give sms total when 'sms' is entered more than once", function() {

        let radioBillFact = radioBill();

        radioBillFact.TotalSms ();
        radioBillFact.TotalSms ();
        radioBillFact.TotalSms ();
        radioBillFact.TotalSms ();

        assert.equal(0, radioBillFact.theOverallTotal())
        
    })

    it ("should be able to give totals when 'sms & call' is entered", function() {

        let radioBillFact = radioBill();

        radioBillFact.TotalCalls ();
        radioBillFact.TotalCalls ();
        radioBillFact.TotalSms ();

        assert.equal(0, radioBillFact.theOverallTotal())
        
    })

    describe("The Danger & Warning Level for Radio Button Bill", function() {
        it ("should be able to return class name 'critical' when critical level is reached", function() {
    
            let radioBillFact = radioBill();
    
            radioBillFact.theBillTotal('call');
            radioBillFact.theBillTotal('call');
            radioBillFact.theBillTotal('call');
            radioBillFact.theBillTotal('call');
    
            assert.equal(11, radioBillFact.theOverallTotal())
            assert.equal("critical", radioBillFact.totalClassName())
            
        })

        it ("should be able to return class name 'warning' when danger level is reached", function() {
    
            let radioBillFact = radioBill();
    
            radioBillFact.theBillTotal('call');
            radioBillFact.theBillTotal('call');
    
            assert.equal(5.5, radioBillFact.theOverallTotal())
            assert.equal("warning", radioBillFact.totalClassName())
            
        })

    })

})