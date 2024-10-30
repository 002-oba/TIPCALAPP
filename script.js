document.addEventListener('DOMContentLoaded', () => {
    const billInput = document.getElementById('bill');
    const peopleInput = document.getElementById('people');
    const customTipInput = document.getElementById('custom-tip');
    const tipButtons = document.querySelectorAll('.tip-btn');
    const tipAmountDisplay = document.getElementById('tip-amount');
    const totalAmountDisplay = document.getElementById('total-amount');
    const resetButton = document.getElementById('reset');
    const errorMessage = document.getElementById('error-message');
  
    let tipPercentage = 0;
  
    // Function to calculate the tip and total per person
    function calculateTip() {
      const bill = parseFloat(billInput.value);
      const people = parseInt(peopleInput.value);
  
      if (people <= 0) {
        errorMessage.style.display = 'block';
        return;
      } else {
        errorMessage.style.display = 'none';
      }
  
      const tipAmount = (bill * tipPercentage) / 100 / people;
      const totalAmount = (bill + bill * (tipPercentage / 100)) / people;
  
      tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
      totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
    }
  
    // Event listeners for tip buttons
    tipButtons.forEach(button => {
      button.addEventListener('click', () => {
        tipPercentage = parseFloat(button.dataset.tip);
        customTipInput.value = ''; // Clear custom tip
        calculateTip();
      });
    });
  
    // Event listener for custom tip input
    customTipInput.addEventListener('input', () => {
      tipPercentage = parseFloat(customTipInput.value) || 0;
      calculateTip();
    });
  
    // Event listeners for inputs
    billInput.addEventListener('input', calculateTip);
    peopleInput.addEventListener('input', calculateTip);
  
    // Reset button
    resetButton.addEventListener('click', () => {
      billInput.value = '';
      peopleInput.value = '';
      customTipInput.value = '';
      tipAmountDisplay.textContent = '$0.00';
      totalAmountDisplay.textContent = '$0.00';
      errorMessage.style.display = 'none';
    });
  });
  