let paymentMethods = document.getElementById('cards-types');
let cardTypes = document.getElementsByClassName('mode-of-pay')[0];
cardTypes.addEventListener('click', (e)=> {  
  let typesOfPay = "";
  console.log(e.target.value)
  if (e.target.value === 'credit-card') {
    typesOfPay = 
    `
    <div class="cards-type">
        <label for="name-on-card">Name on card</label></br>
        <input type="text" name="name-on-card" class="card-pay" id="name-on-card" required>
        <p class="name-card-title">Full name as displayed on card</p>
    </div>
    <div class="cards-type">
        <label for="card-type-number">Credit Card number</label></br>
        <input type="number" name="card-type-number" class="card-pay" id="card-type-number" required>
    </div>
    <div class="cards-type">
        <label for="expire">Expiration</label></br>
        <input type="month" name="expire" class="card-pay" id="expire">
    </div>
    <div class="cards-type">
        <label for="cvv-number">CVV</label></br>
        <input type="password" name="cvv-number" class="card-pay" id="cvv-number" required>
    </div>
    `
  } 
  else if (e.target.value === 'debit-card') {
    typesOfPay = 
    `
    <div class="cards-type">
        <label for="name-on-card">Name on card</label></br>
        <input type="text" name="name-on-card" class="card-pay" id="name-on-card" required>
        <p class="name-card-title">Full name as displayed on card</p>
    </div>
    <div class="cards-type">
        <label for="card-type-number">Debit Card number</label></br>
        <input type="number" name="card-type-number" class="card-pay" id="card-type-number" required>
    </div>
    <div class="cards-type">
        <label for="expire">Expiration</label></br>
        <input type="month" name="expire" class="card-pay" id="expire" required>
    </div>
    <div class="cards-type">
        <label for="cvv-number">CVV</label></br>
        <input type="password" name="cvv-number" class="card-pay" id="cvv-number" required>
    </div>
    `
  } else {

    typesOfPay = 
    `
    <div class="cards-type">
        <label for="upiid">UPI ID</label></br>
        <input type="text" id="upiid" name="upiid" required>
    </div>
    `
  }

  paymentMethods.innerHTML = typesOfPay;
})


