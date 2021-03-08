import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Oct({octGoals, octExpenses, octFoodPercent, setOctFoodPercent, octAutoPercent, setOctAutoPercent, octPersonalPercent, setOctPersonalPercent, octHealthPercent, setOctHealthPercent, octHomePercent, setOctHomePercent, octBillsPercent, setOctBillsPercent}){
    // console.log(octGoals)
    // console.log(octExpenses)



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



    const [octData, setOctData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [octFood, octAuto, octPersonal, octHealth, octHome, octBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange']
        }]
    })

    
    let octFoodRatio = parseFloat((octFood/octTotal*100).toFixed(2))
    let octAutoRatio = parseFloat((octAuto/octTotal*100).toFixed(2))
    let octPersonalRatio = parseFloat((octPersonal/octTotal*100).toFixed(2))
    let octHealthRatio = parseFloat((octHealth/octTotal*100).toFixed(2))
    let octHomeRatio = parseFloat((octHome/octTotal*100).toFixed(2))
    let octBillsRatio = parseFloat((octBills/octTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            oct
            <Pie 
            data={{
                labels: octData.labels,
                datasets: octData.datasets
            }}
            height = '90%'
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

            <h2>Recommendations</h2>
            {octFoodRatio > octFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {octAutoRatio > octAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {octPersonalRatio > octPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {octHealthRatio > octHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {octHomeRatio > octHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {octBillsRatio > octBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={octFoodPercent}
                onChange={(e) => setOctFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={octAutoPercent}
                onChange={(e) => setOctAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={octPersonalPercent}
                onChange={(e) => setOctPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={octHealthPercent}
                onChange={(e) => setOctHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={octHomePercent}
                onChange={(e) => setOctHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={octBillsPercent}
                onChange={(e) => setOctBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Oct 