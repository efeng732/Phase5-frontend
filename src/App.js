import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import {Route, Switch, withRouter} from "react-router-dom"
import {Header, Image, Form, Input, Select, Button} from "semantic-ui-react"


//components
import Goals from './Goals.js'
import Expenses from './Expenses.js'
import NavBar from './NavBar.js'
import GoalFilter from './GoalFilter.js'
import ExpenseFilter from './ExpenseFilter.js'
import Auth from './Auth.js'


//months  edition
import Jan from './Jan.js'
import Feb from './Feb.js'
import Mar from './Mar.js'
import Apr from './Apr.js'
import May from './May.js'
import Jun from './Jun.js'
import Jul from './Jul.js'
import Aug from './Aug.js'
import Sep from './Sep.js'
import Oct from './Oct.js'
import Nov from './Nov.js'
import Dec from './Dec.js'


function App(props) {


  const [currentUser, setCurrentUser] = useState()
  const [goals, setGoals] = useState([])
  const [expenses, setExpenses] = useState([])
  const [category, setCategory] = useState("")
  const [month, setMonth] = useState("")

  const[goalMonth, setGoalMonth] = useState("Jan")
  const[goalCategory, setGoalCategory] = useState("All")
  const[goalBudget, setGoalBudget] = useState(0)

  const[expenseMonth, setExpenseMonth] = useState("Jan")
  const[expenseCategory, setExpenseCategory] = useState("Food")
  const[expensePrice, setExpensePrice] = useState(0)
  const[expenseDescription, setExpenseDescription] = useState("")

  const[readMe, setReadMe] = useState(false)

    

  let monthSort = {
    "Jan": 1, 
    "Feb": 2,
    "Mar": 3, 
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8, 
    "Sep" : 9,
    "Oct" : 10,
    "Nov" : 11,
    "Dec" : 12
  }


  //auth? 
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:4000/me', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      .then( res => res.json())
      .then(user => {
        setCurrentUser(user)
      })
    }
  }, [])
  
