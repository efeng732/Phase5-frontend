import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function May({mayGoals, mayExpenses}){
    let mayFood = 0;
    let mayAuto = 0;
    let mayPersonal = 0;
    let mayHealth = 0;
    let mayHome = 0;
    let mayBills = 0;
    let mayTotal = 0;

    let mayGoalFood=0;
    let mayGoalAuto = 0;
    let mayGoalPersonal =0;
    let mayGoalHealth = 0;
    let mayGoalHome = 0;
    let mayGoalBills = 0;
    let mayGoalTotal = 0;
    

    for(let i = 0; i <mayExpenses.length; i++) {
        mayTotal += parseFloat(mayExpenses[i].price)
        if(mayExpenses[i].category === "Food") {
            mayFood += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Auto") {
            mayAuto += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Personal") {
            mayPersonal += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Health") {
            mayHealth += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Home") {
            mayHome += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Bills") {
            mayBills += parseFloat(mayExpenses[i].price)
        }

    }

    for (let j = 0; j <mayGoals.length; j++) {
        if(mayGoals[j].category === "Food") {
            mayGoalFood += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Auto") {
            mayGoalAuto += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Personal") {
            mayGoalPersonal += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Health") {
            mayGoalHealth += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Home") {
            mayGoalHome += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Bills") {
            mayGoalBills += parseFloat(mayGoals[j].budget)
        }

        else if(mayGoals[j].category ==="All") {
            mayGoalTotal += parseFloat(mayGoals[j].budget)
        }

        
    }



    const [mayData, setmayData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [mayFood, mayAuto, mayPersonal, mayHealth, mayHome, mayBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            may
            <Pie 
            data={{
                labels: mayData.labels,
                datasets: mayData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${mayFood}, percentage of total: {parseFloat((mayFood/mayTotal*100).toFixed(2))} %, Goal: {mayGoalFood > 0? mayGoalFood : "Did not set a goal for this month"}</p>
            {mayGoalFood > 0?  <p>{(mayGoalFood > mayFood) ? `You reached your goal this month, going under by a total of ${mayGoalFood - mayFood}` : `You failed to reach your goal this month, going over by a total of ${mayFood-mayGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${mayAuto}, percentage of total: {parseFloat((mayAuto/mayTotal*100).toFixed(2))} % , Goal: {mayGoalAuto > 0? mayGoalAuto : "Did not set a goal for this month"} </p>
            {mayGoalAuto > 0?  <p>{(mayGoalAuto > mayAuto) ? `You reached your goal this month, going under by a total of ${mayGoalAuto - mayAuto}` : `You failed to reach your goal this month, going over by a total of ${mayAuto-mayGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${mayPersonal}, percentage of total: {parseFloat((mayPersonal/mayTotal*100).toFixed(2))} %, Goal: {mayGoalPersonal> 0? mayGoalPersonal : "Did not set a goal for this month"}</p>
            {mayGoalPersonal > 0?  <p>{(mayGoalPersonal > mayPersonal) ? `You reached your goal this month, going under by a total of ${mayGoalPersonal - mayPersonal}` : `You failed to reach your goal this month, going over by a total of ${mayPersonal-mayGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${mayHealth}, percentage of total: {parseFloat((mayHealth/mayTotal*100).toFixed(2))} % , Goal: {mayGoalHealth > 0? mayGoalHealth : "Did not set a goal for this month"}</p>
             {mayGoalHealth > 0?  <p>{(mayGoalHealth > mayHealth) ? `You reached your goal this month, going under by a total of ${mayGoalHealth - mayHealth}` : `You failed to reach your goal this month, going over by a total of ${mayHealth-mayGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${mayHome}, percentage of total: {parseFloat((mayHome/mayTotal*100).toFixed(2))} %, Goal: {mayGoalHome > 0? mayGoalHome : "Did not set a goal for this month"}</p>
            {mayGoalHome > 0?  <p>{(mayGoalHome > mayHome) ? `You reached your goal this month, going under by a total of ${mayGoalHome - mayHome}` : `You failed to reach your goal this month, going over by a total of ${mayHome-mayGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${mayBills}, percentage of total: {parseFloat((mayBills/mayTotal*100).toFixed(2))} %, Goal: {mayGoalBills > 0? mayGoalBills : "Did not set a goal for this month"}</p>
            {mayGoalBills > 0?  <p>{(mayGoalBills > mayBills) ? `You reached your goal this month, going under by a total of ${mayGoalBills - mayBills}` : `You failed to reach your goal this month, going over by a total of ${mayBills-mayGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${mayTotal}, Goal: {mayGoalTotal > 0? mayGoalTotal : "Did not set a goal for this month"}</p>
            {mayGoalTotal > 0?  <p>{(mayGoalTotal > mayTotal) ? `You reached your goal this month, going under by a total of ${mayGoalTotal - mayTotal}` : `You failed to reach your goal this month, going over by a total of ${mayTotal-mayGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default May