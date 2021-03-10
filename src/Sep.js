import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'


function Sep({sepGoals, sepExpenses, sepFoodPercent, setSepFoodPercent, sepAutoPercent, setSepAutoPercent, sepPersonalPercent, setSepPersonalPercent, sepHealthPercent, setSepHealthPercent, sepHomePercent, setSepHomePercent, sepBillsPercent, setSepBillsPercent}){
    // console.log(sepGoals)
    // console.log(sepExpenses)



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

    var options = {
        responsive: true,
        animation: {
            animateScale: true,
            duration: 3000
        },
        title: {
          display: true,
          position: "top",
          text: "September Pie Chart",
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



    const [sepData, setSepData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [sepFood, sepAuto, sepPersonal, sepHealth, sepHome, sepBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10

        }]
    })

    
    let sepFoodRatio = parseFloat((sepFood/sepTotal*100).toFixed(2))
    let sepAutoRatio = parseFloat((sepAuto/sepTotal*100).toFixed(2))
    let sepPersonalRatio = parseFloat((sepPersonal/sepTotal*100).toFixed(2))
    let sepHealthRatio = parseFloat((sepHealth/sepTotal*100).toFixed(2))
    let sepHomeRatio = parseFloat((sepHome/sepTotal*100).toFixed(2))
    let sepBillsRatio = parseFloat((sepBills/sepTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: sepData.labels,
                datasets: sepData.datasets
            }}
            options={options}
            height = '90%'
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

            <h2>Recommendations</h2>
            {sepFoodRatio > sepFoodPercent ? <p>You have gone over the recommended food spending for the month, consider adjusting your total budget or reducing the amount you spend on food this month! </p> : <p>You have stayed within average food spending limits this month!</p>}
            {sepAutoRatio > sepAutoPercent ? <p>You have gone over the recommended auto spending for the month, consider adjusting your total budget or reducing the amount you spend on auto this month! </p> : <p>You have stayed within average autospending limits this month!</p>}
            {sepPersonalRatio > sepPersonalPercent ? <p>You have gone over the recommended personal spending for the month, consider adjusting your total budget or reducing the amount you spend on personal this month! </p> : <p>You have stayed within average personal spending limits this month, good job!</p>}
            {sepHealthRatio > sepHealthPercent ? <p>You have gone over the recommended health spending for the month, consider adjusting your total budget or reducing the amount you spend on health this month! </p> : <p>You have stayed within average health spending limits this month, good job!</p>}
            {sepHomeRatio > sepHomePercent ? <p>You have gone over the recommended home spending for the month, consider adjusting your total budget or reducing the amount you spend on home this month! </p> : <p>You have stayed within average home spending limits this month, good job!</p>}
            {sepBillsRatio > sepBillsPercent ? <p>You have gone over the recommended bills spending for the month, consider adjusting your total budget or reducing the amount you spend on bills this month! </p> : <p>You have stayed within average bills spending limits this month, good job!</p>}

            <form >
                <h3>Change your recommendation constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food: </label>
                <input
                type="number"
                value={sepFoodPercent}
                onChange={(e) => setSepFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto: </label>
                <input
                type="number"
                value={sepAutoPercent}
                onChange={(e) => setSepAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal: </label>
                <input
                type="number"
                value={sepPersonalPercent}
                onChange={(e) => setSepPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health: </label>
                <input
                type="number"
                value={sepHealthPercent}
                onChange={(e) => setSepHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home: </label>
                <input
                type="number"
                value={sepHomePercent}
                onChange={(e) => setSepHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills: </label>
                <input
                type="number"
                value={sepBillsPercent}
                onChange={(e) => setSepBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            
        </div>
    )
}

export default Sep 