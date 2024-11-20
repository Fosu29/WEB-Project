
function printInfo() {
    const jobTitle = document.getElementById('jobTitle').value;
    const hours = parseFloat(document.getElementById('hours').value);
    const pay = parseFloat(document.getElementById('pay').value);
    const tax = parseFloat(document.getElementById('tax').value) / 100;
    const ni = parseFloat(document.getElementById('ni').value) / 100;

    if (!jobTitle || !hours || !pay || isNaN(tax) || isNaN(ni)) {
        document.getElementById('info').innerText = 'Please fill in all the fields correctly.';
        return;
    }

    const grossPay = hours * pay;
    const deductions = grossPay * (tax + ni);
    const netPay = grossPay - deductions;

    document.getElementById('info').innerText = 
        `Job Title: ${jobTitle}\nNet Pay: $${netPay.toFixed(2)}`; 
    }
    

