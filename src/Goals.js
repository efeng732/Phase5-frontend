import {useState, useEffect} from "react";
import GoalCard from './GoalCard.js'

function Goals ({goals, deleteGoal, editGoal}) {

    const goalComponents = goals.map(goal => {
        return (
            <GoalCard 

            key={goal.id}
            goal={goal}
            goals={goals}
            deleteGoal={deleteGoal}
            editGoal ={editGoal}
            />
        )
    })

    return (

        <div>
            {goalComponents}
        </div>

        )
}

export default Goals;