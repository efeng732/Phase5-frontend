import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import{Card, Modal, Button, Segment} from 'semantic-ui-react'


function Feb({febGoals, febExpenses, febFoodPercent, setFebFoodPercent, febAutoPercent, setFebAutoPercent, febPersonalPercent, setFebPersonalPercent, febHealthPercent, setFebHealthPercent, febHomePercent, setFebHomePercent, febBillsPercent, setFebBillsPercent}){
    // console.log(febGoals)
    // console.log(febExpenses)

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


    let febFood = 0;
    let febAuto = 0;
    let febPersonal = 0;
    let febHealth = 0;
    let febHome = 0;
    let febBills = 0;
    let febTotal = 0;

    let febGoalFood=0;
    let febGoalAuto = 0;
    let febGoalPersonal =0;
    let febGoalHealth = 0;
    let febGoalHome = 0;
    let febGoalBills = 0;
    let febGoalTotal = 0;
    

    for(let i = 0; i <febExpenses.length; i++) {
        febTotal += parseFloat(febExpenses[i].price)
        if(febExpenses[i].category === "Food") {
            febFood += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Auto") {
            febAuto += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Personal") {
            febPersonal += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Health") {
            febHealth += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Home") {
            febHome += parseFloat(febExpenses[i].price)
        }
        else if(febExpenses[i].category === "Bills") {
            febBills += parseFloat(febExpenses[i].price)
        }

    }

    for (let j = 0; j <febGoals.length; j++) {
        if(febGoals[j].category === "Food") {
            febGoalFood += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Auto") {
            febGoalAuto += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Personal") {
            febGoalPersonal += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Health") {
            febGoalHealth += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Home") {
            febGoalHome += parseFloat(febGoals[j].budget)
        }
        else if(febGoals[j].category === "Bills") {
            febGoalBills += parseFloat(febGoals[j].budget)
        }

        else if(febGoals[j].category ==="All") {
            febGoalTotal += parseFloat(febGoals[j].budget)
        }

        
    }



    const [febData, setFebData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [febFood, febAuto, febPersonal, febHealth, febHome, febBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    
    let febFoodRatio = parseFloat((febFood/febTotal*100).toFixed(2))
    let febAutoRatio = parseFloat((febAuto/febTotal*100).toFixed(2))
    let febPersonalRatio = parseFloat((febPersonal/febTotal*100).toFixed(2))
    let febHealthRatio = parseFloat((febHealth/febTotal*100).toFixed(2))
    let febHomeRatio = parseFloat((febHome/febTotal*100).toFixed(2))
    let febBillsRatio = parseFloat((febBills/febTotal*100).toFixed(2))

    var options = {
        responsive: true,
        animation: {
            animateScale: true,
            duration: 3000
        },
        title: {
          display: true,
          position: "top",
          text: "February Pie Chart",
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


    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: febData.labels,
                datasets: febData.datasets
            }}
            options={options}
            height = '90%'
            />
            <Modal basic onClose={() => setOpen(false)} onOpen={()=>setOpen(true)} 
            open={open} size="small" trigger={<Button color="green"> Change benchmarks</Button>}>
            <Segment inverted>
            <div className="newExpenseForm" >
            <form className="home" >
                <h3>Change your recommendation benchmarks! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food </label> <br></br>
                <input
                className="show"
                type="number"
                value={febFoodPercent}
                onChange={(e) => setFebFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={febAutoPercent}
                onChange={(e) => setFebAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={febPersonalPercent}
                onChange={(e) => setFebPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={febHealthPercent}
                onChange={(e) => setFebHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label>
                <br></br>
                <input
                className="show"
                type="number"
                value={febHomePercent}
                onChange={(e) => setFebHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={febBillsPercent}
                onChange={(e) => setFebBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${febFood}, percentage of total spending: {parseFloat((febFood/febTotal*100).toFixed(2))} %, <strong>Goal: </strong>{febGoalFood > 0? febGoalFood : "Did not set a goal for this month"}</Card.Description>
            {febGoalFood > 0?  <Card.Description>{(febGoalFood > febFood) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalFood - febFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febFood-febGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${febAuto}, percentage of total spending: {parseFloat((febAuto/febTotal*100).toFixed(2))} % , <strong>Goal: </strong> {febGoalAuto > 0? febGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {febGoalAuto > 0?  <Card.Description>{(febGoalAuto > febAuto) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalAuto - febAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febAuto-febGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${febPersonal}, percentage of total spending: {parseFloat((febPersonal/febTotal*100).toFixed(2))} %,<strong> Goal: </strong>{febGoalPersonal> 0? febGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {febGoalPersonal > 0?  <Card.Description>{(febGoalPersonal > febPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalPersonal - febPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febPersonal-febGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${febHealth}, percentage of total spending: {parseFloat((febHealth/febTotal*100).toFixed(2))} % , <strong>Goal: </strong>{febGoalHealth > 0? febGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {febGoalHealth > 0?  <Card.Description>{(febGoalHealth > febHealth) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalHealth - febHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febHealth-febGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${febHome}, percentage of total spending: {parseFloat((febHome/febTotal*100).toFixed(2))} %, <strong>Goal: </strong>{febGoalHome > 0? febGoalHome : "Did not set a goal for this month"}</Card.Description>
            {febGoalHome > 0?  <Card.Description>{(febGoalHome > febHome) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalHome - febHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febHome-febGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${febBills}, percentage of total spending: {parseFloat((febBills/febTotal*100).toFixed(2))} %, <strong>Goal: </strong>{febGoalBills > 0? febGoalBills : "Did not set a goal for this month"}</Card.Description>
            {febGoalBills > 0?  <Card.Description>{(febGoalBills > febBills) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalBills - febBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febBills-febGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${febTotal}, <strong>Goal: </strong>{febGoalTotal > 0? febGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {febGoalTotal > 0?  <Card.Description>{(febGoalTotal > febTotal) ? `You reached your goal this month, saving a total of ${parseFloat((febGoalTotal - febTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((febTotal-febGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {febFoodRatio > febFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {febAutoRatio > febAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {febPersonalRatio > febPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {febHealthRatio > febHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {febHomeRatio > febHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {febBillsRatio > febBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

            
            
        </div>
    )
}

export default Feb 