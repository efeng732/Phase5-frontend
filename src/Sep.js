import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Modal, Segment} from 'semantic-ui-react'


function Sep({sepGoals, sepExpenses, sepFoodPercent, setSepFoodPercent, sepAutoPercent, setSepAutoPercent, sepPersonalPercent, setSepPersonalPercent, sepHealthPercent, setSepHealthPercent, sepHomePercent, setSepHomePercent, sepBillsPercent, setSepBillsPercent}){
    // console.log(sepGoals)
    // console.log(sepExpenses)

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


    let sepFood = 0;
    let sepAuto = 0;
    let sepPersonal = 0;
    let sepHealth = 0;
    let sepHome = 0;
    let sepBills = 0;
    let sepTotal = 0;

    let sepGoalFood=0;
    let sepGoalAuto = 0;
    let sepGoalPersonal =0;
    let sepGoalHealth = 0;
    let sepGoalHome = 0;
    let sepGoalBills = 0;
    let sepGoalTotal = 0;
    

    for(let i = 0; i <sepExpenses.length; i++) {
        sepTotal += parseFloat(sepExpenses[i].price)
        if(sepExpenses[i].category === "Food") {
            sepFood += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Auto") {
            sepAuto += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Personal") {
            sepPersonal += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Health") {
            sepHealth += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Home") {
            sepHome += parseFloat(sepExpenses[i].price)
        }
        else if(sepExpenses[i].category === "Bills") {
            sepBills += parseFloat(sepExpenses[i].price)
        }

    }

    for (let j = 0; j <sepGoals.length; j++) {
        if(sepGoals[j].category === "Food") {
            sepGoalFood += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Auto") {
            sepGoalAuto += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Personal") {
            sepGoalPersonal += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Health") {
            sepGoalHealth += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Home") {
            sepGoalHome += parseFloat(sepGoals[j].budget)
        }
        else if(sepGoals[j].category === "Bills") {
            sepGoalBills += parseFloat(sepGoals[j].budget)
        }

        else if(sepGoals[j].category ==="All") {
            sepGoalTotal += parseFloat(sepGoals[j].budget)
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
          text: "September Pie Chart",
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



    const [sepData, setSepData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [sepFood, sepAuto, sepPersonal, sepHealth, sepHome, sepBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor: 'white',
            hoverBackgroundColor: 'white',
            hoverBorderWidth: 10

        }]
    })

    
    let sepFoodRatio = parseFloat((sepFood/sepTotal*100).toFixed(2))
    let sepAutoRatio = parseFloat((sepAuto/sepTotal*100).toFixed(2))
    let sepPersonalRatio = parseFloat((sepPersonal/sepTotal*100).toFixed(2))
    let sepHealthRatio = parseFloat((sepHealth/sepTotal*100).toFixed(2))
    let sepHomeRatio = parseFloat((sepHome/sepTotal*100).toFixed(2))
    let sepBillsRatio = parseFloat((sepBills/sepTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: sepData.labels,
                datasets: sepData.datasets
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
                value={sepFoodPercent}
                onChange={(e) => setSepFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={sepAutoPercent}
                onChange={(e) => setSepAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={sepPersonalPercent}
                onChange={(e) => setSepPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={sepHealthPercent}
                onChange={(e) => setSepHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home </label> <br></br>
                <input
                className="show"
                type="number"
                value={sepHomePercent}
                onChange={(e) => setSepHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills </label> <br></br>
                <input
                className="show"
                type="number"
                value={sepBillsPercent}
                onChange={(e) => setSepBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${sepFood}, percentage of total spending: {parseFloat((sepFood/sepTotal*100).toFixed(2))} %, <strong>Goal: </strong>{sepGoalFood > 0? sepGoalFood : "Did not set a goal for this month"}</Card.Description>
            {sepGoalFood > 0?  <Card.Description>{(sepGoalFood > sepFood) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalFood - sepFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepFood-sepGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${sepAuto}, percentage of total spending: {parseFloat((sepAuto/sepTotal*100).toFixed(2))} % , <strong>Goal: </strong> {sepGoalAuto > 0? sepGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {sepGoalAuto > 0?  <Card.Description>{(sepGoalAuto > sepAuto) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalAuto - sepAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepAuto-sepGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${sepPersonal}, percentage of total spending: {parseFloat((sepPersonal/sepTotal*100).toFixed(2))} %,<strong> Goal: </strong>{sepGoalPersonal> 0? sepGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {sepGoalPersonal > 0?  <Card.Description>{(sepGoalPersonal > sepPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalPersonal - sepPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepPersonal-sepGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${sepHealth}, percentage of total spending: {parseFloat((sepHealth/sepTotal*100).toFixed(2))} % , <strong>Goal: </strong>{sepGoalHealth > 0? sepGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {sepGoalHealth > 0?  <Card.Description>{(sepGoalHealth > sepHealth) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalHealth - sepHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepHealth-sepGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${sepHome}, percentage of total spending: {parseFloat((sepHome/sepTotal*100).toFixed(2))} %, <strong>Goal: </strong>{sepGoalHome > 0? sepGoalHome : "Did not set a goal for this month"}</Card.Description>
            {sepGoalHome > 0?  <Card.Description>{(sepGoalHome > sepHome) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalHome - sepHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepHome-sepGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${sepBills}, percentage of total spending: {parseFloat((sepBills/sepTotal*100).toFixed(2))} %, <strong>Goal: </strong>{sepGoalBills > 0? sepGoalBills : "Did not set a goal for this month"}</Card.Description>
            {sepGoalBills > 0?  <Card.Description>{(sepGoalBills > sepBills) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalBills - sepBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepBills-sepGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${sepTotal}, <strong>Goal: </strong>{sepGoalTotal > 0? sepGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {sepGoalTotal > 0?  <Card.Description>{(sepGoalTotal > sepTotal) ? `You reached your goal this month, saving a total of ${parseFloat((sepGoalTotal - sepTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((sepTotal-sepGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {sepFoodRatio > sepFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {sepAutoRatio > sepAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {sepPersonalRatio > sepPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {sepHealthRatio > sepHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {sepHomeRatio > sepHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {sepBillsRatio > sepBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group>

           
            
        </div>
    )
}

export default Sep 