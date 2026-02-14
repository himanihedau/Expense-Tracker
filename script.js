const descriptionInput=document.querySelector("#description");
const amountInput=document.querySelector("#amount");
const btn=document.querySelector(".btn");
const totalInput=document.querySelector("#total");
const listInput=document.querySelector("#expense-list");

let expenses=[];

btn.addEventListener("click", addExpense);


function addExpense(){
    const description=descriptionInput.value;
    const amount=Number(amountInput.value);

    if(description==="" || amount===0){
        alert("Add valid ddetails");
        return;
    }

    const newExpense ={
        id:Date.now(),
        description:description,
        amount:amount
    };

    expenses.push(newExpense);
   renderExpenses();
   descriptionInput.value = "";
   amountInput.value = "";

}

function renderExpenses() {
    // 1️⃣ Clear existing list
    listInput.innerHTML = "";

    // 2️⃣ Loop through expenses array
    expenses.forEach(function (expense) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${expense.description} - ₹${expense.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${expense.id})">
                X
            </button>
        `;

        listInput.appendChild(li);
    });

    // 3️⃣ Calculate total
    const total = expenses.reduce(function (acc, expense) {
        return acc + expense.amount;
    }, 0);
    totalInput.textContent = total;
}
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addExpense();
    }
});
