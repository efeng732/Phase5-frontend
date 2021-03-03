import {useState, useEffect} from "react"
import {Pie} from "react-chartjs-2"

function Sep({sepGoals, sepExpenses}){
    let sepFood = 0;
    let sepAuto = 0;
    let sepPersonal = 0;
    let sepHealth = 0;
    let sepHome = 0;
    let sepBills = 0;
    let sepTotal = 0;

    let sepGoalFood=0;
    let sepGoalAuto = 0;
    let sepGoalPersonal =0;
    let sepGoalHealth = 0;
    let sepGoalHome = 0;
    let sepGoalBills = 0;
    let sepGoalTotal = 0;
    

    for(let i = 0; i <sepExpenses.length; i++) {
        sepTotal += parseFloat(sepExpenses[i].price)
        if(sepExpenses[i].category === "Food") {
            sepFood += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Auto") {
            sepAuto += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Personal") {
            sepPersonal += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Health") {
            sepHealth += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Home") {
            sepHome += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Bills") {
            sepBills += parseFloat(sepExpenses[i].price)
        }

    }

    for (let j = 0; j <sepGoals.length; j++) {
        if(sepGoals[j].category === "Food") {
            sepGoalFood += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Auto") {
            sepGoalAuto += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Personal") {
            sepGoalPersonal += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Health") {
            sepGoalHealth += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Home") {
            sepGoalHome += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Bills") {
            sepGoalBills += parseFloat(sepGoals[j].budget)
        }

        else if(sepGoals[j].category ==="All") {
            sepGoalTotal += parseFloat(sepGoals[j].budget)
        }

        
    }



    const [sepData, setsepData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [sepFood, sepAuto, sepPersonal, sepHealth, sepHome, sepBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })


    return (
        <div>
            <br></br>
            sep
            <Pie 
            data={{
                labels: sepData.labels,
                datasets: sepData.datasets
            }}
            height = '50%'
            />

            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${sepFood}, percentage of total: {parseFloat((sepFood/sepTotal*100).toFixed(2))} %, Goal: {sepGoalFood > 0? sepGoalFood : "Did not set a goal for this month"}</p>
            {sepGoalFood > 0?  <p>{(sepGoalFood > sepFood) ? `You reached your goal this month, going under by a total of ${sepGoalFood - sepFood}` : `You failed to reach your goal this month, going over by a total of ${sepFood-sepGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${sepAuto}, percentage of total: {parseFloat((sepAuto/sepTotal*100).toFixed(2))} % , Goal: {sepGoalAuto > 0? sepGoalAuto : "Did not set a goal for this month"} </p>
            {sepGoalAuto > 0?  <p>{(sepGoalAuto > sepAuto) ? `You reached your goal this month, going under by a total of ${sepGoalAuto - sepAuto}` : `You failed to reach your goal this month, going over by a total of ${sepAuto-sepGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${sepPersonal}, percentage of total: {parseFloat((sepPersonal/sepTotal*100).toFixed(2))} %, Goal: {sepGoalPersonal> 0? sepGoalPersonal : "Did not set a goal for this month"}</p>
            {sepGoalPersonal > 0?  <p>{(sepGoalPersonal > sepPersonal) ? `You reached your goal this month, going under by a total of ${sepGoalPersonal - sepPersonal}` : `You failed to reach your goal this month, going over by a total of ${sepPersonal-sepGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${sepHealth}, percentage of total: {parseFloat((sepHealth/sepTotal*100).toFixed(2))} % , Goal: {sepGoalHealth > 0? sepGoalHealth : "Did not set a goal for this month"}</p>
             {sepGoalHealth > 0?  <p>{(sepGoalHealth > sepHealth) ? `You reached your goal this month, going under by a total of ${sepGoalHealth - sepHealth}` : `You failed to reach your goal this month, going over by a total of ${sepHealth-sepGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${sepHome}, percentage of total: {parseFloat((sepHome/sepTotal*100).toFixed(2))} %, Goal: {sepGoalHome > 0? sepGoalHome : "Did not set a goal for this month"}</p>
            {sepGoalHome > 0?  <p>{(sepGoalHome > sepHome) ? `You reached your goal this month, going under by a total of ${sepGoalHome - sepHome}` : `You failed to reach your goal this month, going over by a total of ${sepHome-sepGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${sepBills}, percentage of total: {parseFloat((sepBills/sepTotal*100).toFixed(2))} %, Goal: {sepGoalBills > 0? sepGoalBills : "Did not set a goal for this month"}</p>
            {sepGoalBills > 0?  <p>{(sepGoalBills > sepBills) ? `You reached your goal this month, going under by a total of ${sepGoalBills - sepBills}` : `You failed to reach your goal this month, going over by a total of ${sepBills-sepGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${sepTotal}, Goal: {sepGoalTotal > 0? sepGoalTotal : "Did not set a goal for this month"}</p>
            {sepGoalTotal > 0?  <p>{(sepGoalTotal > sepTotal) ? `You reached your goal this month, going under by a total of ${sepGoalTotal - sepTotal}` : `You failed to reach your goal this month, going over by a total of ${sepTotal-sepGoalTotal}`}</p> : null }
            <br></br>


            
        </div>
    )
}

export default Sep