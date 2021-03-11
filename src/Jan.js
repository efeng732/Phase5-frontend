import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Modal, Button, Segment} from "semantic-ui-react"


function Jan({janGoals, janExpenses, janFoodPercent, setJanFoodPercent, janAutoPercent, setJanAutoPercent, janPersonalPercent, setJanPersonalPercent, janHealthPercent, setJanHealthPercent, janHomePercent, setJanHomePercent, janBillsPercent, setJanBillsPercent}){
    // console.log(janGoals)
    // console.log(janExpenses)

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


    let janFood = 0;
    let janAuto = 0;
    let janPersonal = 0;
    let janHealth = 0;
    let janHome = 0;
    let janBills = 0;
    let janTotal = 0;

    let janGoalFood=0;
    let janGoalAuto = 0;
    let janGoalPersonal =0;
    let janGoalHealth = 0;
    let janGoalHome = 0;
    let janGoalBills = 0;
    let janGoalTotal = 0;
    

    for(let i = 0; i <janExpenses.length; i++) {
        janTotal += parseFloat(janExpenses[i].price)
        if(janExpenses[i].category === "Food") {
            janFood += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Auto") {
            janAuto += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Personal") {
            janPersonal += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Health") {
            janHealth += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Home") {
            janHome += parseFloat(janExpenses[i].price)
        }
        else if(janExpenses[i].category === "Bills") {
            janBills += parseFloat(janExpenses[i].price)
        }

    }

    for (let j = 0; j <janGoals.length; j++) {
        if(janGoals[j].category === "Food") {
            janGoalFood += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Auto") {
            janGoalAuto += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Personal") {
            janGoalPersonal += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Health") {
            janGoalHealth += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Home") {
            janGoalHome += parseFloat(janGoals[j].budget)
        }
        else if(janGoals[j].category === "Bills") {
            janGoalBills += parseFloat(janGoals[j].budget)
        }

        else if(janGoals[j].category ==="All") {
            janGoalTotal += parseFloat(janGoals[j].budget)
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
          text: "January Pie Chart",
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

    const [janData, setJanData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [janFood, janAuto, janPersonal, janHealth, janHome, janBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor:'white',
            hoverBorderWidth: 10
        }]
        
    })

    
    let janFoodRatio = parseFloat((janFood/janTotal*100).toFixed(2))
    let janAutoRatio = parseFloat((janAuto/janTotal*100).toFixed(2))
    let janPersonalRatio = parseFloat((janPersonal/janTotal*100).toFixed(2))
    let janHealthRatio = parseFloat((janHealth/janTotal*100).toFixed(2))
    let janHomeRatio = parseFloat((janHome/janTotal*100).toFixed(2))
    let janBillsRatio = parseFloat((janBills/janTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie
            data={{
                labels: janData.labels,
                datasets: janData.datasets
            }}
            options={options}
            height = '90%'
            />
            
            <Modal basic onClose={() => setOpen(false)} onOpen={()=>setOpen(true)} 
            open={open} size="small" trigger={<Button color="green"> Change benchmarks</Button>}>
            <Segment inverted>
            <div className="newExpenseForm"> 
            <form className="home" >
                <h3>Change your recommendation benchmarks! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food </label>
                <br></br>
                <input
                className="show"
                type="number"
                value={janFoodPercent}
                onChange={(e) => setJanFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto</label>
                <br></br>
                <input
                className="show"
                type="number"
                value={janAutoPercent}
                onChange={(e) => setJanAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label>
                <br></br>
                <input
                className="show"
                type="number"
                value={janPersonalPercent}
                onChange={(e) => setJanPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label>
                <br></br>
                <input
                className="show"
                type="number"
                value={janHealthPercent}
                onChange={(e) => setJanHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label>
                <br></br>
                <input
                className="show"
                type="number"
                value={janHomePercent}
                onChange={(e) => setJanHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills</label> <br></br>
                <input
                className="show"
                type="number"
                value={janBillsPercent}
                onChange={(e) => setJanBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${janFood}, percentage of total spending: {parseFloat((janFood/janTotal*100).toFixed(2))} %, <strong>Goal: </strong>{janGoalFood > 0? janGoalFood : "Did not set a goal for this month"}</Card.Description>
            {janGoalFood > 0?  <Card.Description>{(janGoalFood > janFood) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalFood - janFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janFood-janGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${janAuto}, percentage of total spending: {parseFloat((janAuto/janTotal*100).toFixed(2))} % , <strong>Goal: </strong> {janGoalAuto > 0? janGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {janGoalAuto > 0?  <Card.Description>{(janGoalAuto > janAuto) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalAuto - janAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janAuto-janGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${janPersonal}, percentage of total spending: {parseFloat((janPersonal/janTotal*100).toFixed(2))} %,<strong> Goal: </strong>{janGoalPersonal> 0? janGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {janGoalPersonal > 0?  <Card.Description>{(janGoalPersonal > janPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalPersonal - janPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janPersonal-janGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${janHealth}, percentage of total spending: {parseFloat((janHealth/janTotal*100).toFixed(2))} % , <strong>Goal: </strong>{janGoalHealth > 0? janGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {janGoalHealth > 0?  <Card.Description>{(janGoalHealth > janHealth) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalHealth - janHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janHealth-janGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${janHome}, percentage of total spending: {parseFloat((janHome/janTotal*100).toFixed(2))} %, <strong>Goal: </strong>{janGoalHome > 0? janGoalHome : "Did not set a goal for this month"}</Card.Description>
            {janGoalHome > 0?  <Card.Description>{(janGoalHome > janHome) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalHome - janHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janHome-janGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${janBills}, percentage of total spending: {parseFloat((janBills/janTotal*100).toFixed(2))} %, <strong>Goal: </strong>{janGoalBills > 0? janGoalBills : "Did not set a goal for this month"}</Card.Description>
            {janGoalBills > 0?  <Card.Description>{(janGoalBills > janBills) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalBills - janBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janBills-janGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${janTotal}, <strong>Goal: </strong>{janGoalTotal > 0? janGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {janGoalTotal > 0?  <Card.Description>{(janGoalTotal > janTotal) ? `You reached your goal this month, saving a total of ${parseFloat((janGoalTotal - janTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((janTotal-janGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {janFoodRatio > janFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {janAutoRatio > janAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {janPersonalRatio > janPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {janHealthRatio > janHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {janHomeRatio > janHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {janBillsRatio > janBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            
            </Card>
            </Card.Group>
          
            
            
        </div>
    )
}

export default Jan 

// Food less than 15%
//Bills less than 40%
//Personal less than 15%
//Home less than 10%
//Health less than 10%
//Auto less than 10%