import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Modal, Button, Segment} from 'semantic-ui-react'


function Mar({marGoals, marExpenses, marFoodPercent, setMarFoodPercent, marAutoPercent, setMarAutoPercent, marPersonalPercent, setMarPersonalPercent, marHealthPercent, setMarHealthPercent, marHomePercent, setMarHomePercent, marBillsPercent, setMarBillsPercent}){
    // console.log(marGoals)
    // console.log(marExpenses)
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


    let marFood = 0;
    let marAuto = 0;
    let marPersonal = 0;
    let marHealth = 0;
    let marHome = 0;
    let marBills = 0;
    let marTotal = 0;

    let marGoalFood=0;
    let marGoalAuto = 0;
    let marGoalPersonal =0;
    let marGoalHealth = 0;
    let marGoalHome = 0;
    let marGoalBills = 0;
    let marGoalTotal = 0;
    

    for(let i = 0; i <marExpenses.length; i++) {
        marTotal += parseFloat(marExpenses[i].price)
        if(marExpenses[i].category === "Food") {
            marFood += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Auto") {
            marAuto += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Personal") {
            marPersonal += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Health") {
            marHealth += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Home") {
            marHome += parseFloat(marExpenses[i].price)
        }
        else if(marExpenses[i].category === "Bills") {
            marBills += parseFloat(marExpenses[i].price)
        }

    }

    for (let j = 0; j <marGoals.length; j++) {
        if(marGoals[j].category === "Food") {
            marGoalFood += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Auto") {
            marGoalAuto += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Personal") {
            marGoalPersonal += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Health") {
            marGoalHealth += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Home") {
            marGoalHome += parseFloat(marGoals[j].budget)
        }
        else if(marGoals[j].category === "Bills") {
            marGoalBills += parseFloat(marGoals[j].budget)
        }

        else if(marGoals[j].category ==="All") {
            marGoalTotal += parseFloat(marGoals[j].budget)
        }

        
    }



    const [marData, setMarData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [marFood, marAuto, marPersonal, marHealth, marHome, marBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10
        }]
    })

    var options = {
        responsive: true,
        animation: {
            animateScale: true,
            duration: 3000
        },
        title: {
          display: true,
          position: "top",
          text: "March Pie Chart",
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

    
    let marFoodRatio = parseFloat((marFood/marTotal*100).toFixed(2))
    let marAutoRatio = parseFloat((marAuto/marTotal*100).toFixed(2))
    let marPersonalRatio = parseFloat((marPersonal/marTotal*100).toFixed(2))
    let marHealthRatio = parseFloat((marHealth/marTotal*100).toFixed(2))
    let marHomeRatio = parseFloat((marHome/marTotal*100).toFixed(2))
    let marBillsRatio = parseFloat((marBills/marTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: marData.labels,
                datasets: marData.datasets
            }}
            options={options}
            height = '90%'
            />

<Modal basic onClose={() => setOpen(false)} onOpen={()=>setOpen(true)} 
            open={open} size="small" trigger={<Button color="green"> Change benchmarks</Button>}>
            <Segment inverted>
            <div className ="newExpenseForm">
            <form className="home" >
                <h3>Change your benchmark constraints! (by percentage of total spending)</h3>
                <label hmltFor ="food" >Food </label> <br></br>
                <input className="show"
                type="number"
                value={marFoodPercent}
                onChange={(e) => setMarFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={marAutoPercent}
                onChange={(e) => setMarAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={marPersonalPercent}
                onChange={(e) => setMarPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={marHealthPercent}
                onChange={(e) => setMarHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={marHomePercent}
                onChange={(e) => setMarHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={marBillsPercent}
                onChange={(e) => setMarBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${marFood}, percentage of total spending: {parseFloat((marFood/marTotal*100).toFixed(2))} %, <strong>Goal: </strong>{marGoalFood > 0? marGoalFood : "Did not set a goal for this month"}</Card.Description>
            {marGoalFood > 0?  <Card.Description>{(marGoalFood > marFood) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalFood - marFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marFood-marGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${marAuto}, percentage of total spending: {parseFloat((marAuto/marTotal*100).toFixed(2))} % , <strong>Goal: </strong> {marGoalAuto > 0? marGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {marGoalAuto > 0?  <Card.Description>{(marGoalAuto > marAuto) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalAuto - marAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marAuto-marGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${marPersonal}, percentage of total spending: {parseFloat((marPersonal/marTotal*100).toFixed(2))} %,<strong> Goal: </strong>{marGoalPersonal> 0? marGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {marGoalPersonal > 0?  <Card.Description>{(marGoalPersonal > marPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalPersonal - marPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marPersonal-marGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${marHealth}, percentage of total spending: {parseFloat((marHealth/marTotal*100).toFixed(2))} % , <strong>Goal: </strong>{marGoalHealth > 0? marGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {marGoalHealth > 0?  <Card.Description>{(marGoalHealth > marHealth) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalHealth - marHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marHealth-marGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${marHome}, percentage of total spending: {parseFloat((marHome/marTotal*100).toFixed(2))} %, <strong>Goal: </strong>{marGoalHome > 0? marGoalHome : "Did not set a goal for this month"}</Card.Description>
            {marGoalHome > 0?  <Card.Description>{(marGoalHome > marHome) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalHome - marHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marHome-marGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${marBills}, percentage of total spending: {parseFloat((marBills/marTotal*100).toFixed(2))} %, <strong>Goal: </strong>{marGoalBills > 0? marGoalBills : "Did not set a goal for this month"}</Card.Description>
            {marGoalBills > 0?  <Card.Description>{(marGoalBills > marBills) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalBills - marBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marBills-marGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${marTotal}, <strong>Goal: </strong>{marGoalTotal > 0? marGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {marGoalTotal > 0?  <Card.Description>{(marGoalTotal > marTotal) ? `You reached your goal this month, saving a total of ${parseFloat((marGoalTotal - marTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((marTotal-marGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {marFoodRatio > marFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {marAutoRatio > marAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {marPersonalRatio > marPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {marHealthRatio > marHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {marHomeRatio > marHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {marBillsRatio > marBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

           
            
        </div>
    )
}

export default Mar 