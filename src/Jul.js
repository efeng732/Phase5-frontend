import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Modal, Button, Segment} from 'semantic-ui-react'


function Jul({julGoals, julExpenses, julFoodPercent, setJulFoodPercent, julAutoPercent, setJulAutoPercent, julPersonalPercent, setJulPersonalPercent, julHealthPercent, setJulHealthPercent, julHomePercent, setJulHomePercent, julBillsPercent, setJulBillsPercent}){
    // console.log(julGoals)
    // console.log(julExpenses)

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


    let julFood = 0;
    let julAuto = 0;
    let julPersonal = 0;
    let julHealth = 0;
    let julHome = 0;
    let julBills = 0;
    let julTotal = 0;

    let julGoalFood=0;
    let julGoalAuto = 0;
    let julGoalPersonal =0;
    let julGoalHealth = 0;
    let julGoalHome = 0;
    let julGoalBills = 0;
    let julGoalTotal = 0;
    

    for(let i = 0; i <julExpenses.length; i++) {
        julTotal += parseFloat(julExpenses[i].price)
        if(julExpenses[i].category === "Food") {
            julFood += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Auto") {
            julAuto += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Personal") {
            julPersonal += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Health") {
            julHealth += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Home") {
            julHome += parseFloat(julExpenses[i].price)
        }
        else if(julExpenses[i].category === "Bills") {
            julBills += parseFloat(julExpenses[i].price)
        }

    }

    for (let j = 0; j <julGoals.length; j++) {
        if(julGoals[j].category === "Food") {
            julGoalFood += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Auto") {
            julGoalAuto += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Personal") {
            julGoalPersonal += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Health") {
            julGoalHealth += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Home") {
            julGoalHome += parseFloat(julGoals[j].budget)
        }
        else if(julGoals[j].category === "Bills") {
            julGoalBills += parseFloat(julGoals[j].budget)
        }

        else if(julGoals[j].category ==="All") {
            julGoalTotal += parseFloat(julGoals[j].budget)
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
          text: "July Pie Chart",
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


    const [julData, setJulData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [julFood, julAuto, julPersonal, julHealth, julHome, julBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor:'white',
            hoverBorderWidth: 10
        }]
    })

    
    let julFoodRatio = parseFloat((julFood/julTotal*100).toFixed(2))
    let julAutoRatio = parseFloat((julAuto/julTotal*100).toFixed(2))
    let julPersonalRatio = parseFloat((julPersonal/julTotal*100).toFixed(2))
    let julHealthRatio = parseFloat((julHealth/julTotal*100).toFixed(2))
    let julHomeRatio = parseFloat((julHome/julTotal*100).toFixed(2))
    let julBillsRatio = parseFloat((julBills/julTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: julData.labels,
                datasets: julData.datasets
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
                type="number"
                value={julFoodPercent}
                onChange={(e) => setJulFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={julAutoPercent}
                onChange={(e) => setJulAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={julPersonalPercent}
                onChange={(e) => setJulPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={julHealthPercent}
                onChange={(e) => setJulHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={julHomePercent}
                onChange={(e) => setJulHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={julBillsPercent}
                onChange={(e) => setJulBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${julFood}, percentage of total spending: {parseFloat((julFood/julTotal*100).toFixed(2))} %, <strong>Goal: </strong>{julGoalFood > 0? julGoalFood : "Did not set a goal for this month"}</Card.Description>
            {julGoalFood > 0?  <Card.Description>{(julGoalFood > julFood) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalFood - julFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julFood-julGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${julAuto}, percentage of total spending: {parseFloat((julAuto/julTotal*100).toFixed(2))} % , <strong>Goal: </strong> {julGoalAuto > 0? julGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {julGoalAuto > 0?  <Card.Description>{(julGoalAuto > julAuto) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalAuto - julAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julAuto-julGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${julPersonal}, percentage of total spending: {parseFloat((julPersonal/julTotal*100).toFixed(2))} %,<strong> Goal: </strong>{julGoalPersonal> 0? julGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {julGoalPersonal > 0?  <Card.Description>{(julGoalPersonal > julPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalPersonal - julPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julPersonal-julGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${julHealth}, percentage of total spending: {parseFloat((julHealth/julTotal*100).toFixed(2))} % , <strong>Goal: </strong>{julGoalHealth > 0? julGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {julGoalHealth > 0?  <Card.Description>{(julGoalHealth > julHealth) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalHealth - julHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julHealth-julGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${julHome}, percentage of total spending: {parseFloat((julHome/julTotal*100).toFixed(2))} %, <strong>Goal: </strong>{julGoalHome > 0? julGoalHome : "Did not set a goal for this month"}</Card.Description>
            {julGoalHome > 0?  <Card.Description>{(julGoalHome > julHome) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalHome - julHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julHome-julGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${julBills}, percentage of total spending: {parseFloat((julBills/julTotal*100).toFixed(2))} %, <strong>Goal: </strong>{julGoalBills > 0? julGoalBills : "Did not set a goal for this month"}</Card.Description>
            {julGoalBills > 0?  <Card.Description>{(julGoalBills > julBills) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalBills - julBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julBills-julGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${julTotal}, <strong>Goal: </strong>{julGoalTotal > 0? julGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {julGoalTotal > 0?  <Card.Description>{(julGoalTotal > julTotal) ? `You reached your goal this month, saving a total of ${parseFloat((julGoalTotal - julTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((julTotal-julGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {julFoodRatio > julFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {julAutoRatio > julAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {julPersonalRatio > julPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {julHealthRatio > julHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {julHomeRatio > julHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {julBillsRatio > julBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

            
            
        </div>
    )
}

export default Jul 