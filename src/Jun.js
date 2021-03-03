import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Jun({junGoals, junExpenses}){
    let junFood = 0;
    let junAuto = 0;
    let junPersonal = 0;
    let junHealth = 0;
    let junHome = 0;
    let junBills = 0;
    let junTotal = 0;

    let junGoalFood=0;
    let junGoalAuto = 0;
    let junGoalPersonal =0;
    let junGoalHealth = 0;
    let junGoalHome = 0;
    let junGoalBills = 0;
    let junGoalTotal = 0;
    

    for(let i = 0; i <junExpenses.length; i++) {
        junTotal += parseFloat(junExpenses[i].price)
        if(junExpenses[i].category === "Food") {
            junFood += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Auto") {
            junAuto += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Personal") {
            junPersonal += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Health") {
            junHealth += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Home") {
            junHome += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Bills") {
            junBills += parseFloat(junExpenses[i].price)
        }

    }

    for (let j = 0; j <junGoals.length; j++) {
        if(junGoals[j].category === "Food") {
            junGoalFood += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Auto") {
            junGoalAuto += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Personal") {
            junGoalPersonal += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Health") {
            junGoalHealth += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Home") {
            junGoalHome += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Bills") {
            junGoalBills += parseFloat(junGoals[j].budget)
        }

        else if(junGoals[j].category ==="All") {
            junGoalTotal += parseFloat(junGoals[j].budget)
        }

        
    }



    const [junData, setjunData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [junFood, junAuto, junPersonal, junHealth, junHome, junBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            jun
            <Pie 
            data={{
                labels: junData.labels,
                datasets: junData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${junFood}, percentage of total: {parseFloat((junFood/junTotal*100).toFixed(2))} %, Goal: {junGoalFood > 0? junGoalFood : "Did not set a goal for this month"}</p>
            {junGoalFood > 0?  <p>{(junGoalFood > junFood) ? `You reached your goal this month, going under by a total of ${junGoalFood - junFood}` : `You failed to reach your goal this month, going over by a total of ${junFood-junGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${junAuto}, percentage of total: {parseFloat((junAuto/junTotal*100).toFixed(2))} % , Goal: {junGoalAuto > 0? junGoalAuto : "Did not set a goal for this month"} </p>
            {junGoalAuto > 0?  <p>{(junGoalAuto > junAuto) ? `You reached your goal this month, going under by a total of ${junGoalAuto - junAuto}` : `You failed to reach your goal this month, going over by a total of ${junAuto-junGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${junPersonal}, percentage of total: {parseFloat((junPersonal/junTotal*100).toFixed(2))} %, Goal: {junGoalPersonal> 0? junGoalPersonal : "Did not set a goal for this month"}</p>
            {junGoalPersonal > 0?  <p>{(junGoalPersonal > junPersonal) ? `You reached your goal this month, going under by a total of ${junGoalPersonal - junPersonal}` : `You failed to reach your goal this month, going over by a total of ${junPersonal-junGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${junHealth}, percentage of total: {parseFloat((junHealth/junTotal*100).toFixed(2))} % , Goal: {junGoalHealth > 0? junGoalHealth : "Did not set a goal for this month"}</p>
             {junGoalHealth > 0?  <p>{(junGoalHealth > junHealth) ? `You reached your goal this month, going under by a total of ${junGoalHealth - junHealth}` : `You failed to reach your goal this month, going over by a total of ${junHealth-junGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${junHome}, percentage of total: {parseFloat((junHome/junTotal*100).toFixed(2))} %, Goal: {junGoalHome > 0? junGoalHome : "Did not set a goal for this month"}</p>
            {junGoalHome > 0?  <p>{(junGoalHome > junHome) ? `You reached your goal this month, going under by a total of ${junGoalHome - junHome}` : `You failed to reach your goal this month, going over by a total of ${junHome-junGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${junBills}, percentage of total: {parseFloat((junBills/junTotal*100).toFixed(2))} %, Goal: {junGoalBills > 0? junGoalBills : "Did not set a goal for this month"}</p>
            {junGoalBills > 0?  <p>{(junGoalBills > junBills) ? `You reached your goal this month, going under by a total of ${junGoalBills - junBills}` : `You failed to reach your goal this month, going over by a total of ${junBills-junGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${junTotal}, Goal: {junGoalTotal > 0? junGoalTotal : "Did not set a goal for this month"}</p>
            {junGoalTotal > 0?  <p>{(junGoalTotal > junTotal) ? `You reached your goal this month, going under by a total of ${junGoalTotal - junTotal}` : `You failed to reach your goal this month, going over by a total of ${junTotal-junGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Jun 