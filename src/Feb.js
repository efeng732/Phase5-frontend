import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Feb({febGoals, febExpenses, febFoodPercent, setFebFoodPercent, febAutoPercent, setFebAutoPercent, febPersonalPercent, setFebPersonalPercent, febHealthPercent, setFebHealthPercent, febHomePercent, setFebHomePercent, febBillsPercent, setFebBillsPercent}){
    // console.log(febGoals)
    // console.log(febExpenses)



    // let foodState = 15
    // let autoState = 10
    // let personalState = 15 
    // let healthState = 10 
    // let homeState = 10 
    // let billsState = 40 

    // const[foodPercent, setFoodPercent] = useState(foodState)
    // const[autoPercent, setAutoPercent] = useState(autoState)
    // const [personalPercent, setPersonalPercent] = useState(personalState)
    // const[healthPercent, setHealthPercent] = useState(healthState)
    // const[homePercent, setHomePercent] = useState(homeState)
    // const[billsPercent, setBillsPercent] = useState(billsState)


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



    const [febData, setFebData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [febFood, febAuto, febPersonal, febHealth, febHome, febBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })

    
    let febFoodRatio = parseFloat((febFood/febTotal*100).toFixed(2))
    let febAutoRatio = parseFloat((febAuto/febTotal*100).toFixed(2))
    let febPersonalRatio = parseFloat((febPersonal/febTotal*100).toFixed(2))
    let febHealthRatio = parseFloat((febHealth/febTotal*100).toFixed(2))
    let febHomeRatio = parseFloat((febHome/febTotal*100).toFixed(2))
    let febBillsRatio = parseFloat((febBills/febTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            feb
            <Pie 
            data={{
                labels: febData.labels,
                datasets: febData.datasets
            }}
            height = '90%'
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

            <h2>Recommendations</h2>
            {febFoodRatio > febFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {febAutoRatio > febAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {febPersonalRatio > febPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {febHealthRatio > febHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {febHomeRatio > febHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {febBillsRatio > febBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={febFoodPercent}
                onChange={(e) => setFebFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={febAutoPercent}
                onChange={(e) => setFebAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={febPersonalPercent}
                onChange={(e) => setFebPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={febHealthPercent}
                onChange={(e) => setFebHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={febHomePercent}
                onChange={(e) => setFebHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={febBillsPercent}
                onChange={(e) => setFebBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Feb 