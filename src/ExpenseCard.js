import {useState, useEffect} from "react"

function ExpenseCard({expense, expenses, deleteExpense}) {

    const { id, month, category, price, description} = expense 

    function handleDeleteExpense(e){
        // console.log(e.target.value)

        const updatedExpensesArray = expenses.filter((ex) => ex.id != e.target.value)
        fetch(`http://localhost:4000/expenses/${e.target.value}` , {
            method: "DELETE"
        })
        deleteExpense(updatedExpensesArray)

    }

  
    return (
        <div>
            <ul>
                <li>Month: {month}</li>
                <li>Category: {category}</li>
                <li>Price: ${price}</li>
                <li>Description: {description}</li>
                <button value={id} onClick={handleDeleteExpense}>Delete this expense </button>
            </ul>
        </div>
    )
}

export default ExpenseCard;