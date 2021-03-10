import {useState, useEffect} from "react"
import ExpenseCard from "./ExpenseCard.js"
import {Line} from "react-chartjs-2"
import { Card } from "semantic-ui-react"


function Expenses ({goals, important, expenses, deleteExpense}) {
    const[showTotal, setShowTotal] = useState(false)
    const[showFood, setShowFood] = useState(false)
    const[showAuto, setShowAuto] = useState(false)
    const[showPersonal, setShowPersonal] = useState(false)
    const[showHealth, setShowHealth] = useState(false)
    const[showHome, setShowHome] = useState(false)
    const[showBills, setShowBills] = useState(false)


    let janTotal = 0;
    let febTotal = 0;
    let marTotal = 0;
    let aprTotal = 0;
    let mayTotal = 0;
    let junTotal = 0;
    let julTotal = 0;
    let augTotal = 0;
    let sepTotal = 0;
    let octTotal = 0;
    let novTotal = 0;
    let decTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].month === "Jan") {
            janTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Feb") {
            febTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Mar") {
            marTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Apr") {
            aprTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "May") {
            mayTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Jun") {
            junTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Jul") {
            julTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Aug") {
            augTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Sep") {
            sepTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Oct") {
            octTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Nov") {
            novTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].month === "Dec") {
            decTotal += parseFloat(expenses[i].price)
        }
    }

    let janGoalTotal = 0;
    let febGoalTotal = 0;
    let marGoalTotal = 0;
    let aprGoalTotal = 0;
    let mayGoalTotal = 0;
    let junGoalTotal = 0;
    let julGoalTotal = 0;
    let augGoalTotal = 0;
    let sepGoalTotal = 0;
    let octGoalTotal = 0;
    let novGoalTotal = 0;
    let decGoalTotal = 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "All") {
            janGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "All") {
            febGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "All") {
            marGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "All") {
            aprGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "All") {
            mayGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "All") {
            junGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "All") {
            julGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "All") {
            augGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "All") {
            sepGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "All") {
            octGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "All") {
            novGoalTotal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "All") {
            decGoalTotal += parseFloat(goals[i].budget)
        }
    }


    let janFoodTotal = 0;
    let febFoodTotal = 0;
    let marFoodTotal = 0;
    let aprFoodTotal = 0;
    let mayFoodTotal = 0;
    let junFoodTotal = 0;
    let julFoodTotal = 0;
    let augFoodTotal = 0;
    let sepFoodTotal = 0;
    let octFoodTotal = 0;
    let novFoodTotal = 0;
    let decFoodTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].category === "Food" && expenses[i].month ==="Jan") {
            janFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Feb") {
            febFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Mar") {
            marFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food"&& expenses[i].month ==="Apr") {
            aprFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="May") {
            mayFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Jun") {
            junFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Jul") {
            julFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Aug") {
            augFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Sep") {
            sepFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food"&& expenses[i].month ==="Oct") {
            octFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Nov") {
            novFoodTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Food" && expenses[i].month ==="Dec") {
            decFoodTotal += parseFloat(expenses[i].price)
        }
    }

    let janGoalFood= 0;
    let febGoalFood= 0;
    let marGoalFood= 0;
    let aprGoalFood= 0;
    let mayGoalFood= 0;
    let junGoalFood= 0;
    let julGoalFood= 0;
    let augGoalFood= 0;
    let sepGoalFood= 0;
    let octGoalFood= 0;
    let novGoalFood= 0;
    let decGoalFood= 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "Food") {
            janGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "Food") {
            febGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "Food") {
            marGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "Food") {
            aprGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "Food") {
            mayGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "Food") {
            junGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "Food") {
            julGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "Food") {
            augGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "Food") {
            sepGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "Food") {
            octGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "Food") {
            novGoalFood+= parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "Food") {
            decGoalFood+= parseFloat(goals[i].budget)
        }
    }



    let janAutoTotal = 0;
    let febAutoTotal = 0;
    let marAutoTotal = 0;
    let aprAutoTotal = 0;
    let mayAutoTotal = 0;
    let junAutoTotal = 0;
    let julAutoTotal = 0;
    let augAutoTotal = 0;
    let sepAutoTotal = 0;
    let octAutoTotal = 0;
    let novAutoTotal = 0;
    let decAutoTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].category === "Auto" && expenses[i].month ==="Jan") {
            janAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Feb") {
            febAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Mar") {
            marAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto"&& expenses[i].month ==="Apr") {
            aprAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="May") {
            mayAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Jun") {
            junAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Jul") {
            julAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Aug") {
            augAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Sep") {
            sepAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto"&& expenses[i].month ==="Oct") {
            octAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Nov") {
            novAutoTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Auto" && expenses[i].month ==="Dec") {
            decAutoTotal += parseFloat(expenses[i].price)
        }
    }

    let janGoalAuto = 0;
    let febGoalAuto = 0;
    let marGoalAuto = 0;
    let aprGoalAuto = 0;
    let mayGoalAuto = 0;
    let junGoalAuto = 0;
    let julGoalAuto = 0;
    let augGoalAuto = 0;
    let sepGoalAuto = 0;
    let octGoalAuto = 0;
    let novGoalAuto = 0;
    let decGoalAuto = 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "Auto") {
            janGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "Auto") {
            febGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "Auto") {
            marGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "Auto") {
            aprGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "Auto") {
            mayGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "Auto") {
            junGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "Auto") {
            julGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "Auto") {
            augGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "Auto") {
            sepGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "Auto") {
            octGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "Auto") {
            novGoalAuto += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "Auto") {
            decGoalAuto += parseFloat(goals[i].budget)
        }
    }


    let janPersonalTotal = 0;
    let febPersonalTotal = 0;
    let marPersonalTotal = 0;
    let aprPersonalTotal = 0;
    let mayPersonalTotal = 0;
    let junPersonalTotal = 0;
    let julPersonalTotal = 0;
    let augPersonalTotal = 0;
    let sepPersonalTotal = 0;
    let octPersonalTotal = 0;
    let novPersonalTotal = 0;
    let decPersonalTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].category === "Personal" && expenses[i].month ==="Jan") {
            janPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Feb") {
            febPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Mar") {
            marPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal"&& expenses[i].month ==="Apr") {
            aprPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="May") {
            mayPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Jun") {
            junPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Jul") {
            julPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Aug") {
            augPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Sep") {
            sepPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal"&& expenses[i].month ==="Oct") {
            octPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Nov") {
            novPersonalTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Personal" && expenses[i].month ==="Dec") {
            decPersonalTotal += parseFloat(expenses[i].price)
        }
    }

    let janGoalPersonal = 0;
    let febGoalPersonal = 0;
    let marGoalPersonal = 0;
    let aprGoalPersonal = 0;
    let mayGoalPersonal = 0;
    let junGoalPersonal = 0;
    let julGoalPersonal = 0;
    let augGoalPersonal = 0;
    let sepGoalPersonal = 0;
    let octGoalPersonal = 0;
    let novGoalPersonal = 0;
    let decGoalPersonal = 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "Personal") {
            janGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "Personal") {
            febGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "Personal") {
            marGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "Personal") {
            aprGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "Personal") {
            mayGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "Personal") {
            junGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "Personal") {
            julGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "Personal") {
            augGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "Personal") {
            sepGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "Personal") {
            octGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "Personal") {
            novGoalPersonal += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "Personal") {
            decGoalPersonal += parseFloat(goals[i].budget)
        }
    }


    let janHealthTotal = 0;
    let febHealthTotal = 0;
    let marHealthTotal = 0;
    let aprHealthTotal = 0;
    let mayHealthTotal = 0;
    let junHealthTotal = 0;
    let julHealthTotal = 0;
    let augHealthTotal = 0;
    let sepHealthTotal = 0;
    let octHealthTotal = 0;
    let novHealthTotal = 0;
    let decHealthTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].category === "Health" && expenses[i].month ==="Jan") {
            janHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Feb") {
            febHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Mar") {
            marHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health"&& expenses[i].month ==="Apr") {
            aprHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="May") {
            mayHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Jun") {
            junHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Jul") {
            julHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Aug") {
            augHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Sep") {
            sepHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health"&& expenses[i].month ==="Oct") {
            octHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Nov") {
            novHealthTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Health" && expenses[i].month ==="Dec") {
            decHealthTotal += parseFloat(expenses[i].price)
        }
    }


    let janGoalHealth = 0;
    let febGoalHealth = 0;
    let marGoalHealth = 0;
    let aprGoalHealth = 0;
    let mayGoalHealth = 0;
    let junGoalHealth = 0;
    let julGoalHealth = 0;
    let augGoalHealth = 0;
    let sepGoalHealth = 0;
    let octGoalHealth = 0;
    let novGoalHealth = 0;
    let decGoalHealth = 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "Health") {
            janGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "Health") {
            febGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "Health") {
            marGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "Health") {
            aprGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "Health") {
            mayGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "Health") {
            junGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "Health") {
            julGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "Health") {
            augGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "Health") {
            sepGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "Health") {
            octGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "Health") {
            novGoalHealth += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "Health") {
            decGoalHealth += parseFloat(goals[i].budget)
        }
    }



    let janHomeTotal = 0;
    let febHomeTotal = 0;
    let marHomeTotal = 0;
    let aprHomeTotal = 0;
    let mayHomeTotal = 0;
    let junHomeTotal = 0;
    let julHomeTotal = 0;
    let augHomeTotal = 0;
    let sepHomeTotal = 0;
    let octHomeTotal = 0;
    let novHomeTotal = 0;
    let decHomeTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].category === "Home" && expenses[i].month ==="Jan") {
            janHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Feb") {
            febHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Mar") {
            marHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home"&& expenses[i].month ==="Apr") {
            aprHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="May") {
            mayHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Jun") {
            junHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Jul") {
            julHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Aug") {
            augHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Sep") {
            sepHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home"&& expenses[i].month ==="Oct") {
            octHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Nov") {
            novHomeTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Home" && expenses[i].month ==="Dec") {
            decHomeTotal += parseFloat(expenses[i].price)
        }
    }

    let janGoalHome = 0;
    let febGoalHome = 0;
    let marGoalHome = 0;
    let aprGoalHome = 0;
    let mayGoalHome = 0;
    let junGoalHome = 0;
    let julGoalHome = 0;
    let augGoalHome = 0;
    let sepGoalHome = 0;
    let octGoalHome = 0;
    let novGoalHome = 0;
    let decGoalHome = 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "Home") {
            janGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "Home") {
            febGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "Home") {
            marGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "Home") {
            aprGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "Home") {
            mayGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "Home") {
            junGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "Home") {
            julGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "Home") {
            augGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "Home") {
            sepGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "Home") {
            octGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "Home") {
            novGoalHome += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "Home") {
            decGoalHome += parseFloat(goals[i].budget)
        }
    }



    let janBillsTotal = 0;
    let febBillsTotal = 0;
    let marBillsTotal = 0;
    let aprBillsTotal = 0;
    let mayBillsTotal = 0;
    let junBillsTotal = 0;
    let julBillsTotal = 0;
    let augBillsTotal = 0;
    let sepBillsTotal = 0;
    let octBillsTotal = 0;
    let novBillsTotal = 0;
    let decBillsTotal = 0;

    for( let i = 0; i<expenses.length; i++) {
        if(expenses[i].category === "Bills" && expenses[i].month ==="Jan") {
            janBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Feb") {
            febBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Mar") {
            marBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills"&& expenses[i].month ==="Apr") {
            aprBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="May") {
            mayBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Jun") {
            junBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Jul") {
            julBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Aug") {
            augBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Sep") {
            sepBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills"&& expenses[i].month ==="Oct") {
            octBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Nov") {
            novBillsTotal += parseFloat(expenses[i].price)
        }
        else if(expenses[i].category === "Bills" && expenses[i].month ==="Dec") {
            decBillsTotal += parseFloat(expenses[i].price)
        }
    }

    let janGoalBills = 0;
    let febGoalBills = 0;
    let marGoalBills = 0;
    let aprGoalBills = 0;
    let mayGoalBills = 0;
    let junGoalBills = 0;
    let julGoalBills = 0;
    let augGoalBills = 0;
    let sepGoalBills = 0;
    let octGoalBills = 0;
    let novGoalBills = 0;
    let decGoalBills = 0;

    for( let i = 0; i<goals.length; i++) {
        if(goals[i].month === "Jan" &&goals[i].category === "Bills") {
            janGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Feb" &&goals[i].category === "Bills") {
            febGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Mar" &&goals[i].category === "Bills") {
            marGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Apr" &&goals[i].category === "Bills") {
            aprGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "May" &&goals[i].category === "Bills") {
            mayGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jun" &&goals[i].category === "Bills") {
            junGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Jul" &&goals[i].category === "Bills") {
            julGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Aug" &&goals[i].category === "Bills") {
            augGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Sep" &&goals[i].category === "Bills") {
            sepGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Oct" &&goals[i].category === "Bills") {
            octGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Nov" &&goals[i].category === "Bills") {
            novGoalBills += parseFloat(goals[i].budget)
        }
        else if(goals[i].month === "Dec" &&goals[i].category === "Bills") {
            decGoalBills += parseFloat(goals[i].budget)
        }
    }

    const expenseComponents = expenses.map(expense => {
        return ( <ExpenseCard
        key={expense.id}
        expense={expense}
        expenses={expenses}
        deleteExpense={deleteExpense}
        />)
    })

    

    const [yearlyTotal, setYearlyTotal] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Total Spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janTotal, febTotal, marTotal, aprTotal, mayTotal, junTotal, julTotal, augTotal, sepTotal, octTotal, novTotal, decTotal]

        },
        {
            label: 'Monthly Total Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2)',
            borderColor: "white",
            borderWidth: 2,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalTotal, febGoalTotal, marGoalTotal, aprGoalTotal, mayGoalTotal, junGoalTotal, julGoalTotal, augGoalTotal, sepGoalTotal, octGoalTotal, novGoalTotal, decGoalTotal]
        }]
    })

    const [yearlyFood, setYearlyFood] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Food spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janFoodTotal, febFoodTotal, marFoodTotal, aprFoodTotal, mayFoodTotal, junFoodTotal, julFoodTotal, augFoodTotal, sepFoodTotal, octFoodTotal, novFoodTotal, decFoodTotal]

        },
        {
            label: 'Monthly Food Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2', 
            borderColor: 'white',
            borderWidth: 2, 
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalFood, febGoalFood, marGoalFood, aprGoalFood, mayGoalFood, junGoalFood, julGoalFood, augGoalFood, sepGoalFood, octGoalFood, novGoalFood, decGoalFood]
        }
    ]
    })
    
    const [yearlyAuto, setYearlyAuto] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Auto Spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janAutoTotal, febAutoTotal, marAutoTotal, aprAutoTotal, mayAutoTotal, junAutoTotal, julAutoTotal, augAutoTotal, sepAutoTotal, octAutoTotal, novAutoTotal, decAutoTotal]

        },
        {
            label: 'Monthly Auto Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2', 
            borderColor: 'white',
            borderWidth: 2, 
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalAuto, febGoalAuto, marGoalAuto, aprGoalAuto, mayGoalAuto, junGoalAuto, julGoalAuto, augGoalAuto, sepGoalAuto, octGoalAuto, novGoalAuto, decGoalAuto]
        }]
    })

    const [yearlyPersonal, setYearlyPersonal] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Personal Spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janPersonalTotal, febPersonalTotal, marPersonalTotal, aprPersonalTotal, mayPersonalTotal, junPersonalTotal, julPersonalTotal, augPersonalTotal, sepPersonalTotal, octPersonalTotal, novPersonalTotal, decPersonalTotal]

        },
        {
            label: 'Monthly Personal Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2', 
            borderColor: 'white',
            borderWidth: 2, 
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalPersonal, febGoalPersonal, marGoalPersonal, aprGoalPersonal, mayGoalPersonal, junGoalPersonal, julGoalPersonal, augGoalPersonal, sepGoalPersonal, octGoalPersonal, novGoalPersonal, decGoalPersonal]
        }
    ]
    })

    const [yearlyHealth, setYearlyHealth] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Health Spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janHealthTotal, febHealthTotal, marHealthTotal, aprHealthTotal, mayHealthTotal, junHealthTotal, julHealthTotal, augHealthTotal, sepHealthTotal, octHealthTotal, novHealthTotal, decHealthTotal]

        },
        {
            label: 'Monthly Health Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2', 
            borderColor: 'white',
            borderWidth: 2, 
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalHealth, febGoalHealth, marGoalHealth, aprGoalHealth, mayGoalHealth, junGoalHealth, julGoalHealth, augGoalHealth, sepGoalHealth, octGoalHealth, novGoalHealth, decGoalHealth]
        }]
    })

    const [yearlyHome, setYearlyHome] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Home Spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janHomeTotal, febHomeTotal, marHomeTotal, aprHomeTotal, mayHomeTotal, junHomeTotal, julHomeTotal, augHomeTotal, sepHomeTotal, octHomeTotal, novHomeTotal, decHomeTotal]
        },
        {
            label: 'Monthly Health Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2', 
            borderColor: 'white',
            borderWidth: 2, 
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalHome, febGoalHome, marGoalHome, aprGoalHome, mayGoalHome, junGoalHome, julGoalHome, augGoalHome, sepGoalHome, octGoalHome, novGoalHome, decGoalHome]
        }]
    })

    const [yearlyBills, setYearlyBills] = useState({
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Bills Spending', 
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)' , 
                borderColor: 'rgba(0,0,0,1)' ,
                borderWidth: 3,
                pointHoverRadius: 8,
                pointHoverBorderWidth: 3,
                pointHoverBorderColor: 'black',
                pointHoverBackgroundColor: 'white',
                data: [janBillsTotal, febBillsTotal, marBillsTotal, aprBillsTotal, mayBillsTotal, junBillsTotal, julBillsTotal, augBillsTotal, sepBillsTotal, octBillsTotal, novBillsTotal, decBillsTotal]

        },
        {
            label: 'Monthly Bills Goals',
            fill: false, 
            lineTension: 0.5, 
            backgroundColor: 'rgba(75,192,192, 0.2', 
            borderColor: 'white',
            borderWidth: 2, 
            pointHoverRadius: 8,
            pointHoverBorderWidth: 3,
            pointHoverBorderColor: 'white',
            pointHoverBackgroundColor: 'black',
            data: [janGoalBills, febGoalBills, marGoalBills, aprGoalBills, mayGoalBills, junGoalBills, julGoalBills, augGoalBills, sepGoalBills, octGoalBills, novGoalBills, decGoalBills]
        }]
    })


    return (
    <div>
        <br></br>
        <button onClick={() => setShowTotal(!showTotal)}>
            Show monthly totals
        </button>
        {showTotal? 
        <Line 
            data={{
                labels: yearlyTotal.labels,
                datasets: yearlyTotal.datasets
            }}
            
            options={{
                responsive: true,
                title: {
                    display: true,
                    text: 'Monthly total spending',
                    fontSize: 28,
                    fontColor: '#111'
                },
                legend:{
                    display: true,
                    position: 'right',
                    labels: {
                    fontSize: 20,
                    fontColor: 'black' }
                },
                scales: {
                    yAxes:[{
                        display: true, 
                        gridLines: {color: 'black'},
                        scaleLabel: {
                            display: true,
                            labelString: 'Dollars',
                            fontColor: 'black',
                            fontSize: 14
                        },
                        ticks: {
                            min: 2000,
                            max: 7500,
                            stepSize: 500,
                            fontColor: 'black'
                        }
                    }], 
                    xAxes: [{
                        display:true,
                        gridLines: {color: 'black'},
                        scaleLabel:{
                            display: true,
                            labelString: 'Months',
                            fontColor:'black',
                            fontSize: 14
                        },
                        ticks: {
                            fontColor:'black'
                        }
                    }]

                }
            }}
            /> : null}

    <button onClick={() => setShowFood(!showFood)}>
            Show monthly food
        </button>
        {showFood? 
        <Line 
            data={{
                labels: yearlyFood.labels,
                datasets: yearlyFood.datasets
            }}
            options={{
                responsive: 'true',
                title: {
                    display: true,
                    text: 'Monthly food spending',
                    fontSize: 28,
                    fontColor: 'black'
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels: {
                        fontSize: 20,
                        fontColor: 'black' }
                    },
                    scales: {
                        yAxes:[{
                            display: true, 
                            gridLines: {color: 'black'},
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollars',
                                fontColor: 'black',
                                fontSize: 14
                            },
                            ticks: {
                                min: 0,
                                max: 800,
                                stepSize: 100,
                                fontColor: 'black'
                            }
                        }], 
                        xAxes: [{
                            display:true,
                            gridLines: {color: 'black'},
                            scaleLabel:{
                                display: true,
                                labelString: 'Months',
                                fontColor:'black',
                                fontSize: 14
                            },
                            ticks: {
                                fontColor:'black'
                            }
                        }]
    
                    }
                }}
            /> : null}


    <button onClick={() => setShowAuto(!showAuto)}>
            Show monthly auto
        </button>
        {showAuto? 
        <Line 
            data={{
                labels: yearlyAuto.labels,
                datasets: yearlyAuto.datasets
            }}
            options={{
                responsive: 'true',
                title: {
                    display: true,
                    text: 'Monthly Auto spending',
                    fontSize: 28,
                    fontColor: 'black'
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels: {
                        fontSize: 20,
                        fontColor: 'black' }
                    },
                    scales: {
                        yAxes:[{
                            display: true, 
                            gridLines: {color: 'black'},
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollars',
                                fontColor: 'black',
                                fontSize: 14
                            },
                            ticks: {
                                min: 0,
                                max: 1000,
                                stepSize: 100,
                                fontColor: 'black'
                            }
                        }], 
                        xAxes: [{
                            display:true,
                            gridLines: {color: 'black'},
                            scaleLabel:{
                                display: true,
                                labelString: 'Months',
                                fontColor:'black',
                                fontSize: 14
                            },
                            ticks: {
                                fontColor:'black'
                            }
                        }]
    
                    }
                }}
            /> : null}


    <button onClick={() => setShowPersonal(!showPersonal)}>
            Show monthly personal
        </button>
        {showPersonal? 
        <Line 
            data={{
                labels: yearlyPersonal.labels,
                datasets: yearlyPersonal.datasets
            }}
            options={{
                responsive: true,
                title: {
                    display: true,
                    text: 'Monthly personal spending',
                    fontSize: 28,
                    fontColor: 'black'
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels: {
                        fontSize: 20,
                        fontColor: 'black' }
                    },
                    scales: {
                        yAxes:[{
                            display: true, 
                            gridLines: {color: 'black'},
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollars',
                                fontColor: 'black',
                                fontSize: 14
                            },
                            ticks: {
                                min: 0,
                                max: 4610,
                                stepSize: 500,
                                fontColor: 'black'
                            }
                        }], 
                        xAxes: [{
                            display:true,
                            gridLines: {color: 'black'},
                            scaleLabel:{
                                display: true,
                                labelString: 'Months',
                                fontColor:'black',
                                fontSize: 14
                            },
                            ticks: {
                                fontColor:'black'
                            }
                        }]
    
                    }
                }}
            /> : null}

