import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Feb({febGoals, febExpenses}){
    let febFood = 0;
    let febAuto = 0;
    let febPersonal = 0;
    let febHealth = 0;
    let febHome = 0;
    let febBills = 0;
    let febTotal = 0;

    let febGoalFood=0;
    let febGoalAuto = 0;
    let febGoalPersonal =0;
    let febGoalHealth = 0;
    let febGoalHome = 0;
    let febGoalBills = 0;
    let febGoalTotal = 0;
    

    for(let i = 0; i <febExpenses.length; i++) {
        febTotal += parseFloat(febExpenses[i].price)
        if(febExpenses[i].category === "Food") {
            febFood += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Auto") {
            febAuto += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Personal") {
            febPersonal += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Health") {
            febHealth += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Home") {
            febHome += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Bills") {
            febBills += parseFloat(febExpenses[i].price)
        }

    }

    for (let j = 0; j <febGoals.length; j++) {
        if(febGoals[j].category === "Food") {
            febGoalFood += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Auto") {
            febGoalAuto += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Personal") {
            febGoalPersonal += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Health") {
            febGoalHealth += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Home") {
            febGoalHome += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Bills") {
            febGoalBills += parseFloat(febGoals[j].budget)
        }

        else if(febGoals[j].category ==="All") {
            febGoalTotal += parseFloat(febGoals[j].budget)
        }

        
    }



    const [febData, setfebData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [febFood, febAuto, febPersonal, febHealth, febHome, febBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            feb
            <Pie 
            data={{
                labels: febData.labels,
                datasets: febData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${febFood}, percentage of total: {parseFloat((febFood/febTotal*100).toFixed(2))} %, Goal: {febGoalFood > 0? febGoalFood : "Did not set a goal for this month"}</p>
            {febGoalFood > 0?  <p>{(febGoalFood > febFood) ? `You reached your goal this month, going under by a total of ${febGoalFood - febFood}` : `You failed to reach your goal this month, going over by a total of ${febFood-febGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${febAuto}, percentage of total: {parseFloat((febAuto/febTotal*100).toFixed(2))} % , Goal: {febGoalAuto > 0? febGoalAuto : "Did not set a goal for this month"} </p>
            {febGoalAuto > 0?  <p>{(febGoalAuto > febAuto) ? `You reached your goal this month, going under by a total of ${febGoalAuto - febAuto}` : `You failed to reach your goal this month, going over by a total of ${febAuto-febGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${febPersonal}, percentage of total: {parseFloat((febPersonal/febTotal*100).toFixed(2))} %, Goal: {febGoalPersonal> 0? febGoalPersonal : "Did not set a goal for this month"}</p>
            {febGoalPersonal > 0?  <p>{(febGoalPersonal > febPersonal) ? `You reached your goal this month, going under by a total of ${febGoalPersonal - febPersonal}` : `You failed to reach your goal this month, going over by a total of ${febPersonal-febGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${febHealth}, percentage of total: {parseFloat((febHealth/febTotal*100).toFixed(2))} % , Goal: {febGoalHealth > 0? febGoalHealth : "Did not set a goal for this month"}</p>
             {febGoalHealth > 0?  <p>{(febGoalHealth > febHealth) ? `You reached your goal this month, going under by a total of ${febGoalHealth - febHealth}` : `You failed to reach your goal this month, going over by a total of ${febHealth-febGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${febHome}, percentage of total: {parseFloat((febHome/febTotal*100).toFixed(2))} %, Goal: {febGoalHome > 0? febGoalHome : "Did not set a goal for this month"}</p>
            {febGoalHome > 0?  <p>{(febGoalHome > febHome) ? `You reached your goal this month, going under by a total of ${febGoalHome - febHome}` : `You failed to reach your goal this month, going over by a total of ${febHome-febGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${febBills}, percentage of total: {parseFloat((febBills/febTotal*100).toFixed(2))} %, Goal: {febGoalBills > 0? febGoalBills : "Did not set a goal for this month"}</p>
            {febGoalBills > 0?  <p>{(febGoalBills > febBills) ? `You reached your goal this month, going under by a total of ${febGoalBills - febBills}` : `You failed to reach your goal this month, going over by a total of ${febBills-febGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${febTotal}, Goal: {febGoalTotal > 0? febGoalTotal : "Did not set a goal for this month"}</p>
            {febGoalTotal > 0?  <p>{(febGoalTotal > febTotal) ? `You reached your goal this month, going under by a total of ${febGoalTotal - febTotal}` : `You failed to reach your goal this month, going over by a total of ${febTotal-febGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Feb