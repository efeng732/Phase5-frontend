import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import {Route, Switch} from "react-router-dom"

//components
import Goals from './Goals.js'
import Expenses from './Expenses.js'
import NavBar from './NavBar.js'
import GoalFilter from './GoalFilter.js'
import ExpenseFilter from './ExpenseFilter.js'

//months unclean edition
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


function App() {

  const [goals, setGoals] = useState([])
  const [expenses, setExpenses] = useState([])
  const [category, setCategory] = useState("")
  const [month, setMonth] = useState("")

  const[goalMonth, setGoalMonth] = useState("Jan")
  const[goalCategory, setGoalCategory] = useState("All")
  const[goalBudget, setGoalBudget] = useState(0)

  const[expenselMonth, setExpenseMonth] = useState("Jan")
  const[expenseCategory, setExpenseCategory] = useState("All")
  const[expensePrice, setExpensePrice] = useState(0)
  const[expenseDescription, setExpenseDescription] = useState("")

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


  //filtering data 

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


  const goalsToDisplay = goals.filter((g) => {
    return ( category.length == 0? 
      g: g.category == category 
    )
  })

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
    alert('FORM SUBMITTED')
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
  }

  function handleCategoryChange(e) {
    setGoalCategory(e.target.value)
  }




  

//expense functions

  function handleNewExpense(e) {
    e.preventDefault();
    alert('Expense SUBMITTED')
    //console.log(goalMonth, goalCategory, goalBudget)

    const newGoal = {
      user_id: 1,
      month: expenselMonth, 
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

    <div>
      <NavBar /> 
      <Switch>
        <Route exact path= "/" >
          <br></br>

      Welcome to the homepage! 
      
    

      <form onSubmit ={handleNewGoal} >
        <h2>Create New Goal </h2>
        <label htmlFor="month"> <strong>Month: </strong></label>
        <select onChange={handleChange} >
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

        <label htmlFor="category"> <strong>Category: </strong></label>
        <select onChange={handleCategoryChange} >
          <option value="All">All </option>
          <option value="Food">Food </option>
          <option value="Auto">Auto</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="Health">Health</option>
        </select>
        
        <label htmlFor="budget"><strong>Budget: </strong></label>
        <input 
          type="number"
          name="budget"
          value={goalBudget}
          onChange={(e) => setGoalBudget(e.target.value)} />

        <input type="submit" value="Submit" />

      </form>

      <br></br>

      <form onSubmit ={handleNewExpense} >
        <h2>Create New Expense </h2>
        <label htmlFor="month"> <strong>Month: </strong></label>
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

        <label htmlFor="category"> <strong>Category: </strong></label>
        <select onChange={handleCategoryChangeExpense} >
          <option value="All">All </option>
          <option value="Food">Food </option>
          <option value="Auto">Auto</option>
          <option value="Personal">Personal</option>
          <option value="Home">Home</option>
          <option value="Health">Health</option>
        </select>
        
        <label htmlFor="price"><strong>Price: </strong></label>
        <input 
          type="number"
          name="price"
          value={expensePrice}
          onChange={(e) => setExpensePrice(e.target.value)} />
          <br></br>

          <label htmlFor="description"><strong>Description: </strong></label>
          <input 
          type="text"
          name="description"
          onChange={handleDescription} />

        <input type="submit" value="Submit" />

      </form>

        </Route>
    
       <Route exact path ="/allgoals" >
        <GoalFilter goals={goals} category={category} setCategory={setCategory}/>
         <Goals goals={goalsToDisplay} deleteGoal={deleteGoal} editGoal={editGoal}/>
       </Route>

      <Route exact path="/allexpenses" >
        <ExpenseFilter expenses={expenses} category={category} setCategory={setCategory} month={month} setMonth={setMonth}/>
        <Expenses goals={goals} expenses={expensesToDisplay} deleteExpense={deleteExpense}/> 

      </Route>

      <Route exact path="/jan">
        <Jan janGoals={janGoals} janExpenses={janExpenses}/> 
      </Route>

      <Route exact path="/feb">
        <Feb febGoals={febGoals} febExpenses={febExpenses}/> 
      </Route>

      <Route exact path="/mar">
        <Mar marGoals={marGoals} marExpenses={marExpenses}/> 
      </Route>

      <Route exact path="/apr">
        <Apr aprGoals={aprGoals} aprExpenses={aprExpenses}/> 
      </Route>

      <Route exact path="/may">
        <May mayGoals={mayGoals} mayExpenses={mayExpenses}/> 
      </Route>

      <Route exact path="/jun">
        <Jun junGoals={junGoals} junExpenses={junExpenses}/> 
      </Route>

      <Route exact path="/jul">
        <Jul julGoals={julGoals} julExpenses={julExpenses}/> 
      </Route>

      <Route exact path="/aug">
        <Aug augGoals={augGoals} augExpenses={augExpenses}/> 
      </Route>

      <Route exact path="/sep">
        <Sep sepGoals={sepGoals} sepExpenses={sepExpenses}/> 
      </Route>

      <Route exact path="/oct">
        <Oct octGoals={octGoals} octExpenses={octExpenses}/> 
      </Route>

      <Route exact path="/nov">
        <Nov novGoals={novGoals} novExpenses={novExpenses}/> 
      </Route>

      <Route exact path="/dec">
        <Dec decGoals={decGoals} decExpenses={decExpenses}/> 
      </Route>

      </Switch>
    </div>
  );
}

export default App;
