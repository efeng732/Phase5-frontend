import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Jul({julGoals, julExpenses}){
    let julFood = 0;
    let julAuto = 0;
    let julPersonal = 0;
    let julHealth = 0;
    let julHome = 0;
    let julBills = 0;
    let julTotal = 0;

    let julGoalFood=0;
    let julGoalAuto = 0;
    let julGoalPersonal =0;
    let julGoalHealth = 0;
    let julGoalHome = 0;
    let julGoalBills = 0;
    let julGoalTotal = 0;
    

    for(let i = 0; i <julExpenses.length; i++) {
        julTotal += parseFloat(julExpenses[i].price)
        if(julExpenses[i].category === "Food") {
            julFood += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Auto") {
            julAuto += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Personal") {
            julPersonal += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Health") {
            julHealth += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Home") {
            julHome += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Bills") {
            julBills += parseFloat(julExpenses[i].price)
        }

    }

    for (let j = 0; j <julGoals.length; j++) {
        if(julGoals[j].category === "Food") {
            julGoalFood += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Auto") {
            julGoalAuto += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Personal") {
            julGoalPersonal += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Health") {
            julGoalHealth += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Home") {
            julGoalHome += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Bills") {
            julGoalBills += parseFloat(julGoals[j].budget)
        }

        else if(julGoals[j].category ==="All") {
            julGoalTotal += parseFloat(julGoals[j].budget)
        }

        
    }



    const [julData, setjulData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [julFood, julAuto, julPersonal, julHealth, julHome, julBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            jul
            <Pie 
            data={{
                labels: julData.labels,
                datasets: julData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${julFood}, percentage of total: {parseFloat((julFood/julTotal*100).toFixed(2))} %, Goal: {julGoalFood > 0? julGoalFood : "Did not set a goal for this month"}</p>
            {julGoalFood > 0?  <p>{(julGoalFood > julFood) ? `You reached your goal this month, going under by a total of ${julGoalFood - julFood}` : `You failed to reach your goal this month, going over by a total of ${julFood-julGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${julAuto}, percentage of total: {parseFloat((julAuto/julTotal*100).toFixed(2))} % , Goal: {julGoalAuto > 0? julGoalAuto : "Did not set a goal for this month"} </p>
            {julGoalAuto > 0?  <p>{(julGoalAuto > julAuto) ? `You reached your goal this month, going under by a total of ${julGoalAuto - julAuto}` : `You failed to reach your goal this month, going over by a total of ${julAuto-julGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${julPersonal}, percentage of total: {parseFloat((julPersonal/julTotal*100).toFixed(2))} %, Goal: {julGoalPersonal> 0? julGoalPersonal : "Did not set a goal for this month"}</p>
            {julGoalPersonal > 0?  <p>{(julGoalPersonal > julPersonal) ? `You reached your goal this month, going under by a total of ${julGoalPersonal - julPersonal}` : `You failed to reach your goal this month, going over by a total of ${julPersonal-julGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${julHealth}, percentage of total: {parseFloat((julHealth/julTotal*100).toFixed(2))} % , Goal: {julGoalHealth > 0? julGoalHealth : "Did not set a goal for this month"}</p>
             {julGoalHealth > 0?  <p>{(julGoalHealth > julHealth) ? `You reached your goal this month, going under by a total of ${julGoalHealth - julHealth}` : `You failed to reach your goal this month, going over by a total of ${julHealth-julGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${julHome}, percentage of total: {parseFloat((julHome/julTotal*100).toFixed(2))} %, Goal: {julGoalHome > 0? julGoalHome : "Did not set a goal for this month"}</p>
            {julGoalHome > 0?  <p>{(julGoalHome > julHome) ? `You reached your goal this month, going under by a total of ${julGoalHome - julHome}` : `You failed to reach your goal this month, going over by a total of ${julHome-julGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${julBills}, percentage of total: {parseFloat((julBills/julTotal*100).toFixed(2))} %, Goal: {julGoalBills > 0? julGoalBills : "Did not set a goal for this month"}</p>
            {julGoalBills > 0?  <p>{(julGoalBills > julBills) ? `You reached your goal this month, going under by a total of ${julGoalBills - julBills}` : `You failed to reach your goal this month, going over by a total of ${julBills-julGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${julTotal}, Goal: {julGoalTotal > 0? julGoalTotal : "Did not set a goal for this month"}</p>
            {julGoalTotal > 0?  <p>{(julGoalTotal > julTotal) ? `You reached your goal this month, going under by a total of ${julGoalTotal - julTotal}` : `You failed to reach your goal this month, going over by a total of ${julTotal-julGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Jul