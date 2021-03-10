import {useState, useEffect} from "react"
import{Item, Card, Button} from "semantic-ui-react"

function GoalCard({goal, goals, deleteGoal, editGoal}) {

    const [showUpdate, setShowUpdate] = useState(false)

    const[goalMonthUpdate, setGoalMonthUpdate] = useState("Jan")
    const[goalCategoryUpdate, setGoalCategoryUpdate] = useState("All")
    const[goalBudgetUpdate, setGoalBudgetUpdate] = useState(0)
    const[goalId, setGoalId] = useState(0)


   function handleDeleteGoal(e){
        const updatedGoalsArray = goals.filter((g) => g.id != e.target.value)
        fetch(`http://localhost:4000/goals/${e.target.value}` , {
            method: "DELETE"
        })
        deleteGoal(updatedGoalsArray)

    }

    function toggleUpdateForm(e) {
        setShowUpdate( !showUpdate)
        
    }

    function handleChange(e) {
        setGoalMonthUpdate(e.target.value)
       }
     
       function handleCategoryChange(e) {
         setGoalCategoryUpdate(e.target.value)
       }

    function handleUpdateGoal(e) {
        e.preventDefault()
        const updatedGoal = {
            // user_id: 1, 
            month: goalMonthUpdate, 
            category: goalCategoryUpdate,
            budget: parseFloat(goalBudgetUpdate)
        }
        fetch(`http://localhost:4000/goals/${goalId}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updatedGoal)
        })
        .then(res => res.json())
        .then(updatedGoalObj => {
            editGoal(updatedGoalObj)
        })
    }

    const { id, month, category, budget} = goal 
    return (

            <Card fluid color="black">

        
            {/* <ul> */} 
            <Card.Content>
                <Card.Description>
                <strong>Month: </strong> {month} </Card.Description>
                <Card.Description> <strong>Category:</strong> {category}</Card.Description>
                <Card.Description><strong>Budget:</strong> {budget}</Card.Description>
                <Card.Description>
                <Button color="red" value={id} onClick={handleDeleteGoal}>Delete this goal </Button>
                <Button color="green"value={id} onClick={ () => {toggleUpdateForm(); setGoalId(id)}}>Toggle to update</Button>
                </Card.Description>
                
                <br></br>
                {showUpdate ? 
                <form onSubmit={handleUpdateGoal}>
                    <h3>Update your goal!</h3>
                    
                    <label htmlFor="month"> <strong>Month</strong></label>
                    <br></br>

        <select onChange={handleChange} >
          <option value="Jan"> Jan </option>
          <option value="Feb">Feb </option>
          <option value="Mar">Mar </option>
          <option value="Apr">Apr </option>
          <option value="May">May </option>
          <option value="Jun">Jun </option>
          <option value="Jul">Jul </option>
          <option value="Aug">Aug </option>
          <option value="Sep">Sep </option>
          <option value="Oct">Oct </option>
          <option value="Nov">Nov </option>
          <option value="Dec">Dec </option>
        </select> <br></br>

        <label htmlFor="category"> <strong>Category </strong></label> <br></br>
        <select onChange={handleCategoryChange} >
          <option value="All">All </option>
          <option value="Food">Food </option>
          <option value="Auto">Auto</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="Health">Health</option>
          <option value="Bills">Bills</option>
        </select>
        <br></br>
        
        <label htmlFor="budget"><strong>Budget </strong></label> <br></br>
        <input className="show"
          type="number"
          name="budget"
          value={goalBudgetUpdate}
          onChange={(e) => setGoalBudgetUpdate(e.target.value)} />
          <br></br>

          <label htmlFor="id"></label>
          <input className= "idNum" type="number" value={id} hidden/>
          
          <br></br>

          <Button animated="fade" type='submit'  color="green">
        <Button.Content visible>Update Goal </Button.Content> 
        <Button.Content hidden>Are you sure?</Button.Content>
        </Button>

                </form>
                 : null}
        
            {/* </ul> */}
            </Card.Content>
        
        </Card>
        
        
    
    )
}

export default GoalCard;