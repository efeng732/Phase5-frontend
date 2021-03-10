import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Mar({marGoals, marExpenses, marFoodPercent, setMarFoodPercent, marAutoPercent, setMarAutoPercent, marPersonalPercent, setMarPersonalPercent, marHealthPercent, setMarHealthPercent, marHomePercent, setMarHomePercent, marBillsPercent, setMarBillsPercent}){
    // console.log(marGoals)
    // console.log(marExpenses)



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



    const [marData, setMarData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [marFood, marAuto, marPersonal, marHealth, marHome, marBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    var options = {
        responsive: true,
        animation: {
            animateScale: true,
            duration: 3000
        },
        title: {
          display: true,
          position: "top",
          text: "March Pie Chart",
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

    
    let marFoodRatio = parseFloat((marFood/marTotal*100).toFixed(2))
    let marAutoRatio = parseFloat((marAuto/marTotal*100).toFixed(2))
    let marPersonalRatio = parseFloat((marPersonal/marTotal*100).toFixed(2))
    let marHealthRatio = parseFloat((marHealth/marTotal*100).toFixed(2))
    let marHomeRatio = parseFloat((marHome/marTotal*100).toFixed(2))
    let marBillsRatio = parseFloat((marBills/marTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: marData.labels,
                datasets: marData.datasets
            }}
            options={options}
            height = '90%'
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

            <h2>Recommendations</h2>
            {marFoodRatio > marFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {marAutoRatio > marAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {marPersonalRatio > marPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {marHealthRatio > marHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {marHomeRatio > marHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {marBillsRatio > marBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={marFoodPercent}
                onChange={(e) => setMarFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={marAutoPercent}
                onChange={(e) => setMarAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={marPersonalPercent}
                onChange={(e) => setMarPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={marHealthPercent}
                onChange={(e) => setMarHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={marHomePercent}
                onChange={(e) => setMarHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={marBillsPercent}
                onChange={(e) => setMarBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Mar 