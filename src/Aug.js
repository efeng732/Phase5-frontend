import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Aug({augGoals, augExpenses}){
    let augFood = 0;
    let augAuto = 0;
    let augPersonal = 0;
    let augHealth = 0;
    let augHome = 0;
    let augBills = 0;
    let augTotal = 0;

    let augGoalFood=0;
    let augGoalAuto = 0;
    let augGoalPersonal =0;
    let augGoalHealth = 0;
    let augGoalHome = 0;
    let augGoalBills = 0;
    let augGoalTotal = 0;
    

    for(let i = 0; i <augExpenses.length; i++) {
        augTotal += parseFloat(augExpenses[i].price)
        if(augExpenses[i].category === "Food") {
            augFood += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Auto") {
            augAuto += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Personal") {
            augPersonal += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Health") {
            augHealth += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Home") {
            augHome += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Bills") {
            augBills += parseFloat(augExpenses[i].price)
        }

    }

    for (let j = 0; j <augGoals.length; j++) {
        if(augGoals[j].category === "Food") {
            augGoalFood += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Auto") {
            augGoalAuto += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Personal") {
            augGoalPersonal += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Health") {
            augGoalHealth += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Home") {
            augGoalHome += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Bills") {
            augGoalBills += parseFloat(augGoals[j].budget)
        }

        else if(augGoals[j].category ==="All") {
            augGoalTotal += parseFloat(augGoals[j].budget)
        }

        
    }



    const [augData, setaugData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [augFood, augAuto, augPersonal, augHealth, augHome, augBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            aug
            <Pie 
            data={{
                labels: augData.labels,
                datasets: augData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${augFood}, percentage of total: {parseFloat((augFood/augTotal*100).toFixed(2))} %, Goal: {augGoalFood > 0? augGoalFood : "Did not set a goal for this month"}</p>
            {augGoalFood > 0?  <p>{(augGoalFood > augFood) ? `You reached your goal this month, going under by a total of ${augGoalFood - augFood}` : `You failed to reach your goal this month, going over by a total of ${augFood-augGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${augAuto}, percentage of total: {parseFloat((augAuto/augTotal*100).toFixed(2))} % , Goal: {augGoalAuto > 0? augGoalAuto : "Did not set a goal for this month"} </p>
            {augGoalAuto > 0?  <p>{(augGoalAuto > augAuto) ? `You reached your goal this month, going under by a total of ${augGoalAuto - augAuto}` : `You failed to reach your goal this month, going over by a total of ${augAuto-augGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${augPersonal}, percentage of total: {parseFloat((augPersonal/augTotal*100).toFixed(2))} %, Goal: {augGoalPersonal> 0? augGoalPersonal : "Did not set a goal for this month"}</p>
            {augGoalPersonal > 0?  <p>{(augGoalPersonal > augPersonal) ? `You reached your goal this month, going under by a total of ${augGoalPersonal - augPersonal}` : `You failed to reach your goal this month, going over by a total of ${augPersonal-augGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${augHealth}, percentage of total: {parseFloat((augHealth/augTotal*100).toFixed(2))} % , Goal: {augGoalHealth > 0? augGoalHealth : "Did not set a goal for this month"}</p>
             {augGoalHealth > 0?  <p>{(augGoalHealth > augHealth) ? `You reached your goal this month, going under by a total of ${augGoalHealth - augHealth}` : `You failed to reach your goal this month, going over by a total of ${augHealth-augGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${augHome}, percentage of total: {parseFloat((augHome/augTotal*100).toFixed(2))} %, Goal: {augGoalHome > 0? augGoalHome : "Did not set a goal for this month"}</p>
            {augGoalHome > 0?  <p>{(augGoalHome > augHome) ? `You reached your goal this month, going under by a total of ${augGoalHome - augHome}` : `You failed to reach your goal this month, going over by a total of ${augHome-augGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${augBills}, percentage of total: {parseFloat((augBills/augTotal*100).toFixed(2))} %, Goal: {augGoalBills > 0? augGoalBills : "Did not set a goal for this month"}</p>
            {augGoalBills > 0?  <p>{(augGoalBills > augBills) ? `You reached your goal this month, going under by a total of ${augGoalBills - augBills}` : `You failed to reach your goal this month, going over by a total of ${augBills-augGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${augTotal}, Goal: {augGoalTotal > 0? augGoalTotal : "Did not set a goal for this month"}</p>
            {augGoalTotal > 0?  <p>{(augGoalTotal > augTotal) ? `You reached your goal this month, going under by a total of ${augGoalTotal - augTotal}` : `You failed to reach your goal this month, going over by a total of ${augTotal-augGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Aug