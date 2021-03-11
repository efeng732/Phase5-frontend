import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Modal, Segment} from 'semantic-ui-react'


function Aug({augGoals, augExpenses, augFoodPercent, setAugFoodPercent, augAutoPercent, setAugAutoPercent, augPersonalPercent, setAugPersonalPercent, augHealthPercent, setAugHealthPercent, augHomePercent, setAugHomePercent, augBillsPercent, setAugBillsPercent}){
    // console.log(augGoals)
    // console.log(augExpenses)
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


    let augFood = 0;
    let augAuto = 0;
    let augPersonal = 0;
    let augHealth = 0;
    let augHome = 0;
    let augBills = 0;
    let augTotal = 0;

    let augGoalFood=0;
    let augGoalAuto = 0;
    let augGoalPersonal =0;
    let augGoalHealth = 0;
    let augGoalHome = 0;
    let augGoalBills = 0;
    let augGoalTotal = 0;
    

    for(let i = 0; i <augExpenses.length; i++) {
        augTotal += parseFloat(augExpenses[i].price)
        if(augExpenses[i].category === "Food") {
            augFood += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Auto") {
            augAuto += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Personal") {
            augPersonal += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Health") {
            augHealth += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Home") {
            augHome += parseFloat(augExpenses[i].price)
        }
        else if(augExpenses[i].category === "Bills") {
            augBills += parseFloat(augExpenses[i].price)
        }

    }

    for (let j = 0; j <augGoals.length; j++) {
        if(augGoals[j].category === "Food") {
            augGoalFood += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Auto") {
            augGoalAuto += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Personal") {
            augGoalPersonal += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Health") {
            augGoalHealth += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Home") {
            augGoalHome += parseFloat(augGoals[j].budget)
        }
        else if(augGoals[j].category === "Bills") {
            augGoalBills += parseFloat(augGoals[j].budget)
        }

        else if(augGoals[j].category ==="All") {
            augGoalTotal += parseFloat(augGoals[j].budget)
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
          text: "August Pie Chart",
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


    const [augData, setAugData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [augFood, augAuto, augPersonal, augHealth, augHome, augBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    
    let augFoodRatio = parseFloat((augFood/augTotal*100).toFixed(2))
    let augAutoRatio = parseFloat((augAuto/augTotal*100).toFixed(2))
    let augPersonalRatio = parseFloat((augPersonal/augTotal*100).toFixed(2))
    let augHealthRatio = parseFloat((augHealth/augTotal*100).toFixed(2))
    let augHomeRatio = parseFloat((augHome/augTotal*100).toFixed(2))
    let augBillsRatio = parseFloat((augBills/augTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: augData.labels,
                datasets: augData.datasets
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
                value={augFoodPercent}
                onChange={(e) => setAugFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={augAutoPercent}
                onChange={(e) => setAugAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={augPersonalPercent}
                onChange={(e) => setAugPersonalPercent(e.target.value)}
                />
                <br></br> 
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={augHealthPercent}
                onChange={(e) => setAugHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={augHomePercent}
                onChange={(e) => setAugHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={augBillsPercent}
                onChange={(e) => setAugBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${augFood}, percentage of total spending: {parseFloat((augFood/augTotal*100).toFixed(2))} %, <strong>Goal: </strong>{augGoalFood > 0? augGoalFood : "Did not set a goal for this month"}</Card.Description>
            {augGoalFood > 0?  <Card.Description>{(augGoalFood > augFood) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalFood - augFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augFood-augGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${augAuto}, percentage of total spending: {parseFloat((augAuto/augTotal*100).toFixed(2))} % , <strong>Goal: </strong> {augGoalAuto > 0? augGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {augGoalAuto > 0?  <Card.Description>{(augGoalAuto > augAuto) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalAuto - augAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augAuto-augGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${augPersonal}, percentage of total spending: {parseFloat((augPersonal/augTotal*100).toFixed(2))} %,<strong> Goal: </strong>{augGoalPersonal> 0? augGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {augGoalPersonal > 0?  <Card.Description>{(augGoalPersonal > augPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalPersonal - augPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augPersonal-augGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${augHealth}, percentage of total spending: {parseFloat((augHealth/augTotal*100).toFixed(2))} % , <strong>Goal: </strong>{augGoalHealth > 0? augGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {augGoalHealth > 0?  <Card.Description>{(augGoalHealth > augHealth) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalHealth - augHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augHealth-augGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${augHome}, percentage of total spending: {parseFloat((augHome/augTotal*100).toFixed(2))} %, <strong>Goal: </strong>{augGoalHome > 0? augGoalHome : "Did not set a goal for this month"}</Card.Description>
            {augGoalHome > 0?  <Card.Description>{(augGoalHome > augHome) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalHome - augHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augHome-augGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${augBills}, percentage of total spending: {parseFloat((augBills/augTotal*100).toFixed(2))} %, <strong>Goal: </strong>{augGoalBills > 0? augGoalBills : "Did not set a goal for this month"}</Card.Description>
            {augGoalBills > 0?  <Card.Description>{(augGoalBills > augBills) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalBills - augBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augBills-augGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${augTotal}, <strong>Goal: </strong>{augGoalTotal > 0? augGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {augGoalTotal > 0?  <Card.Description>{(augGoalTotal > augTotal) ? `You reached your goal this month, saving a total of ${parseFloat((augGoalTotal - augTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((augTotal-augGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {augFoodRatio > augFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {augAutoRatio > augAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {augPersonalRatio > augPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {augHealthRatio > augHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {augHomeRatio > augHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {augBillsRatio > augBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

           
            
        </div>
    )
}

export default Aug 