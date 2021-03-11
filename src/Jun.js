import {useState, useEffect} from "react"
import {Pie} from 'react-chartjs-2'
import {Card, Button, Segment, Modal} from 'semantic-ui-react'



function Jun({junGoals, junExpenses, junFoodPercent, setJunFoodPercent, junAutoPercent, setJunAutoPercent, junPersonalPercent, setJunPersonalPercent, junHealthPercent, setJunHealthPercent, junHomePercent, setJunHomePercent, junBillsPercent, setJunBillsPercent}){
    // console.log(junGoals)
    // console.log(junExpenses)

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


    let junFood = 0;
    let junAuto = 0;
    let junPersonal = 0;
    let junHealth = 0;
    let junHome = 0;
    let junBills = 0;
    let junTotal = 0;

    let junGoalFood=0;
    let junGoalAuto = 0;
    let junGoalPersonal =0;
    let junGoalHealth = 0;
    let junGoalHome = 0;
    let junGoalBills = 0;
    let junGoalTotal = 0;
    

    for(let i = 0; i <junExpenses.length; i++) {
        junTotal += parseFloat(junExpenses[i].price)
        if(junExpenses[i].category === "Food") {
            junFood += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Auto") {
            junAuto += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Personal") {
            junPersonal += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Health") {
            junHealth += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Home") {
            junHome += parseFloat(junExpenses[i].price)
        }
        else if(junExpenses[i].category === "Bills") {
            junBills += parseFloat(junExpenses[i].price)
        }

    }

    for (let j = 0; j <junGoals.length; j++) {
        if(junGoals[j].category === "Food") {
            junGoalFood += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Auto") {
            junGoalAuto += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Personal") {
            junGoalPersonal += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Health") {
            junGoalHealth += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Home") {
            junGoalHome += parseFloat(junGoals[j].budget)
        }
        else if(junGoals[j].category === "Bills") {
            junGoalBills += parseFloat(junGoals[j].budget)
        }

        else if(junGoals[j].category ==="All") {
            junGoalTotal += parseFloat(junGoals[j].budget)
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
          text: "June Pie Chart",
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


    const [junData, setJunData] = useState({
        labels: ['Food', 'Auto', 'Personal', 'Health', 'Home', 'Bills'], 
        datasets: [{
            data: [junFood, junAuto, junPersonal, junHealth, junHome, junBills],
            backgroundColor:['red', 'blue', 'green', 'purple', 'black', 'orange'],
            borderColor:'white',
            hoverBackgroundColor:'white',
            hoverBorderWidth: 10
        }]
    })

    
    let junFoodRatio = parseFloat((junFood/junTotal*100).toFixed(2))
    let junAutoRatio = parseFloat((junAuto/junTotal*100).toFixed(2))
    let junPersonalRatio = parseFloat((junPersonal/junTotal*100).toFixed(2))
    let junHealthRatio = parseFloat((junHealth/junTotal*100).toFixed(2))
    let junHomeRatio = parseFloat((junHome/junTotal*100).toFixed(2))
    let junBillsRatio = parseFloat((junBills/junTotal*100).toFixed(2))



    return (
        <div>
            <br></br>
            
            <Pie 
            data={{
                labels: junData.labels,
                datasets: junData.datasets
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
                value={junFoodPercent}
                onChange={(e) => setJunFoodPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="auto" >Auto </label> <br></br>
                <input
                className="show"
                type="number"
                value={junAutoPercent}
                onChange={(e) => setJunAutoPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="personal" >Personal </label> <br></br>
                <input
                className="show"
                type="number"
                value={junPersonalPercent}
                onChange={(e) => setJunPersonalPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="health" >Health </label> <br></br>
                <input
                className="show"
                type="number"
                value={junHealthPercent}
                onChange={(e) => setJunHealthPercent(e.target.value)}
                />
                <br></br>
                <label hmltFor ="home" >Home  </label> <br></br>
                <input
                className="show"
                type="number"
                value={junHomePercent}
                onChange={(e) => setJunHomePercent(e.target.value)}
                />
                    <br></br>
                <label hmltFor ="bills" >Bills  </label> <br></br>
                <input
                className="show"
                type="number"
                value={junBillsPercent}
                onChange={(e) => setJunBillsPercent(e.target.value)}
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

            <Card.Description><strong>Food: </strong> ${junFood}, percentage of total spending: {parseFloat((junFood/junTotal*100).toFixed(2))} %, <strong>Goal: </strong>{junGoalFood > 0? junGoalFood : "Did not set a goal for this month"}</Card.Description>
            {junGoalFood > 0?  <Card.Description>{(junGoalFood > junFood) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalFood - junFood)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junFood-junGoalFood)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Auto: </strong>${junAuto}, percentage of total spending: {parseFloat((junAuto/junTotal*100).toFixed(2))} % , <strong>Goal: </strong> {junGoalAuto > 0? junGoalAuto : "Did not set a goal for this month"} </Card.Description>
            {junGoalAuto > 0?  <Card.Description>{(junGoalAuto > junAuto) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalAuto - junAuto)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junAuto-junGoalAuto)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Personal: </strong>${junPersonal}, percentage of total spending: {parseFloat((junPersonal/junTotal*100).toFixed(2))} %,<strong> Goal: </strong>{junGoalPersonal> 0? junGoalPersonal : "Did not set a goal for this month"}</Card.Description>
            {junGoalPersonal > 0?  <Card.Description>{(junGoalPersonal > junPersonal) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalPersonal - junPersonal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junPersonal-junGoalPersonal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Health: </strong>${junHealth}, percentage of total spending: {parseFloat((junHealth/junTotal*100).toFixed(2))} % , <strong>Goal: </strong>{junGoalHealth > 0? junGoalHealth : "Did not set a goal for this month"}</Card.Description>
             {junGoalHealth > 0?  <Card.Description>{(junGoalHealth > junHealth) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalHealth - junHealth)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junHealth-junGoalHealth)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Home: </strong>${junHome}, percentage of total spending: {parseFloat((junHome/junTotal*100).toFixed(2))} %, <strong>Goal: </strong>{junGoalHome > 0? junGoalHome : "Did not set a goal for this month"}</Card.Description>
            {junGoalHome > 0?  <Card.Description>{(junGoalHome > junHome) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalHome - junHome)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junHome-junGoalHome)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Bills: </strong>${junBills}, percentage of total spending: {parseFloat((junBills/junTotal*100).toFixed(2))} %, <strong>Goal: </strong>{junGoalBills > 0? junGoalBills : "Did not set a goal for this month"}</Card.Description>
            {junGoalBills > 0?  <Card.Description>{(junGoalBills > junBills) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalBills - junBills)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junBills-junGoalBills)).toFixed(2)}`}</Card.Description> : null }
            <br></br>

            <Card.Description><strong>Total Spending: </strong>${junTotal}, <strong>Goal: </strong>{junGoalTotal > 0? junGoalTotal : "Did not set a goal for this month"}</Card.Description>
            {junGoalTotal > 0?  <Card.Description>{(junGoalTotal > junTotal) ? `You reached your goal this month, saving a total of ${parseFloat((junGoalTotal - junTotal)).toFixed(2)}` : `You failed to reach your goal this month, going over by a total of ${parseFloat((junTotal-junGoalTotal)).toFixed(2)}`}</Card.Description> : null }
            <br></br>
            </Card>
            <Card className="breakdown">

            <Card.Header as='h2' textAlign="center">Recommendations</Card.Header>
            {junFoodRatio > junFoodPercent ? <p>You have gone over the recommended <strong>food</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>food</strong> this month! </p> : <p>You have stayed within average <strong>food</strong> spending limits this month!</p>} <br></br>
            {junAutoRatio > junAutoPercent ? <p>You have gone over the recommended <strong>auto</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>auto</strong> this month! </p> : <p>You have stayed within average <strong>auto</strong> spending limits this month!</p>} <br></br>
            {junPersonalRatio > junPersonalPercent ? <p>You have gone over the recommended <strong>personal</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>personal</strong> this month! </p> : <p>You have stayed within average <strong>personal</strong> spending limits this month, good job!</p>} <br></br>
            {junHealthRatio > junHealthPercent ? <p>You have gone over the recommended <strong>health</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>health</strong> this month! </p> : <p>You have stayed within average <strong>health</strong> spending limits this month, good job!</p>} <br></br>
            {junHomeRatio > junHomePercent ? <p>You have gone over the recommended <strong>home</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>home</strong> this month! </p> : <p>You have stayed within average <strong>home</strong> spending limits this month, good job!</p>} <br></br>
            {junBillsRatio > junBillsPercent ? <p>You have gone over the recommended <strong>bills</strong> spending for the month, consider adjusting your total budget or reducing the amount you spend on <strong>bills</strong> this month! </p> : <p>You have stayed within average <strong>bills</strong> spending limits this month, good job!</p>}
            </Card>
            </Card.Group> 

            
        </div>
    )
}

export default Jun 