<button onClick={() => setShowHealth(!showHealth)}>
            Show monthly health
        </button>
        {showHealth? 
        <Line 
            data={{
                labels: yearlyHealth.labels,
                datasets: yearlyHealth.datasets
            }}
            options={{
                responsive: true,
                title: {
                    display: true,
                    text: 'Monthly health spending',
                    fontSize: 28, 
                    fontColor: 'black'
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels: {
                        fontSize: 20,
                        fontColor: 'black' }
                    },
                    scales: {
                        yAxes:[{
                            display: true, 
                            gridLines: {color: 'black'},
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollars',
                                fontColor: 'black',
                                fontSize: 14
                            },
                            ticks: {
                                min: 0,
                                max: 1500,
                                stepSize: 200,
                                fontColor: 'black'
                            }
                        }], 
                        xAxes: [{
                            display:true,
                            gridLines: {color: 'black'},
                            scaleLabel:{
                                display: true,
                                labelString: 'Months',
                                fontColor:'black',
                                fontSize: 14
                            },
                            ticks: {
                                fontColor:'black'
                            }
                        }]
    
                    }
                }}
            /> : null}


<button onClick={() => setShowHome(!showHome)}>
            Show monthly home
        </button>
        {showHome? 
        <Line 
            data={{
                labels: yearlyHome.labels,
                datasets: yearlyHome.datasets
            }}
            options={{
                responsive: true,
                title: {
                    display: true,
                    text: 'Monthly home spending',
                    fontSize: 20
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels: {
                        fontSize: 20,
                        fontColor: 'black' }
                    },
                    scales: {
                        yAxes:[{
                            display: true, 
                            gridLines: {color: 'black'},
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollars',
                                fontColor: 'black',
                                fontSize: 14
                            },
                            ticks: {
                                min: 0,
                                max: 1200,
                                stepSize: 200,
                                fontColor: 'black'
                            }
                        }], 
                        xAxes: [{
                            display:true,
                            gridLines: {color: 'black'},
                            scaleLabel:{
                                display: true,
                                labelString: 'Months',
                                fontColor:'black',
                                fontSize: 14
                            },
                            ticks: {
                                fontColor:'black'
                            }
                        }]
    
                    }
                }}
            /> : null}

