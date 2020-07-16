const billItemTypeRadio = document.querySelector(".billItemTypeRadio");
const radioBillAddBtn = document.querySelector(".radioBillAddBtn");
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
// put the dot inside the double qoutes 
const totalTwo = document.querySelector(".totalTwo");


// var callTotal = 0;
// var smsTotal = 0;
// var theTotal = 0;


let radioBillFact = radioBill();




// assert.equal(11, radioBillFact.theOverallTotal())


// have your Total here
function radioBillTotal() {

  var checkedBtn = document.querySelector("input[name='billItemType']:checked");

  var billItem = checkedBtn.value;

  // if (billItemInserted === "call") {
  //   callTotal += 2.75;
  //   // update Total here. eg Total  += 2.75
  // }
  // // it's "else if" not "if else" 
  // else if (billItemInserted === "sms") {
  //   smsTotal += 0.75;
  //   // same thing here 
  // }

  radioBillFact.theBillTotal (billItem);

  // it's toFixed(2) 
  callTotalTwo.innerHTML = radioBillFact.TotalCalls()
   // callTotal.toFixed(2);
  smsTotalTwo.innerHTML = radioBillFact.TotalSms();
  // make it a global variable 
  const theTotal = radioBillFact.theOverallTotal();
  totalTwo.innerHTML = theTotal.toFixed(2);

  radioBillTotalColor();
};
function radioBillTotalColor() {
  // remove the dots - to ("danger")

  totalTwo.classList.remove("danger");
  totalTwo.classList.remove("warning");
  totalTwo.classList.add(radioBillFact.totalClassName());

  // if (theTotal >= 50) {


  // }
  // else if (theTotal >= 30) {

  //   totalTwo.classList.add("warning");
  // }

};

radioBillAddBtn.addEventListener("click", radioBillTotal)


