import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Dec({decGoals, decExpenses}){
    let decFood = 0;
    let decAuto = 0;
    let decPersonal = 0;
    let decHealth = 0;
    let decHome = 0;
    let decBills = 0;
    let decTotal = 0;

    let decGoalFood=0;
    let decGoalAuto = 0;
    let decGoalPersonal =0;
    let decGoalHealth = 0;
    let decGoalHome = 0;
    let decGoalBills = 0;
    let decGoalTotal = 0;
    

    for(let i = 0; i <decExpenses.length; i++) {
        decTotal += parseFloat(decExpenses[i].price)
        if(decExpenses[i].category === "Food") {
            decFood += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Auto") {
            decAuto += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Personal") {
            decPersonal += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Health") {
            decHealth += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Home") {
            decHome += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Bills") {
            decBills += parseFloat(decExpenses[i].price)
        }

    }

    for (let j = 0; j <decGoals.length; j++) {
        if(decGoals[j].category === "Food") {
            decGoalFood += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Auto") {
            decGoalAuto += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Personal") {
            decGoalPersonal += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Health") {
            decGoalHealth += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Home") {
            decGoalHome += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Bills") {
            decGoalBills += parseFloat(decGoals[j].budget)
        }

        else if(decGoals[j].category ==="All") {
            decGoalTotal += parseFloat(decGoals[j].budget)
        }

        
    }



    const [decData, setdecData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [decFood, decAuto, decPersonal, decHealth, decHome, decBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            dec
            <Pie 
            data={{
                labels: decData.labels,
                datasets: decData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${decFood}, percentage of total: {parseFloat((decFood/decTotal*100).toFixed(2))} %, Goal: {decGoalFood > 0? decGoalFood : "Did not set a goal for this month"}</p>
            {decGoalFood > 0?  <p>{(decGoalFood > decFood) ? `You reached your goal this month, going under by a total of ${decGoalFood - decFood}` : `You failed to reach your goal this month, going over by a total of ${decFood-decGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${decAuto}, percentage of total: {parseFloat((decAuto/decTotal*100).toFixed(2))} % , Goal: {decGoalAuto > 0? decGoalAuto : "Did not set a goal for this month"} </p>
            {decGoalAuto > 0?  <p>{(decGoalAuto > decAuto) ? `You reached your goal this month, going under by a total of ${decGoalAuto - decAuto}` : `You failed to reach your goal this month, going over by a total of ${decAuto-decGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${decPersonal}, percentage of total: {parseFloat((decPersonal/decTotal*100).toFixed(2))} %, Goal: {decGoalPersonal> 0? decGoalPersonal : "Did not set a goal for this month"}</p>
            {decGoalPersonal > 0?  <p>{(decGoalPersonal > decPersonal) ? `You reached your goal this month, going under by a total of ${decGoalPersonal - decPersonal}` : `You failed to reach your goal this month, going over by a total of ${decPersonal-decGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${decHealth}, percentage of total: {parseFloat((decHealth/decTotal*100).toFixed(2))} % , Goal: {decGoalHealth > 0? decGoalHealth : "Did not set a goal for this month"}</p>
             {decGoalHealth > 0?  <p>{(decGoalHealth > decHealth) ? `You reached your goal this month, going under by a total of ${decGoalHealth - decHealth}` : `You failed to reach your goal this month, going over by a total of ${decHealth-decGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${decHome}, percentage of total: {parseFloat((decHome/decTotal*100).toFixed(2))} %, Goal: {decGoalHome > 0? decGoalHome : "Did not set a goal for this month"}</p>
            {decGoalHome > 0?  <p>{(decGoalHome > decHome) ? `You reached your goal this month, going under by a total of ${decGoalHome - decHome}` : `You failed to reach your goal this month, going over by a total of ${decHome-decGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${decBills}, percentage of total: {parseFloat((decBills/decTotal*100).toFixed(2))} %, Goal: {decGoalBills > 0? decGoalBills : "Did not set a goal for this month"}</p>
            {decGoalBills > 0?  <p>{(decGoalBills > decBills) ? `You reached your goal this month, going under by a total of ${decGoalBills - decBills}` : `You failed to reach your goal this month, going over by a total of ${decBills-decGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${decTotal}, Goal: {decGoalTotal > 0? decGoalTotal : "Did not set a goal for this month"}</p>
            {decGoalTotal > 0?  <p>{(decGoalTotal > decTotal) ? `You reached your goal this month, going under by a total of ${decGoalTotal - decTotal}` : `You failed to reach your goal this month, going over by a total of ${decTotal-decGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Dec