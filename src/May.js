import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Modal, Segment, Button} from 'semantic-ui-react'


function May({mayGoals, mayExpenses, mayFoodPercent, setMayFoodPercent, mayAutoPercent, setMayAutoPercent, mayPersonalPercent, setMayPersonalPercent, mayHealthPercent, setMayHealthPercent, mayHomePercent, setMayHomePercent, mayBillsPercent, setMayBillsPercent}){
    // console.log(mayGoals)
    // console.log(mayExpenses)

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


    let mayFood = 0;
    let mayAuto = 0;
    let mayPersonal = 0;
    let mayHealth = 0;
    let mayHome = 0;
    let mayBills = 0;
    let mayTotal = 0;

    let mayGoalFood=0;
    let mayGoalAuto = 0;
    let mayGoalPersonal =0;
    let mayGoalHealth = 0;
    let mayGoalHome = 0;
    let mayGoalBills = 0;
    let mayGoalTotal = 0;
    

    for(let i = 0; i <mayExpenses.length; i++) {
        mayTotal += parseFloat(mayExpenses[i].price)
        if(mayExpenses[i].category === "Food") {
            mayFood += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Auto") {
            mayAuto += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Personal") {
            mayPersonal += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Health") {
            mayHealth += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Home") {
            mayHome += parseFloat(mayExpenses[i].price)
        }
        else if(mayExpenses[i].category === "Bills") {
            mayBills += parseFloat(mayExpenses[i].price)
        }

    }

    for (let j = 0; j <mayGoals.length; j++) {
        if(mayGoals[j].category === "Food") {
            mayGoalFood += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Auto") {
            mayGoalAuto += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Personal") {
            mayGoalPersonal += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Health") {
            mayGoalHealth += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Home") {
            mayGoalHome += parseFloat(mayGoals[j].budget)
        }
        else if(mayGoals[j].category === "Bills") {
            mayGoalBills += parseFloat(mayGoals[j].budget)
        }

        else if(mayGoals[j].category ==="All") {
            mayGoalTotal += parseFloat(mayGoals[j].budget)
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
          text: "May Pie Chart",
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



    const [mayData, setMayData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [mayFood, mayAuto, mayPersonal, mayHealth, mayHome, mayBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    
    let mayFoodRatio = parseFloat((mayFood/mayTotal*100).toFixed(2))
    let mayAutoRatio = parseFloat((mayAuto/mayTotal*100).toFixed(2))
    let mayPersonalRatio = parseFloat((mayPersonal/mayTotal*100).toFixed(2))
    let mayHealthRatio = parseFloat((mayHealth/mayTotal*100).toFixed(2))
    let mayHomeRatio = parseFloat((mayHome/mayTotal*100).toFixed(2))
    let mayBillsRatio = parseFloat((mayBills/mayTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: mayData.labels,
                datasets: mayData.datasets
            }}
            options={options}
            height = '90%'
            />
            <Modal basic onClose={() => setOpen(false)} onOpen={()=>setOpen(true)} 
            open={open} size="small" trigger={<Button color="green"> Change benchmarks</Button>}>
            <Segment inverted>
            <div className="newExpenseForm" >
            <form className="home">
                <h3>Change your recommendation benchmarks! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food </label> <br></br>
                <input
                className="show"
                type="number"
                value={mayFoodPercent}
                onChange={(e) => setMayFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={mayAutoPercent}
                onChange={(e) => setMayAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={mayPersonalPercent}
                onChange={(e) => setMayPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={mayHealthPercent}
                onChange={(e) => setMayHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={mayHomePercent}
                onChange={(e) => setMayHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills  </label> <br></br>
                <input
                className="show"
                type="number"
                value={mayBillsPercent}
                onChange={(e) => setMayBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${mayFood}, percentage of total spending: {parseFloat((mayFood/mayTotal*100).toFixed(2))} %, <strong>Goal: </strong>{mayGoalFood > 0? mayGoalFood : "Did not set a goal for this month"}</Card.Description>
            {mayGoalFood > 0?  <Card.Description>{(mayGoalFood > mayFood) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalFood - mayFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayFood-mayGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${mayAuto}, percentage of total spending: {parseFloat((mayAuto/mayTotal*100).toFixed(2))} % , <strong>Goal: </strong> {mayGoalAuto > 0? mayGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {mayGoalAuto > 0?  <Card.Description>{(mayGoalAuto > mayAuto) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalAuto - mayAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayAuto-mayGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${mayPersonal}, percentage of total spending: {parseFloat((mayPersonal/mayTotal*100).toFixed(2))} %,<strong> Goal: </strong>{mayGoalPersonal> 0? mayGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {mayGoalPersonal > 0?  <Card.Description>{(mayGoalPersonal > mayPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalPersonal - mayPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayPersonal-mayGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${mayHealth}, percentage of total spending: {parseFloat((mayHealth/mayTotal*100).toFixed(2))} % , <strong>Goal: </strong>{mayGoalHealth > 0? mayGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {mayGoalHealth > 0?  <Card.Description>{(mayGoalHealth > mayHealth) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalHealth - mayHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayHealth-mayGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${mayHome}, percentage of total spending: {parseFloat((mayHome/mayTotal*100).toFixed(2))} %, <strong>Goal: </strong>{mayGoalHome > 0? mayGoalHome : "Did not set a goal for this month"}</Card.Description>
            {mayGoalHome > 0?  <Card.Description>{(mayGoalHome > mayHome) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalHome - mayHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayHome-mayGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${mayBills}, percentage of total spending: {parseFloat((mayBills/mayTotal*100).toFixed(2))} %, <strong>Goal: </strong>{mayGoalBills > 0? mayGoalBills : "Did not set a goal for this month"}</Card.Description>
            {mayGoalBills > 0?  <Card.Description>{(mayGoalBills > mayBills) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalBills - mayBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayBills-mayGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${mayTotal}, <strong>Goal: </strong>{mayGoalTotal > 0? mayGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {mayGoalTotal > 0?  <Card.Description>{(mayGoalTotal > mayTotal) ? `You reached your goal this month, saving a total of ${parseFloat((mayGoalTotal - mayTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((mayTotal-mayGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {mayFoodRatio > mayFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {mayAutoRatio > mayAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {mayPersonalRatio > mayPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {mayHealthRatio > mayHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {mayHomeRatio > mayHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {mayBillsRatio > mayBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

            
            
        </div>
    )
}

export default May 