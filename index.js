//input value
const first_Class_Value = document.getElementById("firstClassValue");
const economy_Value = document.getElementById("economyValue");

// called function ------  increment and decrement
function firstClass_and_economy_update(increaseDecrease, inputValue) {
  const countNumber = parseInt(inputValue.value);
  if (increaseDecrease == true) {
    inputValue.value = countNumber + 1;
  } else if (increaseDecrease == false && countNumber > 0) {
    inputValue.value = countNumber - 1;
  }
  calculateTotal();
}
// called  function ---  total calculator
function calculateTotal() {
  const first_Class_ValueNumber = parseInt(first_Class_Value.value);
  const economy_ValueNumber = parseInt(economy_Value.value);
  //subtotal
  const subTotal = first_Class_ValueNumber * 150 + economy_ValueNumber * 100;
  document.getElementById("subtotalValue").innerText = "$" + subTotal;
  // charge Vat
  const vatTax = subTotal * 0.1;
  document.getElementById("vatCharge").innerText = "$" + vatTax;
  //grand total
  const total = subTotal + vatTax;
  document.getElementById("grandTotal").innerText = "$" + total;
}
//notification show
function notificationShow() {
  callNotification("alertContainer", "1");
  const first_Class_ValueNumber = parseInt(first_Class_Value.value);
  const economy_ValueNumber = parseInt(economy_Value.value);
  document.getElementById("firstClass").innerText = first_Class_ValueNumber;
  document.getElementById("economy").innerText = economy_ValueNumber;
  const total_Or_Vat = first_Class_ValueNumber * 150 + economy_ValueNumber * 100;
  const vatTax = total_Or_Vat * 0.1;
  const total = total_Or_Vat + vatTax;
  document.getElementById("totalInNotification").innerText = total;
}
//notification show
function notificationHide() {
  callNotification("alertContainer", "0");
}
//function called in notification function
function callNotification(id, opacitySize) {
  document.getElementById(id).style.opacity = opacitySize;
}
