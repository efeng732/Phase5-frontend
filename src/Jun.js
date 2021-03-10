import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Jun({junGoals, junExpenses, junFoodPercent, setJunFoodPercent, junAutoPercent, setJunAutoPercent, junPersonalPercent, setJunPersonalPercent, junHealthPercent, setJunHealthPercent, junHomePercent, setJunHomePercent, junBillsPercent, setJunBillsPercent}){
    // console.log(junGoals)
    // console.log(junExpenses)



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


    let junFood = 0;
    let junAuto = 0;
    let junPersonal = 0;
    let junHealth = 0;
    let junHome = 0;
    let junBills = 0;
    let junTotal = 0;

    let junGoalFood=0;
    let junGoalAuto = 0;
    let junGoalPersonal =0;
    let junGoalHealth = 0;
    let junGoalHome = 0;
    let junGoalBills = 0;
    let junGoalTotal = 0;
    

    for(let i = 0; i <junExpenses.length; i++) {
        junTotal += parseFloat(junExpenses[i].price)
        if(junExpenses[i].category === "Food") {
            junFood += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Auto") {
            junAuto += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Personal") {
            junPersonal += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Health") {
            junHealth += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Home") {
            junHome += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Bills") {
            junBills += parseFloat(junExpenses[i].price)
        }

    }

    for (let j = 0; j <junGoals.length; j++) {
        if(junGoals[j].category === "Food") {
            junGoalFood += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Auto") {
            junGoalAuto += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Personal") {
            junGoalPersonal += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Health") {
            junGoalHealth += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Home") {
            junGoalHome += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Bills") {
            junGoalBills += parseFloat(junGoals[j].budget)
        }

        else if(junGoals[j].category ==="All") {
            junGoalTotal += parseFloat(junGoals[j].budget)
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
          text: "June Pie Chart",
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


    const [junData, setJunData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [junFood, junAuto, junPersonal, junHealth, junHome, junBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor:'white',
            hoverBackgroundColor:'white',
            hoverBorderWidth: 10
        }]
    })

    
    let junFoodRatio = parseFloat((junFood/junTotal*100).toFixed(2))
    let junAutoRatio = parseFloat((junAuto/junTotal*100).toFixed(2))
    let junPersonalRatio = parseFloat((junPersonal/junTotal*100).toFixed(2))
    let junHealthRatio = parseFloat((junHealth/junTotal*100).toFixed(2))
    let junHomeRatio = parseFloat((junHome/junTotal*100).toFixed(2))
    let junBillsRatio = parseFloat((junBills/junTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: junData.labels,
                datasets: junData.datasets
            }}
            options={options}
            height = '90%'
            />


            <h2>Breakdown for this month</h2>
            <br></br>

            <p>Food: ${junFood}, percentage of total: {parseFloat((junFood/junTotal*100).toFixed(2))} %, Goal: {junGoalFood > 0? junGoalFood : "Did not set a goal for this month"}</p>
            {junGoalFood > 0?  <p>{(junGoalFood > junFood) ? `You reached your goal this month, going under by a total of ${junGoalFood - junFood}` : `You failed to reach your goal this month, going over by a total of ${junFood-junGoalFood}`}</p> : null }
            <br></br>

            <p>Auto: ${junAuto}, percentage of total: {parseFloat((junAuto/junTotal*100).toFixed(2))} % , Goal: {junGoalAuto > 0? junGoalAuto : "Did not set a goal for this month"} </p>
            {junGoalAuto > 0?  <p>{(junGoalAuto > junAuto) ? `You reached your goal this month, going under by a total of ${junGoalAuto - junAuto}` : `You failed to reach your goal this month, going over by a total of ${junAuto-junGoalAuto}`}</p> : null }
            <br></br>

            <p>Personal: ${junPersonal}, percentage of total: {parseFloat((junPersonal/junTotal*100).toFixed(2))} %, Goal: {junGoalPersonal> 0? junGoalPersonal : "Did not set a goal for this month"}</p>
            {junGoalPersonal > 0?  <p>{(junGoalPersonal > junPersonal) ? `You reached your goal this month, going under by a total of ${junGoalPersonal - junPersonal}` : `You failed to reach your goal this month, going over by a total of ${junPersonal-junGoalPersonal}`}</p> : null }
            <br></br>

            <p>Health: ${junHealth}, percentage of total: {parseFloat((junHealth/junTotal*100).toFixed(2))} % , Goal: {junGoalHealth > 0? junGoalHealth : "Did not set a goal for this month"}</p>
             {junGoalHealth > 0?  <p>{(junGoalHealth > junHealth) ? `You reached your goal this month, going under by a total of ${junGoalHealth - junHealth}` : `You failed to reach your goal this month, going over by a total of ${junHealth-junGoalHealth}`}</p> : null }
            <br></br>

            <p>Home: ${junHome}, percentage of total: {parseFloat((junHome/junTotal*100).toFixed(2))} %, Goal: {junGoalHome > 0? junGoalHome : "Did not set a goal for this month"}</p>
            {junGoalHome > 0?  <p>{(junGoalHome > junHome) ? `You reached your goal this month, going under by a total of ${junGoalHome - junHome}` : `You failed to reach your goal this month, going over by a total of ${junHome-junGoalHome}`}</p> : null }
            <br></br>

            <p>Bills :${junBills}, percentage of total: {parseFloat((junBills/junTotal*100).toFixed(2))} %, Goal: {junGoalBills > 0? junGoalBills : "Did not set a goal for this month"}</p>
            {junGoalBills > 0?  <p>{(junGoalBills > junBills) ? `You reached your goal this month, going under by a total of ${junGoalBills - junBills}` : `You failed to reach your goal this month, going over by a total of ${junBills-junGoalBills}`}</p> : null }
            <br></br>

            <p>Total Spending:${junTotal}, Goal: {junGoalTotal > 0? junGoalTotal : "Did not set a goal for this month"}</p>
            {junGoalTotal > 0?  <p>{(junGoalTotal > junTotal) ? `You reached your goal this month, going under by a total of ${junGoalTotal - junTotal}` : `You failed to reach your goal this month, going over by a total of ${junTotal-junGoalTotal}`}</p> : null }
            <br></br>

            <h2>Recommendations</h2>
            {junFoodRatio > junFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {junAutoRatio > junAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {junPersonalRatio > junPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {junHealthRatio > junHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {junHomeRatio > junHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {junBillsRatio > junBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={junFoodPercent}
                onChange={(e) => setJunFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={junAutoPercent}
                onChange={(e) => setJunAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={junPersonalPercent}
                onChange={(e) => setJunPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={junHealthPercent}
                onChange={(e) => setJunHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={junHomePercent}
                onChange={(e) => setJunHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={junBillsPercent}
                onChange={(e) => setJunBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Jun 