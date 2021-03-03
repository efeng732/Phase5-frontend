import {useState, useEffect} from "react"

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
        <div>
            <ul>
                <li>Month: {month}</li>
                <li>Category: {category}</li>
                <li>Budget: {budget}</li>
                <button value={id} onClick={handleDeleteGoal}>Delete this goal </button>
                <button value={id} onClick={ () => {toggleUpdateForm(); setGoalId(id)}}>Toggle to update</button>
                <br></br>
                {showUpdate ? 
                <form onSubmit={handleUpdateGoal}>
                    <h3>Update your goal!</h3>
                    
                    <label htmlFor="month"> <strong>Month: </strong></label>

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
        </select>

        <label htmlFor="category"> <strong>Category: </strong></label>
        <select onChange={handleCategoryChange} >
          <option value="All">All </option>
          <option value="Food">Food </option>
          <option value="Auto">Auto</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="Health">Health</option>
        </select>
        
        <label htmlFor="budget"><strong>Budget: </strong></label>
        <input 
          type="number"
          name="budget"
          value={goalBudgetUpdate}
          onChange={(e) => setGoalBudgetUpdate(e.target.value)} />

          <label htmlFor="id"></label>
          <input className= "idNum" type="number" value={id} hidden="true"/>
          

        <input type="submit" value="Submit" />

                </form>
                 : null}

            </ul>
        </div>
    )
}

export default GoalCard;