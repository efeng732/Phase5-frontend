import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Segment, Modal} from 'semantic-ui-react'


function Oct({octGoals, octExpenses, octFoodPercent, setOctFoodPercent, octAutoPercent, setOctAutoPercent, octPersonalPercent, setOctPersonalPercent, octHealthPercent, setOctHealthPercent, octHomePercent, setOctHomePercent, octBillsPercent, setOctBillsPercent}){
    // console.log(octGoals)
    // console.log(octExpenses)

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


    let octFood = 0;
    let octAuto = 0;
    let octPersonal = 0;
    let octHealth = 0;
    let octHome = 0;
    let octBills = 0;
    let octTotal = 0;

    let octGoalFood=0;
    let octGoalAuto = 0;
    let octGoalPersonal =0;
    let octGoalHealth = 0;
    let octGoalHome = 0;
    let octGoalBills = 0;
    let octGoalTotal = 0;
    

    for(let i = 0; i <octExpenses.length; i++) {
        octTotal += parseFloat(octExpenses[i].price)
        if(octExpenses[i].category === "Food") {
            octFood += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Auto") {
            octAuto += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Personal") {
            octPersonal += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Health") {
            octHealth += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Home") {
            octHome += parseFloat(octExpenses[i].price)
        }
        else if(octExpenses[i].category === "Bills") {
            octBills += parseFloat(octExpenses[i].price)
        }

    }

    for (let j = 0; j <octGoals.length; j++) {
        if(octGoals[j].category === "Food") {
            octGoalFood += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Auto") {
            octGoalAuto += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Personal") {
            octGoalPersonal += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Health") {
            octGoalHealth += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Home") {
            octGoalHome += parseFloat(octGoals[j].budget)
        }
        else if(octGoals[j].category === "Bills") {
            octGoalBills += parseFloat(octGoals[j].budget)
        }

        else if(octGoals[j].category ==="All") {
            octGoalTotal += parseFloat(octGoals[j].budget)
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
          text: "October Pie Chart",
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


    const [octData, setOctData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [octFood, octAuto, octPersonal, octHealth, octHome, octBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    
    let octFoodRatio = parseFloat((octFood/octTotal*100).toFixed(2))
    let octAutoRatio = parseFloat((octAuto/octTotal*100).toFixed(2))
    let octPersonalRatio = parseFloat((octPersonal/octTotal*100).toFixed(2))
    let octHealthRatio = parseFloat((octHealth/octTotal*100).toFixed(2))
    let octHomeRatio = parseFloat((octHome/octTotal*100).toFixed(2))
    let octBillsRatio = parseFloat((octBills/octTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: octData.labels,
                datasets: octData.datasets
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
                value={octFoodPercent}
                onChange={(e) => setOctFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={octAutoPercent}
                onChange={(e) => setOctAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={octPersonalPercent}
                onChange={(e) => setOctPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={octHealthPercent}
                onChange={(e) => setOctHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={octHomePercent}
                onChange={(e) => setOctHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={octBillsPercent}
                onChange={(e) => setOctBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${octFood}, percentage of total spending: {parseFloat((octFood/octTotal*100).toFixed(2))} %, <strong>Goal: </strong>{octGoalFood > 0? octGoalFood : "Did not set a goal for this month"}</Card.Description>
            {octGoalFood > 0?  <Card.Description>{(octGoalFood > octFood) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalFood - octFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octFood-octGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${octAuto}, percentage of total spending: {parseFloat((octAuto/octTotal*100).toFixed(2))} % , <strong>Goal: </strong> {octGoalAuto > 0? octGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {octGoalAuto > 0?  <Card.Description>{(octGoalAuto > octAuto) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalAuto - octAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octAuto-octGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${octPersonal}, percentage of total spending: {parseFloat((octPersonal/octTotal*100).toFixed(2))} %,<strong> Goal: </strong>{octGoalPersonal> 0? octGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {octGoalPersonal > 0?  <Card.Description>{(octGoalPersonal > octPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalPersonal - octPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octPersonal-octGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${octHealth}, percentage of total spending: {parseFloat((octHealth/octTotal*100).toFixed(2))} % , <strong>Goal: </strong>{octGoalHealth > 0? octGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {octGoalHealth > 0?  <Card.Description>{(octGoalHealth > octHealth) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalHealth - octHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octHealth-octGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${octHome}, percentage of total spending: {parseFloat((octHome/octTotal*100).toFixed(2))} %, <strong>Goal: </strong>{octGoalHome > 0? octGoalHome : "Did not set a goal for this month"}</Card.Description>
            {octGoalHome > 0?  <Card.Description>{(octGoalHome > octHome) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalHome - octHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octHome-octGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${octBills}, percentage of total spending: {parseFloat((octBills/octTotal*100).toFixed(2))} %, <strong>Goal: </strong>{octGoalBills > 0? octGoalBills : "Did not set a goal for this month"}</Card.Description>
            {octGoalBills > 0?  <Card.Description>{(octGoalBills > octBills) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalBills - octBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octBills-octGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${octTotal}, <strong>Goal: </strong>{octGoalTotal > 0? octGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {octGoalTotal > 0?  <Card.Description>{(octGoalTotal > octTotal) ? `You reached your goal this month, saving a total of ${parseFloat((octGoalTotal - octTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((octTotal-octGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {octFoodRatio > octFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {octAutoRatio > octAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {octPersonalRatio > octPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {octHealthRatio > octHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {octHomeRatio > octHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {octBillsRatio > octBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

           
            
        </div>
    )
}

export default Oct 