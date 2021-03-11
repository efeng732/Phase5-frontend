import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Segment, Modal } from 'semantic-ui-react'


function Nov({novGoals, novExpenses, novFoodPercent, setNovFoodPercent, novAutoPercent, setNovAutoPercent, novPersonalPercent, setNovPersonalPercent, novHealthPercent, setNovHealthPercent, novHomePercent, setNovHomePercent, novBillsPercent, setNovBillsPercent}){
    // console.log(novGoals)
    // console.log(novExpenses)

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

<Modal basic onClose={() => setOpen(false)} onOpen={()=>setOpen(true)} 
            open={open} size="small" trigger={<Button color="green"> Change benchmarks</Button>}>
            <Segment inverted>
            <div className="newExpenseForm">
            <form className="home" >
                <h3>Change your recommendation benchmarks! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food </label> <br></br>
                <input
                className="show"
                type="number"
                value={novFoodPercent}
                onChange={(e) => setNovFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={novAutoPercent}
                onChange={(e) => setNovAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={novPersonalPercent}
                onChange={(e) => setNovPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={novHealthPercent}
                onChange={(e) => setNovHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home  </label> <br></br>
                <input
                className="show"
                type="number"
                value={novHomePercent}
                onChange={(e) => setNovHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={novBillsPercent}
                onChange={(e) => setNovBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${novFood}, percentage of total spending: {parseFloat((novFood/novTotal*100).toFixed(2))} %, <strong>Goal: </strong>{novGoalFood > 0? novGoalFood : "Did not set a goal for this month"}</Card.Description>
            {novGoalFood > 0?  <Card.Description>{(novGoalFood > novFood) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalFood - novFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novFood-novGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${novAuto}, percentage of total spending: {parseFloat((novAuto/novTotal*100).toFixed(2))} % , <strong>Goal: </strong> {novGoalAuto > 0? novGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {novGoalAuto > 0?  <Card.Description>{(novGoalAuto > novAuto) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalAuto - novAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novAuto-novGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${novPersonal}, percentage of total spending: {parseFloat((novPersonal/novTotal*100).toFixed(2))} %,<strong> Goal: </strong>{novGoalPersonal> 0? novGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {novGoalPersonal > 0?  <Card.Description>{(novGoalPersonal > novPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalPersonal - novPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novPersonal-novGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${novHealth}, percentage of total spending: {parseFloat((novHealth/novTotal*100).toFixed(2))} % , <strong>Goal: </strong>{novGoalHealth > 0? novGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {novGoalHealth > 0?  <Card.Description>{(novGoalHealth > novHealth) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalHealth - novHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novHealth-novGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${novHome}, percentage of total spending: {parseFloat((novHome/novTotal*100).toFixed(2))} %, <strong>Goal: </strong>{novGoalHome > 0? novGoalHome : "Did not set a goal for this month"}</Card.Description>
            {novGoalHome > 0?  <Card.Description>{(novGoalHome > novHome) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalHome - novHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novHome-novGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${novBills}, percentage of total spending: {parseFloat((novBills/novTotal*100).toFixed(2))} %, <strong>Goal: </strong>{novGoalBills > 0? novGoalBills : "Did not set a goal for this month"}</Card.Description>
            {novGoalBills > 0?  <Card.Description>{(novGoalBills > novBills) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalBills - novBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novBills-novGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${novTotal}, <strong>Goal: </strong>{novGoalTotal > 0? novGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {novGoalTotal > 0?  <Card.Description>{(novGoalTotal > novTotal) ? `You reached your goal this month, saving a total of ${parseFloat((novGoalTotal - novTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((novTotal-novGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {novFoodRatio > novFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {novAutoRatio > novAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {novPersonalRatio > novPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {novHealthRatio > novHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {novHomeRatio > novHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {novBillsRatio > novBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

           
            
        </div>
    )
}

export default Nov 