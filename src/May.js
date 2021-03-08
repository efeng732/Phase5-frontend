import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function May({mayGoals, mayExpenses, mayFoodPercent, setMayFoodPercent, mayAutoPercent, setMayAutoPercent, mayPersonalPercent, setMayPersonalPercent, mayHealthPercent, setMayHealthPercent, mayHomePercent, setMayHomePercent, mayBillsPercent, setMayBillsPercent}){
    // console.log(mayGoals)
    // console.log(mayExpenses)



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


    let mayFood = 0;
    let mayAuto = 0;
    let mayPersonal = 0;
    let mayHealth = 0;
    let mayHome = 0;
    let mayBills = 0;
    let mayTotal = 0;

    let mayGoalFood=0;
    let mayGoalAuto = 0;
    let mayGoalPersonal =0;
    let mayGoalHealth = 0;
    let mayGoalHome = 0;
    let mayGoalBills = 0;
    let mayGoalTotal = 0;
    

    for(let i = 0; i <mayExpenses.length; i++) {
        mayTotal += parseFloat(mayExpenses[i].price)
        if(mayExpenses[i].category === "Food") {
            mayFood += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Auto") {
            mayAuto += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Personal") {
            mayPersonal += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Health") {
            mayHealth += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Home") {
            mayHome += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Bills") {
            mayBills += parseFloat(mayExpenses[i].price)
        }

    }

    for (let j = 0; j <mayGoals.length; j++) {
        if(mayGoals[j].category === "Food") {
            mayGoalFood += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Auto") {
            mayGoalAuto += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Personal") {
            mayGoalPersonal += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Health") {
            mayGoalHealth += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Home") {
            mayGoalHome += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Bills") {
            mayGoalBills += parseFloat(mayGoals[j].budget)
        }

        else if(mayGoals[j].category ==="All") {
            mayGoalTotal += parseFloat(mayGoals[j].budget)
        }

        
    }



    const [mayData, setMayData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [mayFood, mayAuto, mayPersonal, mayHealth, mayHome, mayBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })

    
    let mayFoodRatio = parseFloat((mayFood/mayTotal*100).toFixed(2))
    let mayAutoRatio = parseFloat((mayAuto/mayTotal*100).toFixed(2))
    let mayPersonalRatio = parseFloat((mayPersonal/mayTotal*100).toFixed(2))
    let mayHealthRatio = parseFloat((mayHealth/mayTotal*100).toFixed(2))
    let mayHomeRatio = parseFloat((mayHome/mayTotal*100).toFixed(2))
    let mayBillsRatio = parseFloat((mayBills/mayTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            may
            <Pie 
            data={{
                labels: mayData.labels,
                datasets: mayData.datasets
            }}
            height = '90%'
            />


            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${mayFood}, percentage of total: {parseFloat((mayFood/mayTotal*100).toFixed(2))} %, Goal: {mayGoalFood > 0? mayGoalFood : "Did not set a goal for this month"}</p>
            {mayGoalFood > 0?  <p>{(mayGoalFood > mayFood) ? `You reached your goal this month, going under by a total of ${mayGoalFood - mayFood}` : `You failed to reach your goal this month, going over by a total of ${mayFood-mayGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${mayAuto}, percentage of total: {parseFloat((mayAuto/mayTotal*100).toFixed(2))} % , Goal: {mayGoalAuto > 0? mayGoalAuto : "Did not set a goal for this month"} </p>
            {mayGoalAuto > 0?  <p>{(mayGoalAuto > mayAuto) ? `You reached your goal this month, going under by a total of ${mayGoalAuto - mayAuto}` : `You failed to reach your goal this month, going over by a total of ${mayAuto-mayGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${mayPersonal}, percentage of total: {parseFloat((mayPersonal/mayTotal*100).toFixed(2))} %, Goal: {mayGoalPersonal> 0? mayGoalPersonal : "Did not set a goal for this month"}</p>
            {mayGoalPersonal > 0?  <p>{(mayGoalPersonal > mayPersonal) ? `You reached your goal this month, going under by a total of ${mayGoalPersonal - mayPersonal}` : `You failed to reach your goal this month, going over by a total of ${mayPersonal-mayGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${mayHealth}, percentage of total: {parseFloat((mayHealth/mayTotal*100).toFixed(2))} % , Goal: {mayGoalHealth > 0? mayGoalHealth : "Did not set a goal for this month"}</p>
             {mayGoalHealth > 0?  <p>{(mayGoalHealth > mayHealth) ? `You reached your goal this month, going under by a total of ${mayGoalHealth - mayHealth}` : `You failed to reach your goal this month, going over by a total of ${mayHealth-mayGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${mayHome}, percentage of total: {parseFloat((mayHome/mayTotal*100).toFixed(2))} %, Goal: {mayGoalHome > 0? mayGoalHome : "Did not set a goal for this month"}</p>
            {mayGoalHome > 0?  <p>{(mayGoalHome > mayHome) ? `You reached your goal this month, going under by a total of ${mayGoalHome - mayHome}` : `You failed to reach your goal this month, going over by a total of ${mayHome-mayGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${mayBills}, percentage of total: {parseFloat((mayBills/mayTotal*100).toFixed(2))} %, Goal: {mayGoalBills > 0? mayGoalBills : "Did not set a goal for this month"}</p>
            {mayGoalBills > 0?  <p>{(mayGoalBills > mayBills) ? `You reached your goal this month, going under by a total of ${mayGoalBills - mayBills}` : `You failed to reach your goal this month, going over by a total of ${mayBills-mayGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${mayTotal}, Goal: {mayGoalTotal > 0? mayGoalTotal : "Did not set a goal for this month"}</p>
            {mayGoalTotal > 0?  <p>{(mayGoalTotal > mayTotal) ? `You reached your goal this month, going under by a total of ${mayGoalTotal - mayTotal}` : `You failed to reach your goal this month, going over by a total of ${mayTotal-mayGoalTotal}`}</p> : null }
            <br></br>

            <h2>Recommendations</h2>
            {mayFoodRatio > mayFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {mayAutoRatio > mayAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {mayPersonalRatio > mayPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {mayHealthRatio > mayHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {mayHomeRatio > mayHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {mayBillsRatio > mayBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={mayFoodPercent}
                onChange={(e) => setMayFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={mayAutoPercent}
                onChange={(e) => setMayAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={mayPersonalPercent}
                onChange={(e) => setMayPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={mayHealthPercent}
                onChange={(e) => setMayHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={mayHomePercent}
                onChange={(e) => setMayHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={mayBillsPercent}
                onChange={(e) => setMayBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default May 