function handleLogOut(){
  localStorage.removeItem('token')
  setCurrentUser(null)
  props.history.push('/')
  console.log("logged out")
}

  useEffect(() => {
    fetch('http://localhost:4000/goals')
    .then( res => res.json())
    .then( goalData => {
      //console.log(goalData)
      setGoals(goalData)}
      )
  },[])

  useEffect(() => {
    fetch('http://localhost:4000/expenses')
    .then( res => res.json())
    .then( expenseData => {
      //console.log(expenseData)
      setExpenses(expenseData)}
      )
  }, [])


  function handleLogOut(){
    localStorage.removeItem("token")
    setCurrentUser({lanes:[]});
    props.history.push('/');
  }


  //monthly stuff

    const[janFoodPercent, setJanFoodPercent] = useState(15)
    const[janAutoPercent, setJanAutoPercent] = useState(10)
    const [janPersonalPercent, setJanPersonalPercent] = useState(15)
    const[janHealthPercent, setJanHealthPercent] = useState(10)
    const[janHomePercent, setJanHomePercent] = useState(10)
    const[janBillsPercent, setJanBillsPercent] = useState(40)

    const[febFoodPercent, setFebFoodPercent] = useState(15)
    const[febAutoPercent, setFebAutoPercent] = useState(10)
    const [febPersonalPercent, setFebPersonalPercent] = useState(15)
    const[febHealthPercent, setFebHealthPercent] = useState(10)
    const[febHomePercent, setFebHomePercent] = useState(10)
    const[febBillsPercent, setFebBillsPercent] = useState(40) 

    const[marFoodPercent, setMarFoodPercent] = useState(15)
    const[marAutoPercent, setMarAutoPercent] = useState(10)
    const [marPersonalPercent, setMarPersonalPercent] = useState(15)
    const[marHealthPercent, setMarHealthPercent] = useState(10)
    const[marHomePercent, setMarHomePercent] = useState(10)
    const[marBillsPercent, setMarBillsPercent] = useState(40)

    const[aprFoodPercent, setAprFoodPercent] = useState(15)
    const[aprAutoPercent, setAprAutoPercent] = useState(10)
    const [aprPersonalPercent, setAprPersonalPercent] = useState(15)
    const[aprHealthPercent, setAprHealthPercent] = useState(10)
    const[aprHomePercent, setAprHomePercent] = useState(10)
    const[aprBillsPercent, setAprBillsPercent] = useState(40)

    const[mayFoodPercent, setMayFoodPercent] = useState(15)
    const[mayAutoPercent, setMayAutoPercent] = useState(10)
    const [mayPersonalPercent, setMayPersonalPercent] = useState(15)
    const[mayHealthPercent, setMayHealthPercent] = useState(10)
    const[mayHomePercent, setMayHomePercent] = useState(10)
    const[mayBillsPercent, setMayBillsPercent] = useState(40)

    const[junFoodPercent, setJunFoodPercent] = useState(15)
    const[junAutoPercent, setJunAutoPercent] = useState(10)
    const [junPersonalPercent, setJunPersonalPercent] = useState(15)
    const[junHealthPercent, setJunHealthPercent] = useState(10)
    const[junHomePercent, setJunHomePercent] = useState(10)
    const[junBillsPercent, setJunBillsPercent] = useState(40)

    const[julFoodPercent, setJulFoodPercent] = useState(15)
    const[julAutoPercent, setJulAutoPercent] = useState(10)
    const [julPersonalPercent, setJulPersonalPercent] = useState(15)
    const[julHealthPercent, setJulHealthPercent] = useState(10)
    const[julHomePercent, setJulHomePercent] = useState(10)
    const[julBillsPercent, setJulBillsPercent] = useState(40)

    const[augFoodPercent, setAugFoodPercent] = useState(15)
    const[augAutoPercent, setAugAutoPercent] = useState(10)
    const [augPersonalPercent, setAugPersonalPercent] = useState(15)
    const[augHealthPercent, setAugHealthPercent] = useState(10)
    const[augHomePercent, setAugHomePercent] = useState(10)
    const[augBillsPercent, setAugBillsPercent] = useState(40)

    const[sepFoodPercent, setSepFoodPercent] = useState(15)
    const[sepAutoPercent, setSepAutoPercent] = useState(10)
    const [sepPersonalPercent, setSepPersonalPercent] = useState(15)
    const[sepHealthPercent, setSepHealthPercent] = useState(10)
    const[sepHomePercent, setSepHomePercent] = useState(10)
    const[sepBillsPercent, setSepBillsPercent] = useState(40)

    const[octFoodPercent, setOctFoodPercent] = useState(15)
    const[octAutoPercent, setOctAutoPercent] = useState(10)
    const [octPersonalPercent, setOctPersonalPercent] = useState(15)
    const[octHealthPercent, setOctHealthPercent] = useState(10)
    const[octHomePercent, setOctHomePercent] = useState(10)
    const[octBillsPercent, setOctBillsPercent] = useState(40)

    const[novFoodPercent, setNovFoodPercent] = useState(15)
    const[novAutoPercent, setNovAutoPercent] = useState(10)
    const [novPersonalPercent, setNovPersonalPercent] = useState(15)
    const[novHealthPercent, setNovHealthPercent] = useState(10)
    const[novHomePercent, setNovHomePercent] = useState(10)
    const[novBillsPercent, setNovBillsPercent] = useState(40)

    const[decFoodPercent, setDecFoodPercent] = useState(15)
    const[decAutoPercent, setDecAutoPercent] = useState(10)
    const [decPersonalPercent, setDecPersonalPercent] = useState(15)
    const[decHealthPercent, setDecHealthPercent] = useState(10)
    const[decHomePercent, setDecHomePercent] = useState(10)
    const[decBillsPercent, setDecBillsPercent] = useState(40)

const janGoals = goals.filter((g) => {
  return( g.month == "Jan")
})

const janExpenses = expenses.filter((ex) => {
  return (ex.month == "Jan")
})

const febGoals = goals.filter((g) => {
  return( g.month == "Feb")
})

const febExpenses = expenses.filter((ex) => {
  return (ex.month == "Feb")
})

const marGoals = goals.filter((g) => {
  return( g.month == "Mar")
})

const marExpenses = expenses.filter((ex) => {
  return (ex.month == "Mar")
})

