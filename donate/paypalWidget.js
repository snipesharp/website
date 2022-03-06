var enableJsNotifier = document.getElementById('enableJsNotifier');
enableJsNotifier.setAttribute('hidden', 'true');

function initPayPalButton() {
  var description = document.querySelector('#smart-button-container #description');
  var amount = document.querySelector('#smart-button-container #amount');
  var descriptionError = document.querySelector('#smart-button-container #descriptionError');
  var priceError = document.querySelector('#smart-button-container #priceLabelError');
  var invoiceid = document.querySelector('#smart-button-container #invoiceid');
  var invoiceidError = document.querySelector('#smart-button-container #invoiceidError');
  var invoiceidDiv = document.querySelector('#smart-button-container #invoiceidDiv');
  
  var elArr = [description, amount];
  
  if (invoiceidDiv.firstChild.innerHTML.length > 1) {
      invoiceidDiv.style.display = "block";
  }
  
  var purchase_units = [];
  purchase_units[0] = {};
  purchase_units[0].amount = {};
  
  function validate(event) {
      return event.value.length > 0;
  }
  
  paypal.Buttons({
      style: {
      color: 'gold',
      shape: 'pill',
      label: 'paypal',
      layout: 'vertical',
      
      },
  
      onInit: function (data, actions) {
      actions.disable();
  
      if(invoiceidDiv.style.display === "block") {
          elArr.push(invoiceid);
      }
  
      elArr.forEach(function (item) {
          item.addEventListener('keyup', function (event) {
          var result = elArr.every(validate);
          if (result) {
              actions.enable();
          } else {
              actions.disable();
          }
          });
      });
      },
  
      onClick: function () {
      if (description.value.length < 1) {
          descriptionError.style.visibility = "visible";
          descriptionError.style.display = "block";
      } else {
          descriptionError.style.visibility = "hidden";
          descriptionError.style.display = "none";
      }
  
      if (amount.value.length < 1) {
          priceError.style.visibility = "visible";
          priceError.style.display = "block";
      } else {
          priceError.style.visibility = "hidden";
          priceError.style.display = "none";
      }
  
      if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
          invoiceidError.style.visibility = "visible";
      } else {
          invoiceidError.style.visibility = "hidden";
      }
  
      purchase_units[0].description = description.value;
      purchase_units[0].amount.value = amount.value;
  
      if(invoiceid.value !== '') {
          purchase_units[0].invoice_id = invoiceid.value;
      }
      },
  
      createOrder: function (data, actions) {
      return actions.order.create({
          purchase_units: purchase_units,
      });
      },
  
      onApprove: function (data, actions) {
      return actions.order.capture().then(function (orderData) {
  
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
  
          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your donation, make sure to join our Discord to receive your reward!</h3>';
  
          // Or go to another URL:  actions.redirect('thank_you.html');
          
      });
      },
  
      onError: function (err) {
      console.log(err);
      }
  }).render('#paypal-button-container');
  }
  initPayPalButton();