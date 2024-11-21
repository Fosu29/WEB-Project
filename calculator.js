
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

    const grossPay = hours * pay; //earned per week
    const deductions = (grossPay * tax) + (grossPay * ni); //per month
    const netPayMonth = (grossPay *4)- deductions;
    const netPayYear = netPayMonth * 12
    const netPayWeek = netPayMonth /4

    document.getElementById('info').innerText += 
        `\n \n Job Title: ${jobTitle}
        \n Gross Pay per Week: $${grossPay.toFixed(2)} 
        \n Number of working hours per week: ${hours}
        \n Tax Rate of ${tax*100}% 
        \n NI Rate of ${ni * 100}%
        \n Earning a net pay of
        \n $${netPayWeek.toFixed(2)} per week
        \n $${netPayMonth.toFixed(2)} per month
        \n $${netPayYear.toFixed(2)} per year  `; 

}
    

