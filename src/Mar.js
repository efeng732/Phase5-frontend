import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Mar({marGoals, marExpenses}){
    let marFood = 0;
    let marAuto = 0;
    let marPersonal = 0;
    let marHealth = 0;
    let marHome = 0;
    let marBills = 0;
    let marTotal = 0;

    let marGoalFood=0;
    let marGoalAuto = 0;
    let marGoalPersonal =0;
    let marGoalHealth = 0;
    let marGoalHome = 0;
    let marGoalBills = 0;
    let marGoalTotal = 0;
    

    for(let i = 0; i <marExpenses.length; i++) {
        marTotal += parseFloat(marExpenses[i].price)
        if(marExpenses[i].category === "Food") {
            marFood += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Auto") {
            marAuto += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Personal") {
            marPersonal += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Health") {
            marHealth += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Home") {
            marHome += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Bills") {
            marBills += parseFloat(marExpenses[i].price)
        }

    }

    for (let j = 0; j <marGoals.length; j++) {
        if(marGoals[j].category === "Food") {
            marGoalFood += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Auto") {
            marGoalAuto += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Personal") {
            marGoalPersonal += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Health") {
            marGoalHealth += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Home") {
            marGoalHome += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Bills") {
            marGoalBills += parseFloat(marGoals[j].budget)
        }

        else if(marGoals[j].category ==="All") {
            marGoalTotal += parseFloat(marGoals[j].budget)
        }

        
    }



    const [marData, setmarData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [marFood, marAuto, marPersonal, marHealth, marHome, marBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            mar
            <Pie 
            data={{
                labels: marData.labels,
                datasets: marData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${marFood}, percentage of total: {parseFloat((marFood/marTotal*100).toFixed(2))} %, Goal: {marGoalFood > 0? marGoalFood : "Did not set a goal for this month"}</p>
            {marGoalFood > 0?  <p>{(marGoalFood > marFood) ? `You reached your goal this month, going under by a total of ${marGoalFood - marFood}` : `You failed to reach your goal this month, going over by a total of ${marFood-marGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${marAuto}, percentage of total: {parseFloat((marAuto/marTotal*100).toFixed(2))} % , Goal: {marGoalAuto > 0? marGoalAuto : "Did not set a goal for this month"} </p>
            {marGoalAuto > 0?  <p>{(marGoalAuto > marAuto) ? `You reached your goal this month, going under by a total of ${marGoalAuto - marAuto}` : `You failed to reach your goal this month, going over by a total of ${marAuto-marGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${marPersonal}, percentage of total: {parseFloat((marPersonal/marTotal*100).toFixed(2))} %, Goal: {marGoalPersonal> 0? marGoalPersonal : "Did not set a goal for this month"}</p>
            {marGoalPersonal > 0?  <p>{(marGoalPersonal > marPersonal) ? `You reached your goal this month, going under by a total of ${marGoalPersonal - marPersonal}` : `You failed to reach your goal this month, going over by a total of ${marPersonal-marGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${marHealth}, percentage of total: {parseFloat((marHealth/marTotal*100).toFixed(2))} % , Goal: {marGoalHealth > 0? marGoalHealth : "Did not set a goal for this month"}</p>
             {marGoalHealth > 0?  <p>{(marGoalHealth > marHealth) ? `You reached your goal this month, going under by a total of ${marGoalHealth - marHealth}` : `You failed to reach your goal this month, going over by a total of ${marHealth-marGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${marHome}, percentage of total: {parseFloat((marHome/marTotal*100).toFixed(2))} %, Goal: {marGoalHome > 0? marGoalHome : "Did not set a goal for this month"}</p>
            {marGoalHome > 0?  <p>{(marGoalHome > marHome) ? `You reached your goal this month, going under by a total of ${marGoalHome - marHome}` : `You failed to reach your goal this month, going over by a total of ${marHome-marGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${marBills}, percentage of total: {parseFloat((marBills/marTotal*100).toFixed(2))} %, Goal: {marGoalBills > 0? marGoalBills : "Did not set a goal for this month"}</p>
            {marGoalBills > 0?  <p>{(marGoalBills > marBills) ? `You reached your goal this month, going under by a total of ${marGoalBills - marBills}` : `You failed to reach your goal this month, going over by a total of ${marBills-marGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${marTotal}, Goal: {marGoalTotal > 0? marGoalTotal : "Did not set a goal for this month"}</p>
            {marGoalTotal > 0?  <p>{(marGoalTotal > marTotal) ? `You reached your goal this month, going under by a total of ${marGoalTotal - marTotal}` : `You failed to reach your goal this month, going over by a total of ${marTotal-marGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Mar