import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Aug({augGoals, augExpenses, augFoodPercent, setAugFoodPercent, augAutoPercent, setAugAutoPercent, augPersonalPercent, setAugPersonalPercent, augHealthPercent, setAugHealthPercent, augHomePercent, setAugHomePercent, augBillsPercent, setAugBillsPercent}){
    // console.log(augGoals)
    // console.log(augExpenses)



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



    const [augData, setAugData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [augFood, augAuto, augPersonal, augHealth, augHome, augBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })

    
    let augFoodRatio = parseFloat((augFood/augTotal*100).toFixed(2))
    let augAutoRatio = parseFloat((augAuto/augTotal*100).toFixed(2))
    let augPersonalRatio = parseFloat((augPersonal/augTotal*100).toFixed(2))
    let augHealthRatio = parseFloat((augHealth/augTotal*100).toFixed(2))
    let augHomeRatio = parseFloat((augHome/augTotal*100).toFixed(2))
    let augBillsRatio = parseFloat((augBills/augTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            aug
            <Pie 
            data={{
                labels: augData.labels,
                datasets: augData.datasets
            }}
            height = '90%'
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

            <h2>Recommendations</h2>
            {augFoodRatio > augFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {augAutoRatio > augAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {augPersonalRatio > augPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {augHealthRatio > augHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {augHomeRatio > augHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {augBillsRatio > augBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={augFoodPercent}
                onChange={(e) => setAugFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={augAutoPercent}
                onChange={(e) => setAugAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={augPersonalPercent}
                onChange={(e) => setAugPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={augHealthPercent}
                onChange={(e) => setAugHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={augHomePercent}
                onChange={(e) => setAugHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={augBillsPercent}
                onChange={(e) => setAugBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Aug 