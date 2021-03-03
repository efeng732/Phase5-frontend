import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Apr({aprGoals, aprExpenses}){
    let aprFood = 0;
    let aprAuto = 0;
    let aprPersonal = 0;
    let aprHealth = 0;
    let aprHome = 0;
    let aprBills = 0;
    let aprTotal = 0;

    let aprGoalFood=0;
    let aprGoalAuto = 0;
    let aprGoalPersonal =0;
    let aprGoalHealth = 0;
    let aprGoalHome = 0;
    let aprGoalBills = 0;
    let aprGoalTotal = 0;
    

    for(let i = 0; i <aprExpenses.length; i++) {
        aprTotal += parseFloat(aprExpenses[i].price)
        if(aprExpenses[i].category === "Food") {
            aprFood += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Auto") {
            aprAuto += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Personal") {
            aprPersonal += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Health") {
            aprHealth += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Home") {
            aprHome += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Bills") {
            aprBills += parseFloat(aprExpenses[i].price)
        }

    }

    for (let j = 0; j <aprGoals.length; j++) {
        if(aprGoals[j].category === "Food") {
            aprGoalFood += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Auto") {
            aprGoalAuto += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Personal") {
            aprGoalPersonal += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Health") {
            aprGoalHealth += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Home") {
            aprGoalHome += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Bills") {
            aprGoalBills += parseFloat(aprGoals[j].budget)
        }

        else if(aprGoals[j].category ==="All") {
            aprGoalTotal += parseFloat(aprGoals[j].budget)
        }

        
    }



    const [aprData, setaprData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [aprFood, aprAuto, aprPersonal, aprHealth, aprHome, aprBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            apr
            <Pie 
            data={{
                labels: aprData.labels,
                datasets: aprData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${aprFood}, percentage of total: {parseFloat((aprFood/aprTotal*100).toFixed(2))} %, Goal: {aprGoalFood > 0? aprGoalFood : "Did not set a goal for this month"}</p>
            {aprGoalFood > 0?  <p>{(aprGoalFood > aprFood) ? `You reached your goal this month, going under by a total of ${aprGoalFood - aprFood}` : `You failed to reach your goal this month, going over by a total of ${aprFood-aprGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${aprAuto}, percentage of total: {parseFloat((aprAuto/aprTotal*100).toFixed(2))} % , Goal: {aprGoalAuto > 0? aprGoalAuto : "Did not set a goal for this month"} </p>
            {aprGoalAuto > 0?  <p>{(aprGoalAuto > aprAuto) ? `You reached your goal this month, going under by a total of ${aprGoalAuto - aprAuto}` : `You failed to reach your goal this month, going over by a total of ${aprAuto-aprGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${aprPersonal}, percentage of total: {parseFloat((aprPersonal/aprTotal*100).toFixed(2))} %, Goal: {aprGoalPersonal> 0? aprGoalPersonal : "Did not set a goal for this month"}</p>
            {aprGoalPersonal > 0?  <p>{(aprGoalPersonal > aprPersonal) ? `You reached your goal this month, going under by a total of ${aprGoalPersonal - aprPersonal}` : `You failed to reach your goal this month, going over by a total of ${aprPersonal-aprGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${aprHealth}, percentage of total: {parseFloat((aprHealth/aprTotal*100).toFixed(2))} % , Goal: {aprGoalHealth > 0? aprGoalHealth : "Did not set a goal for this month"}</p>
             {aprGoalHealth > 0?  <p>{(aprGoalHealth > aprHealth) ? `You reached your goal this month, going under by a total of ${aprGoalHealth - aprHealth}` : `You failed to reach your goal this month, going over by a total of ${aprHealth-aprGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${aprHome}, percentage of total: {parseFloat((aprHome/aprTotal*100).toFixed(2))} %, Goal: {aprGoalHome > 0? aprGoalHome : "Did not set a goal for this month"}</p>
            {aprGoalHome > 0?  <p>{(aprGoalHome > aprHome) ? `You reached your goal this month, going under by a total of ${aprGoalHome - aprHome}` : `You failed to reach your goal this month, going over by a total of ${aprHome-aprGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${aprBills}, percentage of total: {parseFloat((aprBills/aprTotal*100).toFixed(2))} %, Goal: {aprGoalBills > 0? aprGoalBills : "Did not set a goal for this month"}</p>
            {aprGoalBills > 0?  <p>{(aprGoalBills > aprBills) ? `You reached your goal this month, going under by a total of ${aprGoalBills - aprBills}` : `You failed to reach your goal this month, going over by a total of ${aprBills-aprGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${aprTotal}, Goal: {aprGoalTotal > 0? aprGoalTotal : "Did not set a goal for this month"}</p>
            {aprGoalTotal > 0?  <p>{(aprGoalTotal > aprTotal) ? `You reached your goal this month, going under by a total of ${aprGoalTotal - aprTotal}` : `You failed to reach your goal this month, going over by a total of ${aprTotal-aprGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Apr