const aprGoals = goals.filter((g) => {
  return( g.month == "Apr")
})

const aprExpenses = expenses.filter((ex) => {
  return (ex.month == "Apr")
})

const mayGoals = goals.filter((g) => {
  return( g.month == "May")
})

const mayExpenses = expenses.filter((ex) => {
  return (ex.month == "May")
})

const junGoals = goals.filter((g) => {
  return( g.month == "Jun")
})

const junExpenses = expenses.filter((ex) => {
  return (ex.month == "Jun")
})

const julGoals = goals.filter((g) => {
  return( g.month == "Jul")
})

const julExpenses = expenses.filter((ex) => {
  return (ex.month == "Jul")
})

const augGoals = goals.filter((g) => {
  return( g.month == "Aug")
})

const augExpenses = expenses.filter((ex) => {
  return (ex.month == "Aug")
})

const sepGoals = goals.filter((g) => {
  return( g.month == "Sep")
})

const sepExpenses = expenses.filter((ex) => {
  return (ex.month == "Sep")
})

const octGoals = goals.filter((g) => {
  return( g.month == "Oct")
})

const octExpenses = expenses.filter((ex) => {
  return (ex.month == "Oct")
})

const novGoals = goals.filter((g) => {
  return( g.month == "Nov")
})

const novExpenses = expenses.filter((ex) => {
  return (ex.month == "Nov")
})

const decGoals = goals.filter((g) => {
  return( g.month == "Dec")
})

const decExpenses = expenses.filter((ex) => {
  return (ex.month == "Dec")
})




// sorting 
const sortedExpenses = expenses.sort(
  function(a,b) {
    return monthSort[a.month] - monthSort[b.month]
  }
)

const sortedGoals = goals.sort(
  function(a,b) {
    return monthSort[a.month] - monthSort[b.month]
  }
)

const goalsToDisplay = goals.filter((g) => {
  if (category.length == 0 && month.length == 0) {
    return(g)
  }
  else if( category.length > 0 && month.length == 0) {
    return (g.category == category)
  }
  else if (category.length == 0 && month.length > 0) {
    return(g.month == month)
  }

  else return(g.category == category && g.month == month)
})

  // const goalsToDisplay = goals.filter((g) => {
  //   return ( category.length == 0? 
  //     g: g.category == category 
  //   )
  // })

  const expensesToDisplay = expenses.filter((e) => {
    if (category.length == 0 && month.length == 0) {
      return(e)
    }
    else if( category.length > 0 && month.length == 0) {
      return (e.category == category)
    }
    else if (category.length == 0 && month.length > 0) {
      return(e.month == month)
    }

    else return(e.category == category && e.month == month)
  })
  





  //goal functions

  function handleNewGoal(e) {
    e.preventDefault();
    alert("Goal created!")
    //console.log(goalMonth, goalCategory, goalBudget)

    const newGoal = {
      user_id: 1,
      month: goalMonth, 
      category: goalCategory,
      budget: parseFloat(goalBudget)
    };


    
    fetch(`http://localhost:4000/goals`, {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newGoal)
    })
    .then(res => res.json())
    .then(newGoalObj => {
      addGoal(newGoalObj)
    }) 
  }

  function editGoal(updatedGoalObj){
    const updatedGoalsArray = goals.map((g) => g.id == updatedGoalObj.id? updatedGoalObj : g)
    setGoals(updatedGoalsArray)
  }

  function deleteGoal(updatedGoalsArray) {
    setGoals(updatedGoalsArray)
  }

  function addGoal(newGoalObj) {
    const newGoalsArray = [...goals, newGoalObj]
    setGoals(newGoalsArray)
  }

  function handleChange(e) {
   setGoalMonth(e.target.value)
   console.log(goalMonth)
  }

  function handleCategoryChange(e) {
    setGoalCategory(e.target.value)
    console.log(goalCategory)
  }




  

