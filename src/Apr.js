import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Modal, Segment} from 'semantic-ui-react'


function Apr({aprGoals, aprExpenses, aprFoodPercent, setAprFoodPercent, aprAutoPercent, setAprAutoPercent, aprPersonalPercent, setAprPersonalPercent, aprHealthPercent, setAprHealthPercent, aprHomePercent, setAprHomePercent, aprBillsPercent, setAprBillsPercent}){
    // console.log(aprGoals)
    // console.log(aprExpenses)



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


    let aprFood = 0;
    let aprAuto = 0;
    let aprPersonal = 0;
    let aprHealth = 0;
    let aprHome = 0;
    let aprBills = 0;
    let aprTotal = 0;

    let aprGoalFood=0;
    let aprGoalAuto = 0;
    let aprGoalPersonal =0;
    let aprGoalHealth = 0;
    let aprGoalHome = 0;
    let aprGoalBills = 0;
    let aprGoalTotal = 0;
    

    for(let i = 0; i <aprExpenses.length; i++) {
        aprTotal += parseFloat(aprExpenses[i].price)
        if(aprExpenses[i].category === "Food") {
            aprFood += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Auto") {
            aprAuto += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Personal") {
            aprPersonal += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Health") {
            aprHealth += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Home") {
            aprHome += parseFloat(aprExpenses[i].price)
        }
        else if(aprExpenses[i].category === "Bills") {
            aprBills += parseFloat(aprExpenses[i].price)
        }

    }

    for (let j = 0; j <aprGoals.length; j++) {
        if(aprGoals[j].category === "Food") {
            aprGoalFood += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Auto") {
            aprGoalAuto += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Personal") {
            aprGoalPersonal += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Health") {
            aprGoalHealth += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Home") {
            aprGoalHome += parseFloat(aprGoals[j].budget)
        }
        else if(aprGoals[j].category === "Bills") {
            aprGoalBills += parseFloat(aprGoals[j].budget)
        }

        else if(aprGoals[j].category ==="All") {
            aprGoalTotal += parseFloat(aprGoals[j].budget)
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
          text: "April Pie Chart",
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


    const [aprData, setAprData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [aprFood, aprAuto, aprPersonal, aprHealth, aprHome, aprBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    
    let aprFoodRatio = parseFloat((aprFood/aprTotal*100).toFixed(2))
    let aprAutoRatio = parseFloat((aprAuto/aprTotal*100).toFixed(2))
    let aprPersonalRatio = parseFloat((aprPersonal/aprTotal*100).toFixed(2))
    let aprHealthRatio = parseFloat((aprHealth/aprTotal*100).toFixed(2))
    let aprHomeRatio = parseFloat((aprHome/aprTotal*100).toFixed(2))
    let aprBillsRatio = parseFloat((aprBills/aprTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: aprData.labels,
                datasets: aprData.datasets
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
                <label hmltFor ="food" >Food</label> <br></br>
                <input
                className="show"
                type="number"
                value={aprFoodPercent}
                onChange={(e) => setAprFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={aprAutoPercent}
                onChange={(e) => setAprAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={aprPersonalPercent}
                onChange={(e) => setAprPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={aprHealthPercent}
                onChange={(e) => setAprHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={aprHomePercent}
                onChange={(e) => setAprHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={aprBillsPercent}
                onChange={(e) => setAprBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${aprFood}, percentage of total spending: {parseFloat((aprFood/aprTotal*100).toFixed(2))} %, <strong>Goal: </strong>{aprGoalFood > 0? aprGoalFood : "Did not set a goal for this month"}</Card.Description>
            {aprGoalFood > 0?  <Card.Description>{(aprGoalFood > aprFood) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalFood - aprFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprFood-aprGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${aprAuto}, percentage of total spending: {parseFloat((aprAuto/aprTotal*100).toFixed(2))} % , <strong>Goal: </strong> {aprGoalAuto > 0? aprGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {aprGoalAuto > 0?  <Card.Description>{(aprGoalAuto > aprAuto) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalAuto - aprAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprAuto-aprGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${aprPersonal}, percentage of total spending: {parseFloat((aprPersonal/aprTotal*100).toFixed(2))} %,<strong> Goal: </strong>{aprGoalPersonal> 0? aprGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {aprGoalPersonal > 0?  <Card.Description>{(aprGoalPersonal > aprPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalPersonal - aprPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprPersonal-aprGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${aprHealth}, percentage of total spending: {parseFloat((aprHealth/aprTotal*100).toFixed(2))} % , <strong>Goal: </strong>{aprGoalHealth > 0? aprGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {aprGoalHealth > 0?  <Card.Description>{(aprGoalHealth > aprHealth) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalHealth - aprHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprHealth-aprGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${aprHome}, percentage of total spending: {parseFloat((aprHome/aprTotal*100).toFixed(2))} %, <strong>Goal: </strong>{aprGoalHome > 0? aprGoalHome : "Did not set a goal for this month"}</Card.Description>
            {aprGoalHome > 0?  <Card.Description>{(aprGoalHome > aprHome) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalHome - aprHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprHome-aprGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${aprBills}, percentage of total spending: {parseFloat((aprBills/aprTotal*100).toFixed(2))} %, <strong>Goal: </strong>{aprGoalBills > 0? aprGoalBills : "Did not set a goal for this month"}</Card.Description>
            {aprGoalBills > 0?  <Card.Description>{(aprGoalBills > aprBills) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalBills - aprBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprBills-aprGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${aprTotal}, <strong>Goal: </strong>{aprGoalTotal > 0? aprGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {aprGoalTotal > 0?  <Card.Description>{(aprGoalTotal > aprTotal) ? `You reached your goal this month, saving a total of ${parseFloat((aprGoalTotal - aprTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((aprTotal-aprGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {aprFoodRatio > aprFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {aprAutoRatio > aprAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {aprPersonalRatio > aprPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {aprHealthRatio > aprHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {aprHomeRatio > aprHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {aprBillsRatio > aprBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

            
            
        </div>
    )
}

export default Apr 