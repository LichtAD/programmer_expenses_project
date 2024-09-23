let count = 1;

const calculateExpensesButton = document.getElementById('calculate_expenses');
calculateExpensesButton.addEventListener('click', function(){
    // console.log('kaj kre');
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    // console.table({income, software, courses, internet});

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    // console.log({totalExpenses, balance});

    if(totalExpenses > income){
        return alert('Too Much Spent');
    }

    if(totalExpenses > 0 && balance > 0) {
        document.getElementById('hidden_results').classList.remove('hidden');
    }

    document.getElementById('total_expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);


    // ! add history
    const historyItem = document.createElement('div');
    historyItem.classList.add('bg-white', 'p-4', 'rounded-md', 'border-2');

    historyItem.innerHTML = `
        <p class="text-xs text-gray-500">Serial: ${count}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
        <p class="text-xs text-gray-500">${new Date().toLocaleTimeString()}</p>
        <p class="text-xs text-gray-500">Income: ${income.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Expenses: ${totalExpenses.toFixed(2)}</p>
        <p class="text-xs text-gray-500">Balance: ${balance.toFixed(2)}</p>
    `
    count++;

    const historyContainer = document.getElementById('history_list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});




document.getElementById('calculate_savings').addEventListener('click', function(){
    const savings = parseFloat(document.getElementById('savings').value);

    if(isNaN(savings)){
        return alert('Please enter savings amount');
    }

    // console.log(savings);
    // console.log(balance.innerText);
    const balanceNumber = parseFloat(balance.innerText);
    // console.log(balanceNumber);

    if(balanceNumber == '00'){
        return alert('Please Calculate Expenses First');
    }

    const savingsAmount = balanceNumber * (savings / 100);
    // console.log(savingsAmount);

    document.getElementById('savings_amount').innerText = savingsAmount.toFixed(2);

    const remainingBalance = balanceNumber - savingsAmount;
    document.getElementById('remaining_balance').innerText = remainingBalance.toFixed(2);
});




document.getElementById('btn_history').addEventListener('click', function (){

    document.getElementById('btn_history').classList.add('shadow-lg', 'bg-purple-400', 'text-white');
    document.getElementById('btn_assistant').classList.remove('shadow-lg', 'bg-purple-400', 'text-white');

    document.getElementById('form_part').classList.add('hidden');
    document.getElementById('hidden_results').classList.remove('hidden');
    document.getElementById('hidden_history').classList.remove('hidden');
});




document.getElementById('btn_assistant').addEventListener('click', function (){

    document.getElementById('btn_history').classList.remove('shadow-lg', 'bg-purple-400', 'text-white');
    document.getElementById('btn_assistant').classList.add('shadow-lg', 'bg-purple-400', 'text-white');

    document.getElementById('form_part').classList.remove('hidden');
    document.getElementById('hidden_history').classList.add('hidden');

    const balanceNumber = parseFloat(balance.innerText);
    if(balanceNumber == '00'){
        document.getElementById('hidden_results').classList.add('hidden');
    }
});