//expense functions

  function handleNewExpense(e) {
    e.preventDefault();
    alert('Expense Submitted!')
    //console.log(goalMonth, goalCategory, goalBudget)

    const newGoal = {
      user_id: 1,
      month: expenseMonth, 
      category: expenseCategory,
      price: parseFloat(expensePrice),
      description: expenseDescription
    };

    fetch(`http://localhost:4000/expenses`, {
      method: "POST", 
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newGoal)
    })
    .then(res => res.json())
    .then(newExpenseObj => {
      addExpense(newExpenseObj)
    })
  }

function handleChangeExpense(e) {
  setExpenseMonth(e.target.value)
}

function handleCategoryChangeExpense(e){
  console.log(e.target.value)
  setExpenseCategory(e.target.value)
}

function handleDescription(e){
  setExpenseDescription(e.target.value)
}

function addExpense(newExpenseObj) {
  const newExpensesArray = [...expenses, newExpenseObj]
  setExpenses(newExpensesArray)
}

function deleteExpense(updatedExpensesArray) {
  setExpenses(updatedExpensesArray)
}

const monthOptions =[ 
  {key: "Jan", value: "Jan", text:"Jan"}, 
  {key:"Feb", value: "Feb", text:"Feb"},
  {key:"Mar", value:"Mar", text:"Mar"},
  {key:"Apr", value:"Apr", text:"Apr"},
  {key:"May", value:"May", text:"May"},
  {key:"Jun", value:"Jun", text:"Jun"},
  {key:"Jul", value:"Jul", text:"Jul"},
  {key:"Aug", value:"Aug", text:"Aug"},
  {key:"Sep", value:"Sep", text:"Sep"},
  {key:"Oct", value:"Oct", text:"Oct"},
  {key:"Nov", value:"Nov", text:"Nov"},
  {key:"Dec", value:"Dec", text:"Dec"}
]

