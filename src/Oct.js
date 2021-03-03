import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"
function Oct({octGoals, octExpenses}){
    let octFood = 0;
    let octAuto = 0;
    let octPersonal = 0;
    let octHealth = 0;
    let octHome = 0;
    let octBills = 0;
    let octTotal = 0;

    let octGoalFood=0;
    let octGoalAuto = 0;
    let octGoalPersonal =0;
    let octGoalHealth = 0;
    let octGoalHome = 0;
    let octGoalBills = 0;
    let octGoalTotal = 0;
    

    for(let i = 0; i <octExpenses.length; i++) {
        octTotal += parseFloat(octExpenses[i].price)
        if(octExpenses[i].category === "Food") {
            octFood += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Auto") {
            octAuto += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Personal") {
            octPersonal += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Health") {
            octHealth += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Home") {
            octHome += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Bills") {
            octBills += parseFloat(octExpenses[i].price)
        }

    }

    for (let j = 0; j <octGoals.length; j++) {
        if(octGoals[j].category === "Food") {
            octGoalFood += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Auto") {
            octGoalAuto += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Personal") {
            octGoalPersonal += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Health") {
            octGoalHealth += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Home") {
            octGoalHome += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Bills") {
            octGoalBills += parseFloat(octGoals[j].budget)
        }

        else if(octGoals[j].category ==="All") {
            octGoalTotal += parseFloat(octGoals[j].budget)
        }

        
    }



    const [octData, setoctData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [octFood, octAuto, octPersonal, octHealth, octHome, octBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            oct
            <Pie 
            data={{
                labels: octData.labels,
                datasets: octData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${octFood}, percentage of total: {parseFloat((octFood/octTotal*100).toFixed(2))} %, Goal: {octGoalFood > 0? octGoalFood : "Did not set a goal for this month"}</p>
            {octGoalFood > 0?  <p>{(octGoalFood > octFood) ? `You reached your goal this month, going under by a total of ${octGoalFood - octFood}` : `You failed to reach your goal this month, going over by a total of ${octFood-octGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${octAuto}, percentage of total: {parseFloat((octAuto/octTotal*100).toFixed(2))} % , Goal: {octGoalAuto > 0? octGoalAuto : "Did not set a goal for this month"} </p>
            {octGoalAuto > 0?  <p>{(octGoalAuto > octAuto) ? `You reached your goal this month, going under by a total of ${octGoalAuto - octAuto}` : `You failed to reach your goal this month, going over by a total of ${octAuto-octGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${octPersonal}, percentage of total: {parseFloat((octPersonal/octTotal*100).toFixed(2))} %, Goal: {octGoalPersonal> 0? octGoalPersonal : "Did not set a goal for this month"}</p>
            {octGoalPersonal > 0?  <p>{(octGoalPersonal > octPersonal) ? `You reached your goal this month, going under by a total of ${octGoalPersonal - octPersonal}` : `You failed to reach your goal this month, going over by a total of ${octPersonal-octGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${octHealth}, percentage of total: {parseFloat((octHealth/octTotal*100).toFixed(2))} % , Goal: {octGoalHealth > 0? octGoalHealth : "Did not set a goal for this month"}</p>
             {octGoalHealth > 0?  <p>{(octGoalHealth > octHealth) ? `You reached your goal this month, going under by a total of ${octGoalHealth - octHealth}` : `You failed to reach your goal this month, going over by a total of ${octHealth-octGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${octHome}, percentage of total: {parseFloat((octHome/octTotal*100).toFixed(2))} %, Goal: {octGoalHome > 0? octGoalHome : "Did not set a goal for this month"}</p>
            {octGoalHome > 0?  <p>{(octGoalHome > octHome) ? `You reached your goal this month, going under by a total of ${octGoalHome - octHome}` : `You failed to reach your goal this month, going over by a total of ${octHome-octGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${octBills}, percentage of total: {parseFloat((octBills/octTotal*100).toFixed(2))} %, Goal: {octGoalBills > 0? octGoalBills : "Did not set a goal for this month"}</p>
            {octGoalBills > 0?  <p>{(octGoalBills > octBills) ? `You reached your goal this month, going under by a total of ${octGoalBills - octBills}` : `You failed to reach your goal this month, going over by a total of ${octBills-octGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${octTotal}, Goal: {octGoalTotal > 0? octGoalTotal : "Did not set a goal for this month"}</p>
            {octGoalTotal > 0?  <p>{(octGoalTotal > octTotal) ? `You reached your goal this month, going under by a total of ${octGoalTotal - octTotal}` : `You failed to reach your goal this month, going over by a total of ${octTotal-octGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Oct