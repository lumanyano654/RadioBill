function radioBill() {

    var totalCalls = 0;
    var totalSms = 0;
    var totalCost = 0;

  function theBillTotal(billItemInserted) {

    if (billItemInserted === "call"){
        totalCalls += 2.75;
    }

    else if (billItemInserted === "sms"){
        totalSms += 0.85;
    }
  }

  function TotalCalls(){
      return totalCalls;

  }

  function TotalSms(){
      return totalSms;
  }

  function theOverallTotal(){
      return totalCost = totalCalls + totalSms   

  }
   
  function CriticalLevel() {
      return 50;
  }

  function WarningLevel() {
    return 30;
}

  function totalClassName(){

    if (theOverallTotal() >= CriticalLevel()) {
        return "danger"
    }

    if (theOverallTotal() >= WarningLevel()) {
        return "warning"
    }
}

  return {
      theBillTotal,
      TotalCalls,
      TotalSms,
      theOverallTotal,
      totalClassName
  }

}