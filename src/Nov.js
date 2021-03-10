import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Nov({novGoals, novExpenses, novFoodPercent, setNovFoodPercent, novAutoPercent, setNovAutoPercent, novPersonalPercent, setNovPersonalPercent, novHealthPercent, setNovHealthPercent, novHomePercent, setNovHomePercent, novBillsPercent, setNovBillsPercent}){
    // console.log(novGoals)
    // console.log(novExpenses)



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


    let novFood = 0;
    let novAuto = 0;
    let novPersonal = 0;
    let novHealth = 0;
    let novHome = 0;
    let novBills = 0;
    let novTotal = 0;

    let novGoalFood=0;
    let novGoalAuto = 0;
    let novGoalPersonal =0;
    let novGoalHealth = 0;
    let novGoalHome = 0;
    let novGoalBills = 0;
    let novGoalTotal = 0;
    

    for(let i = 0; i <novExpenses.length; i++) {
        novTotal += parseFloat(novExpenses[i].price)
        if(novExpenses[i].category === "Food") {
            novFood += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Auto") {
            novAuto += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Personal") {
            novPersonal += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Health") {
            novHealth += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Home") {
            novHome += parseFloat(novExpenses[i].price)
        }
        else if(novExpenses[i].category === "Bills") {
            novBills += parseFloat(novExpenses[i].price)
        }

    }

    for (let j = 0; j <novGoals.length; j++) {
        if(novGoals[j].category === "Food") {
            novGoalFood += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Auto") {
            novGoalAuto += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Personal") {
            novGoalPersonal += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Health") {
            novGoalHealth += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Home") {
            novGoalHome += parseFloat(novGoals[j].budget)
        }
        else if(novGoals[j].category === "Bills") {
            novGoalBills += parseFloat(novGoals[j].budget)
        }

        else if(novGoals[j].category ==="All") {
            novGoalTotal += parseFloat(novGoals[j].budget)
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
          text: "November Pie Chart",
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


    const [novData, setNovData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [novFood, novAuto, novPersonal, novHealth, novHome, novBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor:'white',
            hoverBorderWidth: 10
        }]
    })

    
    let novFoodRatio = parseFloat((novFood/novTotal*100).toFixed(2))
    let novAutoRatio = parseFloat((novAuto/novTotal*100).toFixed(2))
    let novPersonalRatio = parseFloat((novPersonal/novTotal*100).toFixed(2))
    let novHealthRatio = parseFloat((novHealth/novTotal*100).toFixed(2))
    let novHomeRatio = parseFloat((novHome/novTotal*100).toFixed(2))
    let novBillsRatio = parseFloat((novBills/novTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: novData.labels,
                datasets: novData.datasets
            }}
            height = '90%'
            options={options}
            />


            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${novFood}, percentage of total: {parseFloat((novFood/novTotal*100).toFixed(2))} %, Goal: {novGoalFood > 0? novGoalFood : "Did not set a goal for this month"}</p>
            {novGoalFood > 0?  <p>{(novGoalFood > novFood) ? `You reached your goal this month, going under by a total of ${novGoalFood - novFood}` : `You failed to reach your goal this month, going over by a total of ${novFood-novGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${novAuto}, percentage of total: {parseFloat((novAuto/novTotal*100).toFixed(2))} % , Goal: {novGoalAuto > 0? novGoalAuto : "Did not set a goal for this month"} </p>
            {novGoalAuto > 0?  <p>{(novGoalAuto > novAuto) ? `You reached your goal this month, going under by a total of ${novGoalAuto - novAuto}` : `You failed to reach your goal this month, going over by a total of ${novAuto-novGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${novPersonal}, percentage of total: {parseFloat((novPersonal/novTotal*100).toFixed(2))} %, Goal: {novGoalPersonal> 0? novGoalPersonal : "Did not set a goal for this month"}</p>
            {novGoalPersonal > 0?  <p>{(novGoalPersonal > novPersonal) ? `You reached your goal this month, going under by a total of ${novGoalPersonal - novPersonal}` : `You failed to reach your goal this month, going over by a total of ${novPersonal-novGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${novHealth}, percentage of total: {parseFloat((novHealth/novTotal*100).toFixed(2))} % , Goal: {novGoalHealth > 0? novGoalHealth : "Did not set a goal for this month"}</p>
             {novGoalHealth > 0?  <p>{(novGoalHealth > novHealth) ? `You reached your goal this month, going under by a total of ${novGoalHealth - novHealth}` : `You failed to reach your goal this month, going over by a total of ${novHealth-novGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${novHome}, percentage of total: {parseFloat((novHome/novTotal*100).toFixed(2))} %, Goal: {novGoalHome > 0? novGoalHome : "Did not set a goal for this month"}</p>
            {novGoalHome > 0?  <p>{(novGoalHome > novHome) ? `You reached your goal this month, going under by a total of ${novGoalHome - novHome}` : `You failed to reach your goal this month, going over by a total of ${novHome-novGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${novBills}, percentage of total: {parseFloat((novBills/novTotal*100).toFixed(2))} %, Goal: {novGoalBills > 0? novGoalBills : "Did not set a goal for this month"}</p>
            {novGoalBills > 0?  <p>{(novGoalBills > novBills) ? `You reached your goal this month, going under by a total of ${novGoalBills - novBills}` : `You failed to reach your goal this month, going over by a total of ${novBills-novGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${novTotal}, Goal: {novGoalTotal > 0? novGoalTotal : "Did not set a goal for this month"}</p>
            {novGoalTotal > 0?  <p>{(novGoalTotal > novTotal) ? `You reached your goal this month, going under by a total of ${novGoalTotal - novTotal}` : `You failed to reach your goal this month, going over by a total of ${novTotal-novGoalTotal}`}</p> : null }
            <br></br>

            <h2>Recommendations</h2>
            {novFoodRatio > novFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {novAutoRatio > novAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {novPersonalRatio > novPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {novHealthRatio > novHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {novHomeRatio > novHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {novBillsRatio > novBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={novFoodPercent}
                onChange={(e) => setNovFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={novAutoPercent}
                onChange={(e) => setNovAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={novPersonalPercent}
                onChange={(e) => setNovPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={novHealthPercent}
                onChange={(e) => setNovHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={novHomePercent}
                onChange={(e) => setNovHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={novBillsPercent}
                onChange={(e) => setNovBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Nov 