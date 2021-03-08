import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Jan({janGoals, janExpenses, janFoodPercent, setJanFoodPercent, janAutoPercent, setJanAutoPercent, janPersonalPercent, setJanPersonalPercent, janHealthPercent, setJanHealthPercent, janHomePercent, setJanHomePercent, janBillsPercent, setJanBillsPercent}){
    // console.log(janGoals)
    // console.log(janExpenses)



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

    
    let janFoodRatio = parseFloat((janFood/janTotal*100).toFixed(2))
    let janAutoRatio = parseFloat((janAuto/janTotal*100).toFixed(2))
    let janPersonalRatio = parseFloat((janPersonal/janTotal*100).toFixed(2))
    let janHealthRatio = parseFloat((janHealth/janTotal*100).toFixed(2))
    let janHomeRatio = parseFloat((janHome/janTotal*100).toFixed(2))
    let janBillsRatio = parseFloat((janBills/janTotal*100).toFixed(2))



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

            <h2>Recommendations</h2>
            {janFoodRatio > janFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {janAutoRatio > janAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {janPersonalRatio > janPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {janHealthRatio > janHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {janHomeRatio > janHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {janBillsRatio > janBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={janFoodPercent}
                onChange={(e) => setJanFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={janAutoPercent}
                onChange={(e) => setJanAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={janPersonalPercent}
                onChange={(e) => setJanPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={janHealthPercent}
                onChange={(e) => setJanHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={janHomePercent}
                onChange={(e) => setJanHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={janBillsPercent}
                onChange={(e) => setJanBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Jan 

// Food less than 15%
//Bills less than 40%
//Personal less than 15%
//Home less than 10%
//Health less than 10%
//Auto less than 10%