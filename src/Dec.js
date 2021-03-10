import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Dec({decGoals, decExpenses, decFoodPercent, setDecFoodPercent, decAutoPercent, setDecAutoPercent, decPersonalPercent, setDecPersonalPercent, decHealthPercent, setDecHealthPercent, decHomePercent, setDecHomePercent, decBillsPercent, setDecBillsPercent}){
    // console.log(decGoals)
    // console.log(decExpenses)



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


    let decFood = 0;
    let decAuto = 0;
    let decPersonal = 0;
    let decHealth = 0;
    let decHome = 0;
    let decBills = 0;
    let decTotal = 0;

    let decGoalFood=0;
    let decGoalAuto = 0;
    let decGoalPersonal =0;
    let decGoalHealth = 0;
    let decGoalHome = 0;
    let decGoalBills = 0;
    let decGoalTotal = 0;
    

    for(let i = 0; i <decExpenses.length; i++) {
        decTotal += parseFloat(decExpenses[i].price)
        if(decExpenses[i].category === "Food") {
            decFood += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Auto") {
            decAuto += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Personal") {
            decPersonal += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Health") {
            decHealth += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Home") {
            decHome += parseFloat(decExpenses[i].price)
        }
        else if(decExpenses[i].category === "Bills") {
            decBills += parseFloat(decExpenses[i].price)
        }

    }

    for (let j = 0; j <decGoals.length; j++) {
        if(decGoals[j].category === "Food") {
            decGoalFood += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Auto") {
            decGoalAuto += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Personal") {
            decGoalPersonal += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Health") {
            decGoalHealth += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Home") {
            decGoalHome += parseFloat(decGoals[j].budget)
        }
        else if(decGoals[j].category === "Bills") {
            decGoalBills += parseFloat(decGoals[j].budget)
        }

        else if(decGoals[j].category ==="All") {
            decGoalTotal += parseFloat(decGoals[j].budget)
        }

        
    }

    var options = {
        responsive: true,
        animation: {
            animateScale: true,
            duration: 3000
        },
        title: {
          display: true,
          position: "top",
          text: "December Pie Chart",
          fontSize: 24,
          fontColor: "#111"
        },
        legend: {
          display: true,
          position: "top",
          labels: {
            fontColor: "#111",
            fontSize: 18,
          }
        }
      }


    const [decData, setDecData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [decFood, decAuto, decPersonal, decHealth, decHome, decBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    
    let decFoodRatio = parseFloat((decFood/decTotal*100).toFixed(2))
    let decAutoRatio = parseFloat((decAuto/decTotal*100).toFixed(2))
    let decPersonalRatio = parseFloat((decPersonal/decTotal*100).toFixed(2))
    let decHealthRatio = parseFloat((decHealth/decTotal*100).toFixed(2))
    let decHomeRatio = parseFloat((decHome/decTotal*100).toFixed(2))
    let decBillsRatio = parseFloat((decBills/decTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
        
            <Pie 
            data={{
                labels: decData.labels,
                datasets: decData.datasets
            }}
            options={options}
            height = '90%'
            />


            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${decFood}, percentage of total: {parseFloat((decFood/decTotal*100).toFixed(2))} %, Goal: {decGoalFood > 0? decGoalFood : "Did not set a goal for this month"}</p>
            {decGoalFood > 0?  <p>{(decGoalFood > decFood) ? `You reached your goal this month, going under by a total of ${decGoalFood - decFood}` : `You failed to reach your goal this month, going over by a total of ${decFood-decGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${decAuto}, percentage of total: {parseFloat((decAuto/decTotal*100).toFixed(2))} % , Goal: {decGoalAuto > 0? decGoalAuto : "Did not set a goal for this month"} </p>
            {decGoalAuto > 0?  <p>{(decGoalAuto > decAuto) ? `You reached your goal this month, going under by a total of ${decGoalAuto - decAuto}` : `You failed to reach your goal this month, going over by a total of ${decAuto-decGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${decPersonal}, percentage of total: {parseFloat((decPersonal/decTotal*100).toFixed(2))} %, Goal: {decGoalPersonal> 0? decGoalPersonal : "Did not set a goal for this month"}</p>
            {decGoalPersonal > 0?  <p>{(decGoalPersonal > decPersonal) ? `You reached your goal this month, going under by a total of ${decGoalPersonal - decPersonal}` : `You failed to reach your goal this month, going over by a total of ${decPersonal-decGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${decHealth}, percentage of total: {parseFloat((decHealth/decTotal*100).toFixed(2))} % , Goal: {decGoalHealth > 0? decGoalHealth : "Did not set a goal for this month"}</p>
             {decGoalHealth > 0?  <p>{(decGoalHealth > decHealth) ? `You reached your goal this month, going under by a total of ${decGoalHealth - decHealth}` : `You failed to reach your goal this month, going over by a total of ${decHealth-decGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${decHome}, percentage of total: {parseFloat((decHome/decTotal*100).toFixed(2))} %, Goal: {decGoalHome > 0? decGoalHome : "Did not set a goal for this month"}</p>
            {decGoalHome > 0?  <p>{(decGoalHome > decHome) ? `You reached your goal this month, going under by a total of ${decGoalHome - decHome}` : `You failed to reach your goal this month, going over by a total of ${decHome-decGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${decBills}, percentage of total: {parseFloat((decBills/decTotal*100).toFixed(2))} %, Goal: {decGoalBills > 0? decGoalBills : "Did not set a goal for this month"}</p>
            {decGoalBills > 0?  <p>{(decGoalBills > decBills) ? `You reached your goal this month, going under by a total of ${decGoalBills - decBills}` : `You failed to reach your goal this month, going over by a total of ${decBills-decGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${decTotal}, Goal: {decGoalTotal > 0? decGoalTotal : "Did not set a goal for this month"}</p>
            {decGoalTotal > 0?  <p>{(decGoalTotal > decTotal) ? `You reached your goal this month, going under by a total of ${decGoalTotal - decTotal}` : `You failed to reach your goal this month, going over by a total of ${decTotal-decGoalTotal}`}</p> : null }
            <br></br>

            <h2>Recommendations</h2>
            {decFoodRatio > decFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {decAutoRatio > decAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {decPersonalRatio > decPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {decHealthRatio > decHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {decHomeRatio > decHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {decBillsRatio > decBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={decFoodPercent}
                onChange={(e) => setDecFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={decAutoPercent}
                onChange={(e) => setDecAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={decPersonalPercent}
                onChange={(e) => setDecPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={decHealthPercent}
                onChange={(e) => setDecHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={decHomePercent}
                onChange={(e) => setDecHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={decBillsPercent}
                onChange={(e) => setDecBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Dec 