<button onClick={() => setShowBills(!showBills)}>
            Show monthly bills
        </button>
        {showBills? 
        <Line 
            data={{
                labels: yearlyBills.labels,
                datasets: yearlyBills.datasets
            }}
            options={{
                responsive: true,
                title: {
                    display: true,
                    text: 'Monthly bills spending',
                    fontSize: 20
                },
                legend:{
                    display:true,
                    position: 'right',
                    labels: {
                        fontSize: 20,
                        fontColor: 'black' }
                    },
                    scales: {
                        yAxes:[{
                            display: true, 
                            gridLines: {color: 'black'},
                            scaleLabel: {
                                display: true,
                                labelString: 'Dollars',
                                fontColor: 'black',
                                fontSize: 14
                            },
                            ticks: {
                                min: 500,
                                max: 2000,
                                stepSize: 250,
                                fontColor: 'black'
                            }
                        }], 
                        xAxes: [{
                            display:true,
                            gridLines: {color: 'black'},
                            scaleLabel:{
                                display: true,
                                labelString: 'Months',
                                fontColor:'black',
                                fontSize: 14
                            },
                            ticks: {
                                fontColor:'black'
                            }
                        }]
    
                    }
                }}
            /> : null}

       <Card.Group itemsPerRow={3} >{expenseComponents}</Card.Group>

    </div>
    )
}

export default Expenses; 