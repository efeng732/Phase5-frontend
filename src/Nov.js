import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Nov({novGoals, novExpenses}){
    let novFood = 0;
    let novAuto = 0;
    let novPersonal = 0;
    let novHealth = 0;
    let novHome = 0;
    let novBills = 0;
    let novTotal = 0;

    let novGoalFood=0;
    let novGoalAuto = 0;
    let novGoalPersonal =0;
    let novGoalHealth = 0;
    let novGoalHome = 0;
    let novGoalBills = 0;
    let novGoalTotal = 0;
    

    for(let i = 0; i <novExpenses.length; i++) {
        novTotal += parseFloat(novExpenses[i].price)
        if(novExpenses[i].category === "Food") {
            novFood += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Auto") {
            novAuto += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Personal") {
            novPersonal += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Health") {
            novHealth += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Home") {
            novHome += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Bills") {
            novBills += parseFloat(novExpenses[i].price)
        }

    }

    for (let j = 0; j <novGoals.length; j++) {
        if(novGoals[j].category === "Food") {
            novGoalFood += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Auto") {
            novGoalAuto += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Personal") {
            novGoalPersonal += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Health") {
            novGoalHealth += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Home") {
            novGoalHome += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Bills") {
            novGoalBills += parseFloat(novGoals[j].budget)
        }

        else if(novGoals[j].category ==="All") {
            novGoalTotal += parseFloat(novGoals[j].budget)
        }

        
    }



    const [novData, setnovData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [novFood, novAuto, novPersonal, novHealth, novHome, novBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            nov
            <Pie 
            data={{
                labels: novData.labels,
                datasets: novData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${novFood}, percentage of total: {parseFloat((novFood/novTotal*100).toFixed(2))} %, Goal: {novGoalFood > 0? novGoalFood : "Did not set a goal for this month"}</p>
            {novGoalFood > 0?  <p>{(novGoalFood > novFood) ? `You reached your goal this month, going under by a total of ${novGoalFood - novFood}` : `You failed to reach your goal this month, going over by a total of ${novFood-novGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${novAuto}, percentage of total: {parseFloat((novAuto/novTotal*100).toFixed(2))} % , Goal: {novGoalAuto > 0? novGoalAuto : "Did not set a goal for this month"} </p>
            {novGoalAuto > 0?  <p>{(novGoalAuto > novAuto) ? `You reached your goal this month, going under by a total of ${novGoalAuto - novAuto}` : `You failed to reach your goal this month, going over by a total of ${novAuto-novGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${novPersonal}, percentage of total: {parseFloat((novPersonal/novTotal*100).toFixed(2))} %, Goal: {novGoalPersonal> 0? novGoalPersonal : "Did not set a goal for this month"}</p>
            {novGoalPersonal > 0?  <p>{(novGoalPersonal > novPersonal) ? `You reached your goal this month, going under by a total of ${novGoalPersonal - novPersonal}` : `You failed to reach your goal this month, going over by a total of ${novPersonal-novGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${novHealth}, percentage of total: {parseFloat((novHealth/novTotal*100).toFixed(2))} % , Goal: {novGoalHealth > 0? novGoalHealth : "Did not set a goal for this month"}</p>
             {novGoalHealth > 0?  <p>{(novGoalHealth > novHealth) ? `You reached your goal this month, going under by a total of ${novGoalHealth - novHealth}` : `You failed to reach your goal this month, going over by a total of ${novHealth-novGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${novHome}, percentage of total: {parseFloat((novHome/novTotal*100).toFixed(2))} %, Goal: {novGoalHome > 0? novGoalHome : "Did not set a goal for this month"}</p>
            {novGoalHome > 0?  <p>{(novGoalHome > novHome) ? `You reached your goal this month, going under by a total of ${novGoalHome - novHome}` : `You failed to reach your goal this month, going over by a total of ${novHome-novGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${novBills}, percentage of total: {parseFloat((novBills/novTotal*100).toFixed(2))} %, Goal: {novGoalBills > 0? novGoalBills : "Did not set a goal for this month"}</p>
            {novGoalBills > 0?  <p>{(novGoalBills > novBills) ? `You reached your goal this month, going under by a total of ${novGoalBills - novBills}` : `You failed to reach your goal this month, going over by a total of ${novBills-novGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${novTotal}, Goal: {novGoalTotal > 0? novGoalTotal : "Did not set a goal for this month"}</p>
            {novGoalTotal > 0?  <p>{(novGoalTotal > novTotal) ? `You reached your goal this month, going under by a total of ${novGoalTotal - novTotal}` : `You failed to reach your goal this month, going over by a total of ${novTotal-novGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Nov