const categoryOptions =[
  {key:"All", value:"All", text:"All"},
  {key:"Food", value:"Food", text:"Food"},
  {key:"Auto", value:"Auto", text:"Auto"},
  {key:"Personal", value:"Personal", text:"Personal"},
  {key:"Home", value:"Home", text:"Home"},
  {key:"Health", value:"Health", text:"Health"},
  {key:"Bills", value:"Bills", text:"Bills"}
]


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div class="bg">
    
    
       
        
      
      <Switch>
        <Route exact path="/">
          <Auth setCurrentUser={setCurrentUser} history={props.history}/>
        </Route>



        <Route exact path= "/home" >
          <div id="home" >
            <header> <div class ="overlay">
              <h1>GotNoMoney $</h1>
              <Image floated="left" size='medium' circular bordered src='https://dcassetcdn.com/design_img/2472396/432085/432085_13016907_2472396_8e250fe1_image.jpg' />
              </div>
            
              </header>
          

        
        <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
          <br></br>

          <Header id="appheader" as="h2" textAlign="center"dividing >Welcome to the homepage! Here you can set goals and add expenses</Header>      
      <div id="readme">

    <Button animated="fade" onClick={() => setReadMe(!readMe)}  fluid size='medium' color="green">
     <Button.Content visible>Site Overview </Button.Content> 
     <Button.Content hidden>Click me for a readme!</Button.Content>
     </Button>
    </div>

  {readMe ? <p id="instructions">
  This is a budgeting application to assist with fiscal responsibility. You can set budgeting goals based on multiple spending categories for all 12 months of the year. 
  In addition, you can add your expenses for each month and category that you decide they fall under. You are able to edit, delete, and view those goals and expenses.
  They are sorted from January to December, but you can filter by month as well as category. In the Expenses tab, you will also be able to view annual trends of your spending against the goals you have set.
  In each of the monthly tabs, you can see spending breakdown, how close you were to reaching the goals you spent, and set parameters for each category's percentage of total spending with recommendations corresponding to those percentages.
  For your convenience, each month has a default of 15% food, 10% auto, 15% personal, 10% health, 10% home, and 40% bills. However, those can be adjusted per month for flexibility and the app will remember your preferences.
  Lastly, the graphs and feedback will change dynamically as you enter new data or change your benchmarks!
  
    </p> : null}    
    
    <div id="newGoalForm">
      <form className="home" onSubmit ={handleNewGoal} >
        <h2 style={{textAlign:"center"}}>Create New Goal </h2>
        <label htmlFor="month"> <strong>Month </strong></label>
        <br></br>
        {/* <Select size="mini" onChange={handleChange} options={monthOptions} placeholder="Select month" */}
      <select onChange={handleChange}>
        <option value="Jan"> Jan </option>
           <option value="Feb">Feb </option>
           <option value="Mar">Mar </option>
           <option value="Apr">Apr </option>
           <option value="May">May </option>
           <option value="Jun">Jun </option>
           <option value="Jul">Jul </option>
           <option value="Aug">Aug </option>
           <option value="Sep">Sep </option>
           <option value="Oct">Oct </option>
           <option value="Nov">Nov </option>
           <option value="Dec">Dec </option>
           </select>
        {/* /> */}
      <br></br> <br></br>
        <label htmlFor="category"> <strong>Category </strong></label> <br></br> 
        {/* <Select onChange={handleCategoryChange} options={categoryOptions} placeholder="Pick a category" */}
        <select onChange={handleCategoryChange}>
           <option value="All">All </option>
           <option value="Food">Food </option>
           <option value="Auto">Auto</option>
           <option value="Personal">Personal</option>
           <option value="Home">Home</option>
          <option value="Health">Health</option>
          <option value="Bills">Bills</option>
          </select>
        {/* /> */}
        <br></br> <br></br>
        
        <label htmlFor="budget"><strong>Budget </strong></label>
        <br></br>
        <input className ="show"
          type="number"
          name="budget"
          value={goalBudget}
          onChange={(e) => setGoalBudget(e.target.value)} />

          <br></br>
          <br></br>

        {/* <input type="submit" value="Submit" /> */}
        <Button type='submit' color='green' fluid size='medium'> Submit Goal</Button>

      </form>
      </div>

        <br></br>

      <div className="newExpenseForm">
      <form className="home" onSubmit ={handleNewExpense} >
        <h2 style={{textAlign:"center"}}>Create New Expense </h2>
        <label htmlFor="month"> <strong>Month </strong></label> <br></br>
        <select onChange={handleChangeExpense} >
          <option value="Jan"> Jan </option>
          <option value="Feb">Feb </option>
          <option value="Mar">Mar </option>
          <option value="Apr">Apr </option>
          <option value="May">May </option>
          <option value="Jun">Jun </option>
          <option value="Jul">Jul </option>
          <option value="Aug">Aug </option>
          <option value="Sep">Sep </option>
          <option value="Oct">Oct </option>
          <option value="Nov">Nov </option>
          <option value="Dec">Dec </option>
        </select>
        <br></br> <br></br>

        <label htmlFor="category"> <strong>Category </strong></label> <br></br>
        <select onChange={handleCategoryChangeExpense} >
          {/* <option value="All">All </option> */}
          <option value="Food">Food </option>
          <option value="Auto">Auto</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="Health">Health</option>
          <option value="Bills">Bills</option>
        </select>
        <br></br> <br></br>
        
        <label htmlFor="price"><strong>Price </strong></label> <br></br>
        <input className="show"
          type="number"
          name="price"
          value={expensePrice}
          onChange={(e) => setExpensePrice(e.target.value)} />
          <br></br> <br></br>

          <label htmlFor="description"><strong>Description </strong></label> <br></br>
          <input 
          type="text"
          name="description"
  
          onChange={handleDescription} />
          <br></br> <br></br>
          <Button type='submit' color='green' fluid size='medium'> Submit Expense</Button>

        {/* <input type="submit" value="Submit" /> */}

      </form>
      </div>
      </div>
      
        </Route>
    
       <Route exact path ="/allgoals" >
       <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <GoalFilter goals={goals} category={category} setCategory={setCategory} month={month} setMonth={setMonth}/>
         <Goals alsoImportant={goals} goals={goalsToDisplay} deleteGoal={deleteGoal} editGoal={editGoal}/>
       </Route>

        {/* alsoImportant is to fix filter goals bug with charts */}

      <Route exact path="/allexpenses" >
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <ExpenseFilter expenses={expenses} category={category} setCategory={setCategory} month={month} setMonth={setMonth}/>
        <Expenses goals={goals} important={expenses} expenses={expensesToDisplay} deleteExpense={deleteExpense}/> 

      </Route>

      {/* important is to fix filter expenses bug with charts  */}

      <Route exact path="/jan">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Jan janGoals={janGoals} janExpenses={janExpenses} janFoodPercent={janFoodPercent} setJanFoodPercent={setJanFoodPercent} janAutoPercent={janAutoPercent} setJanAutoPercent={setJanAutoPercent} janPersonalPercent={janPersonalPercent} setJanPersonalPercent={setJanPersonalPercent} janHomePercent={janHomePercent} setJanHomePercent={setJanHomePercent} janHealthPercent={janHealthPercent} setJanHealthPercent={setJanHealthPercent} janBillsPercent={janBillsPercent} setJanBillsPercent={setJanBillsPercent}/> 
      </Route>

      <Route exact path="/feb">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Feb febGoals={febGoals} febExpenses={febExpenses} febFoodPercent={febFoodPercent} setFebFoodPercent={setFebFoodPercent} febAutoPercent={febAutoPercent} setFebAutoPercent={setFebAutoPercent} febPersonalPercent={febPersonalPercent} setFebPersonalPercent={setFebPersonalPercent} febHomePercent={febHomePercent} setFebHomePercent={setFebHomePercent} febHealthPercent={febHealthPercent} setFebHealthPercent={setFebHealthPercent} febBillsPercent={febBillsPercent} setFebBillsPercent={setFebBillsPercent}/> 
      </Route>

      <Route exact path="/mar">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Mar marGoals={marGoals} marExpenses={marExpenses} marFoodPercent={marFoodPercent} setMarFoodPercent={setMarFoodPercent} marAutoPercent={marAutoPercent} setMarAutoPercent={setMarAutoPercent} marPersonalPercent={marPersonalPercent} setMarPersonalPercent={setMarPersonalPercent} marHomePercent={marHomePercent} setMarHomePercent={setMarHomePercent} marHealthPercent={marHealthPercent} setMarHealthPercent={setMarHealthPercent} marBillsPercent={marBillsPercent} setMarBillsPercent={setMarBillsPercent}/> 
      </Route>

      <Route exact path="/apr">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Apr aprGoals={aprGoals} aprExpenses={aprExpenses} aprFoodPercent={aprFoodPercent} setAprFoodPercent={setAprFoodPercent} aprAutoPercent={aprAutoPercent} setAprAutoPercent={setAprAutoPercent} aprPersonalPercent={aprPersonalPercent} setAprPersonalPercent={setAprPersonalPercent} aprHomePercent={aprHomePercent} setAprHomePercent={setAprHomePercent} aprHealthPercent={aprHealthPercent} setAprHealthPercent={setAprHealthPercent} aprBillsPercent={aprBillsPercent} setAprBillsPercent={setAprBillsPercent}/> 
      </Route>

      <Route exact path="/may">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <May mayGoals={mayGoals} mayExpenses={mayExpenses} mayFoodPercent={mayFoodPercent} setMayFoodPercent={setMayFoodPercent} mayAutoPercent={mayAutoPercent} setMayAutoPercent={setMayAutoPercent} mayPersonalPercent={mayPersonalPercent} setMayPersonalPercent={setMayPersonalPercent} mayHomePercent={mayHomePercent} setMayHomePercent={setMayHomePercent} mayHealthPercent={mayHealthPercent} setMayHealthPercent={setMayHealthPercent} mayBillsPercent={mayBillsPercent} setMayBillsPercent={setMayBillsPercent}/> 
      </Route>

      <Route exact path="/jun">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Jun junGoals={junGoals} junExpenses={junExpenses} junFoodPercent={junFoodPercent} setJunFoodPercent={setJunFoodPercent} junAutoPercent={junAutoPercent} setJunAutoPercent={setJunAutoPercent} junPersonalPercent={junPersonalPercent} setJunPersonalPercent={setJunPersonalPercent} junHomePercent={junHomePercent} setJunHomePercent={setJunHomePercent} junHealthPercent={junHealthPercent} setJunHealthPercent={setJunHealthPercent} junBillsPercent={junBillsPercent} setJunBillsPercent={setJunBillsPercent}/> 
      </Route>

      <Route exact path="/jul">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Jul julGoals={julGoals} julExpenses={julExpenses} julFoodPercent={julFoodPercent} setJulFoodPercent={setJulFoodPercent} julAutoPercent={julAutoPercent} setJulAutoPercent={setJulAutoPercent} julPersonalPercent={julPersonalPercent} setJulPersonalPercent={setJulPersonalPercent} julHomePercent={julHomePercent} setJulHomePercent={setJulHomePercent} julHealthPercent={julHealthPercent} setJulHealthPercent={setJulHealthPercent} julBillsPercent={julBillsPercent} setJulBillsPercent={setJulBillsPercent}/> 
      </Route>

      <Route exact path="/aug">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Aug augGoals={augGoals} augExpenses={augExpenses} augFoodPercent={augFoodPercent} setAugFoodPercent={setAugFoodPercent} augAutoPercent={augAutoPercent} setAugAutoPercent={setAugAutoPercent} augPersonalPercent={augPersonalPercent} setAugPersonalPercent={setAugPersonalPercent} augHomePercent={augHomePercent} setAugHomePercent={setAugHomePercent} augHealthPercent={augHealthPercent} setAugHealthPercent={setAugHealthPercent} augBillsPercent={augBillsPercent} setAugBillsPercent={setAugBillsPercent}/> 
      </Route>

      <Route exact path="/sep">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Sep sepGoals={sepGoals} sepExpenses={sepExpenses} sepFoodPercent={sepFoodPercent} setSepFoodPercent={setSepFoodPercent} sepAutoPercent={sepAutoPercent} setSepAutoPercent={setSepAutoPercent} sepPersonalPercent={sepPersonalPercent} setSepPersonalPercent={setSepPersonalPercent} sepHomePercent={sepHomePercent} setSepHomePercent={setSepHomePercent} sepHealthPercent={sepHealthPercent} setSepHealthPercent={setSepHealthPercent} sepBillsPercent={sepBillsPercent} setSepBillsPercent={setSepBillsPercent}/> 
      </Route>

      <Route exact path="/oct">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Oct octGoals={octGoals} octExpenses={octExpenses} octFoodPercent={octFoodPercent} setOctFoodPercent={setOctFoodPercent} octAutoPercent={octAutoPercent} setOctAutoPercent={setOctAutoPercent} octPersonalPercent={octPersonalPercent} setOctPersonalPercent={setOctPersonalPercent} octHomePercent={octHomePercent} setOctHomePercent={setOctHomePercent} octHealthPercent={octHealthPercent} setOctHealthPercent={setOctHealthPercent} octBillsPercent={octBillsPercent} setOctBillsPercent={setOctBillsPercent}/> 
      </Route>

      <Route exact path="/nov">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Nov novGoals={novGoals} novExpenses={novExpenses} novFoodPercent={novFoodPercent} setNovFoodPercent={setNovFoodPercent} novAutoPercent={novAutoPercent} setNovAutoPercent={setNovAutoPercent} novPersonalPercent={novPersonalPercent} setNovPersonalPercent={setNovPersonalPercent} novHomePercent={novHomePercent} setNovHomePercent={setNovHomePercent} novHealthPercent={novHealthPercent} setNovHealthPercent={setNovHealthPercent} novBillsPercent={novBillsPercent} setNovBillsPercent={setNovBillsPercent}/> 
      </Route>

      <Route exact path="/dec">
      <NavBar setCurrentUser={setCurrentUser} handleLogOut={handleLogOut} history={props.history}/> 
        <Dec decGoals={decGoals} decExpenses={decExpenses} decFoodPercent={decFoodPercent} setDecFoodPercent={setDecFoodPercent} decAutoPercent={decAutoPercent} setDecAutoPercent={setDecAutoPercent} decPersonalPercent={decPersonalPercent} setDecPersonalPercent={setDecPersonalPercent} decHomePercent={decHomePercent} setDecHomePercent={setDecHomePercent} decHealthPercent={decHealthPercent} setDecHealthPercent={setDecHealthPercent} decBillsPercent={decBillsPercent} setDecBillsPercent={setDecBillsPercent}/> 
      </Route>

      </Switch>
    </div>
  );
}

export default withRouter(App);
