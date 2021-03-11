import {useState, useEffect} from "react"
import ExpenseCard from "./ExpenseCard.js"
import {Line} from "react-chartjs-2"
import { Card } from "semantic-ui-react"


function Expenses({goals, important, expenses, deleteExpense}) {
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].month === "Jan") {
            janTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Feb") {
            febTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Mar") {
            marTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Apr") {
            aprTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "May") {
            mayTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Jun") {
            junTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Jul") {
            julTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Aug") {
            augTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Sep") {
            sepTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Oct") {
            octTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Nov") {
            novTotal += parseFloat(important[i].price)
        }
        else if(important[i].month === "Dec") {
            decTotal += parseFloat(important[i].price)
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].category === "Food" && important[i].month ==="Jan") {
            janFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Feb") {
            febFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Mar") {
            marFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food"&& important[i].month ==="Apr") {
            aprFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="May") {
            mayFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Jun") {
            junFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Jul") {
            julFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Aug") {
            augFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Sep") {
            sepFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food"&& important[i].month ==="Oct") {
            octFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Nov") {
            novFoodTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Food" && important[i].month ==="Dec") {
            decFoodTotal += parseFloat(important[i].price)
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].category === "Auto" && important[i].month ==="Jan") {
            janAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Feb") {
            febAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Mar") {
            marAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto"&& important[i].month ==="Apr") {
            aprAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="May") {
            mayAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Jun") {
            junAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Jul") {
            julAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Aug") {
            augAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Sep") {
            sepAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto"&& important[i].month ==="Oct") {
            octAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Nov") {
            novAutoTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Auto" && important[i].month ==="Dec") {
            decAutoTotal += parseFloat(important[i].price)
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].category === "Personal" && important[i].month ==="Jan") {
            janPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Feb") {
            febPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Mar") {
            marPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal"&& important[i].month ==="Apr") {
            aprPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="May") {
            mayPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Jun") {
            junPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Jul") {
            julPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Aug") {
            augPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Sep") {
            sepPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal"&& important[i].month ==="Oct") {
            octPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Nov") {
            novPersonalTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Personal" && important[i].month ==="Dec") {
            decPersonalTotal += parseFloat(important[i].price)
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].category === "Health" && important[i].month ==="Jan") {
            janHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Feb") {
            febHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Mar") {
            marHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health"&& important[i].month ==="Apr") {
            aprHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="May") {
            mayHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Jun") {
            junHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Jul") {
            julHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Aug") {
            augHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Sep") {
            sepHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health"&& important[i].month ==="Oct") {
            octHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Nov") {
            novHealthTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Health" && important[i].month ==="Dec") {
            decHealthTotal += parseFloat(important[i].price)
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].category === "Home" && important[i].month ==="Jan") {
            janHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Feb") {
            febHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Mar") {
            marHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home"&& important[i].month ==="Apr") {
            aprHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="May") {
            mayHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Jun") {
            junHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Jul") {
            julHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Aug") {
            augHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Sep") {
            sepHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home"&& important[i].month ==="Oct") {
            octHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Nov") {
            novHomeTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Home" && important[i].month ==="Dec") {
            decHomeTotal += parseFloat(important[i].price)
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

    for( let i = 0; i<important.length; i++) {
        if(important[i].category === "Bills" && important[i].month ==="Jan") {
            janBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Feb") {
            febBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Mar") {
            marBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills"&& important[i].month ==="Apr") {
            aprBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="May") {
            mayBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Jun") {
            junBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Jul") {
            julBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Aug") {
            augBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Sep") {
            sepBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills"&& important[i].month ==="Oct") {
            octBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Nov") {
            novBillsTotal += parseFloat(important[i].price)
        }
        else if(important[i].category === "Bills" && important[i].month ==="Dec") {
            decBillsTotal += parseFloat(important[i].price)
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
        important={important}
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
            label: 'Monthly Home Goals',
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
        {showTotal? 
        <button 
        style={{backgroundColor:"#21BA45"}}
         onClick={() => setShowTotal(!showTotal)}>
            Show monthly totals
        </button> : <button onClick={() => setShowTotal(!showTotal)}>
            Show monthly totals
        </button> }
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
                            max: 5500,
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
            {showFood? <button 
            style={{backgroundColor:"#21BA45"}}
            onClick={() => setShowFood(!showFood)}>
            Show monthly food
        </button> :

    <button onClick={() => setShowFood(!showFood)}>
            Show monthly food
        </button> }
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

{showAuto?  <button 
    style={{backgroundColor:"#21BA45"}}
    onClick={() => setShowAuto(!showAuto)}>
            Show monthly auto
        </button> :

    <button onClick={() => setShowAuto(!showAuto)}>
            Show monthly auto
        </button> }
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

         {showPersonal? <button
         style={{backgroundColor:"#21BA45"}}  onClick={() => setShowPersonal(!showPersonal)}>
            Show monthly personal
        </button> :
     <button onClick={() => setShowPersonal(!showPersonal)}>
            Show monthly personal
        </button> }
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
                                max: 3501,
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
            {showHealth?  <button 
            style={{backgroundColor:"#21BA45"}}
            onClick={() => setShowHealth(!showHealth)}>
            Show monthly health
        </button> :

<button onClick={() => setShowHealth(!showHealth)}>
            Show monthly health
        </button> }
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


                {showHome? <button 
                style={{backgroundColor:"#21BA45"}} 
                onClick={() => setShowHome(!showHome)}>
            Show monthly home
        </button>  : 
<button onClick={() => setShowHome(!showHome)}>
            Show monthly home
        </button> }
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
{showBills? <button
 style={{backgroundColor:"#21BA45"}}
 onClick={() => setShowBills(!showBills)}>
            Show monthly bills
        </button> :
<button onClick={() => setShowBills(!showBills)}>
            Show monthly bills
        </button> }
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