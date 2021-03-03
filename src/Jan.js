import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Jan({janGoals, janExpenses}){
    // console.log(janGoals)
    // console.log(janExpenses)


    let janFood = 0;
    let janAuto = 0;
    let janPersonal = 0;
    let janHealth = 0;
    let janHome = 0;
    let janBills = 0;
    let janTotal = 0;

    let janGoalFood=0;
    let janGoalAuto = 0;
    let janGoalPersonal =0;
    let janGoalHealth = 0;
    let janGoalHome = 0;
    let janGoalBills = 0;
    let janGoalTotal = 0;
    

    for(let i = 0; i <janExpenses.length; i++) {
        janTotal += parseFloat(janExpenses[i].price)
        if(janExpenses[i].category === "Food") {
            janFood += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Auto") {
            janAuto += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Personal") {
            janPersonal += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Health") {
            janHealth += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Home") {
            janHome += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Bills") {
            janBills += parseFloat(janExpenses[i].price)
        }

    }

    for (let j = 0; j <janGoals.length; j++) {
        if(janGoals[j].category === "Food") {
            janGoalFood += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Auto") {
            janGoalAuto += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Personal") {
            janGoalPersonal += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Health") {
            janGoalHealth += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Home") {
            janGoalHome += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Bills") {
            janGoalBills += parseFloat(janGoals[j].budget)
        }

        else if(janGoals[j].category ==="All") {
            janGoalTotal += parseFloat(janGoals[j].budget)
        }

        
    }



    const [janData, setJanData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [janFood, janAuto, janPersonal, janHealth, janHome, janBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })

    


    return (
        <div>
            <br></br>
            Jan
            <Pie 
            data={{
                labels: janData.labels,
                datasets: janData.datasets
            }}
            height = '90%'
            />


            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${janFood}, percentage of total: {parseFloat((janFood/janTotal*100).toFixed(2))} %, Goal: {janGoalFood > 0? janGoalFood : "Did not set a goal for this month"}</p>
            {janGoalFood > 0?  <p>{(janGoalFood > janFood) ? `You reached your goal this month, going under by a total of ${janGoalFood - janFood}` : `You failed to reach your goal this month, going over by a total of ${janFood-janGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${janAuto}, percentage of total: {parseFloat((janAuto/janTotal*100).toFixed(2))} % , Goal: {janGoalAuto > 0? janGoalAuto : "Did not set a goal for this month"} </p>
            {janGoalAuto > 0?  <p>{(janGoalAuto > janAuto) ? `You reached your goal this month, going under by a total of ${janGoalAuto - janAuto}` : `You failed to reach your goal this month, going over by a total of ${janAuto-janGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${janPersonal}, percentage of total: {parseFloat((janPersonal/janTotal*100).toFixed(2))} %, Goal: {janGoalPersonal> 0? janGoalPersonal : "Did not set a goal for this month"}</p>
            {janGoalPersonal > 0?  <p>{(janGoalPersonal > janPersonal) ? `You reached your goal this month, going under by a total of ${janGoalPersonal - janPersonal}` : `You failed to reach your goal this month, going over by a total of ${janPersonal-janGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${janHealth}, percentage of total: {parseFloat((janHealth/janTotal*100).toFixed(2))} % , Goal: {janGoalHealth > 0? janGoalHealth : "Did not set a goal for this month"}</p>
             {janGoalHealth > 0?  <p>{(janGoalHealth > janHealth) ? `You reached your goal this month, going under by a total of ${janGoalHealth - janHealth}` : `You failed to reach your goal this month, going over by a total of ${janHealth-janGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${janHome}, percentage of total: {parseFloat((janHome/janTotal*100).toFixed(2))} %, Goal: {janGoalHome > 0? janGoalHome : "Did not set a goal for this month"}</p>
            {janGoalHome > 0?  <p>{(janGoalHome > janHome) ? `You reached your goal this month, going under by a total of ${janGoalHome - janHome}` : `You failed to reach your goal this month, going over by a total of ${janHome-janGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${janBills}, percentage of total: {parseFloat((janBills/janTotal*100).toFixed(2))} %, Goal: {janGoalBills > 0? janGoalBills : "Did not set a goal for this month"}</p>
            {janGoalBills > 0?  <p>{(janGoalBills > janBills) ? `You reached your goal this month, going under by a total of ${janGoalBills - janBills}` : `You failed to reach your goal this month, going over by a total of ${janBills-janGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${janTotal}, Goal: {janGoalTotal > 0? janGoalTotal : "Did not set a goal for this month"}</p>
            {janGoalTotal > 0?  <p>{(janGoalTotal > janTotal) ? `You reached your goal this month, going under by a total of ${janGoalTotal - janTotal}` : `You failed to reach your goal this month, going over by a total of ${janTotal-janGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Jan 