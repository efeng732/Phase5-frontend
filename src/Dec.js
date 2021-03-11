import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Segment, Modal} from 'semantic-ui-react'


function Dec({decGoals, decExpenses, decFoodPercent, setDecFoodPercent, decAutoPercent, setDecAutoPercent, decPersonalPercent, setDecPersonalPercent, decHealthPercent, setDecHealthPercent, decHomePercent, setDecHomePercent, decBillsPercent, setDecBillsPercent}){
    // console.log(decGoals)
    // console.log(decExpenses)


    const[open, setOpen] = useState(false)

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

<Modal basic onClose={() => setOpen(false)} onOpen={()=>setOpen(true)} 
            open={open} size="small" trigger={<Button color="green"> Change benchmarks</Button>}>
            <Segment inverted>
            <div className="newExpenseForm">
            <form className="home">
                <h3>Change your recommendation benchmarks! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food </label> <br></br>
                <input
                className="show"
                className="show"
                type="number"
                value={decFoodPercent}
                onChange={(e) => setDecFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={decAutoPercent}
                onChange={(e) => setDecAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={decPersonalPercent}
                onChange={(e) => setDecPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={decHealthPercent}
                onChange={(e) => setDecHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={decHomePercent}
                onChange={(e) => setDecHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={decBillsPercent}
                onChange={(e) => setDecBillsPercent(e.target.value)}
                />
                <br></br>

                
            </form>
            </div>
            </Segment>
            </Modal>

            <Card.Group itemsPerRow={2}>
                <Card className="breakdown">

            <Card.Header textAlign='center' as='h2'>Breakdown for this month</Card.Header>
            <br></br>

            <Card.Description><strong>Food: </strong> ${decFood}, percentage of total spending: {parseFloat((decFood/decTotal*100).toFixed(2))} %, <strong>Goal: </strong>{decGoalFood > 0? decGoalFood : "Did not set a goal for this month"}</Card.Description>
            {decGoalFood > 0?  <Card.Description>{(decGoalFood > decFood) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalFood - decFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decFood-decGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${decAuto}, percentage of total spending: {parseFloat((decAuto/decTotal*100).toFixed(2))} % , <strong>Goal: </strong> {decGoalAuto > 0? decGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {decGoalAuto > 0?  <Card.Description>{(decGoalAuto > decAuto) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalAuto - decAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decAuto-decGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${decPersonal}, percentage of total spending: {parseFloat((decPersonal/decTotal*100).toFixed(2))} %,<strong> Goal: </strong>{decGoalPersonal> 0? decGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {decGoalPersonal > 0?  <Card.Description>{(decGoalPersonal > decPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalPersonal - decPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decPersonal-decGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${decHealth}, percentage of total spending: {parseFloat((decHealth/decTotal*100).toFixed(2))} % , <strong>Goal: </strong>{decGoalHealth > 0? decGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {decGoalHealth > 0?  <Card.Description>{(decGoalHealth > decHealth) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalHealth - decHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decHealth-decGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${decHome}, percentage of total spending: {parseFloat((decHome/decTotal*100).toFixed(2))} %, <strong>Goal: </strong>{decGoalHome > 0? decGoalHome : "Did not set a goal for this month"}</Card.Description>
            {decGoalHome > 0?  <Card.Description>{(decGoalHome > decHome) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalHome - decHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decHome-decGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${decBills}, percentage of total spending: {parseFloat((decBills/decTotal*100).toFixed(2))} %, <strong>Goal: </strong>{decGoalBills > 0? decGoalBills : "Did not set a goal for this month"}</Card.Description>
            {decGoalBills > 0?  <Card.Description>{(decGoalBills > decBills) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalBills - decBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decBills-decGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${decTotal}, <strong>Goal: </strong>{decGoalTotal > 0? decGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {decGoalTotal > 0?  <Card.Description>{(decGoalTotal > decTotal) ? `You reached your goal this month, saving a total of ${parseFloat((decGoalTotal - decTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((decTotal-decGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {decFoodRatio > decFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {decAutoRatio > decAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {decPersonalRatio > decPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {decHealthRatio > decHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {decHomeRatio > decHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {decBillsRatio > decBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

            
        </div>
    )
}

export default Dec 