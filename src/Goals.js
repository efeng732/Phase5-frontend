import {useState, useEffect} from "react";
import GoalCard from './GoalCard.js'
import {Card} from "semantic-ui-react"

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
           <Card.Group itemsPerRow={3} >{goalComponents} </Card.Group>
        </div>

        )
}

export default Goals;