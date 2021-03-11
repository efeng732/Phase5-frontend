import {useState, useEffect} from "react"
import{Item, Button, Card} from "semantic-ui-react"

function ExpenseCard({important, expense, expenses, deleteExpense}) {

    const { id, month, category, price, description} = expense 

    function handleDeleteExpense(e){
        // console.log(e.target.value)

        const updatedExpensesArray = important.filter((ex) => ex.id != e.target.value)
        fetch(`http://localhost:4000/expenses/${e.target.value}` , {
            method: "DELETE"
        })
        deleteExpense(updatedExpensesArray)

    }

  
    return (
        
        <Card fluid color="black">
            <Card.Content>
                <Card.Description><strong>Month: </strong> {month}</Card.Description>
                <Card.Description><strong>Category: </strong> {category}</Card.Description>
                <Card.Description><strong>Price: </strong> ${price}</Card.Description>
                <Card.Description><strong>Description: </strong> {description}</Card.Description>
                <br></br>
                <Button color="red" value={id} onClick={handleDeleteExpense}>Delete this expense </Button>
            </Card.Content>
        </Card>
        
    )
}

export default ExpenseCard;