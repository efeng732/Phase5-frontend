import {useState} from "react"
import{Button, Input, Select, Grid} from "semantic-ui-react"

function GoalFilter ({goals, category, setCategory, month, setMonth}) {

    const[categoryReset, setCategoryReset] = useState(false)
    const[categoryAll, setCategoryAll]= useState(false)
    const[categoryFood, setCategoryFood]= useState(false)
    const[categoryAuto, setCategoryAuto] = useState(false)
    const[categoryPersonal, setCategoryPersonal] = useState(false)
    const[categoryHome, setCategoryHome] = useState(false)
    const[categoryHealth, setCategoryHealth] = useState(false)
    const[categoryBills, setCategoryBills] = useState(false)

    const[allmonth, setallmonth] = useState(false)
    const[jan, setjan] = useState(false)
    const[feb, setfeb] = useState(false)
    const[mar, setmar] = useState(false)
    const[apr, setapr] = useState(false)
    const[may, setmay] = useState(false)
    const[jun, setjun] = useState(false)
    const[jul, setjul] = useState(false)
    const[aug, setaug] = useState(false)
    const[sep, setsep] = useState(false)
    const[oct, setoct] = useState(false)
    const[nov, setnov] = useState(false)
    const[dec, setdec] = useState(false)


 

    function handleClick (e) {
        setCategory(e.target.value)

        setCategoryReset(false)
        setCategoryAll(false)
        setCategoryFood(false)
        setCategoryAuto(false)
        setCategoryPersonal(false)
        setCategoryHome(false)
        setCategoryHealth(false)
        setCategoryBills(false)
        if(e.target.value === "") {
            setCategoryReset(true)
        }
        else if(e.target.value ==="All") {
            setCategoryAll(true)
        }
        else if (e.target.value ==="Food") {
            setCategoryFood(true)
        }
        else if (e.target.value ==="Auto") {
            setCategoryAuto(true)
        }
        else if (e.target.value ==="Personal") {
            setCategoryPersonal(true)
        }
        else if(e.target.value ==="Home") {
            setCategoryHome(true)
        }
        else if (e.target.value ==="Health") {
            setCategoryHealth(true)
        }
        else if (e.target.value ==="Bills") {
            setCategoryBills(true)
        }
    }


    function handleMonthClick(e){
        setMonth(e.target.value)
        setallmonth(false)
        setjan(false)
        setfeb(false)
        setmar(false)
        setapr(false)
        setmay(false)
        setjun(false)
        setjul(false)
        setaug(false)
        setsep(false)
        setoct(false)
        setnov(false)
        setdec(false)
        if(e.target.value === "") {
            setallmonth(true)
        }
        else if (e.target.value ==="Jan") {
            setjan(true)
        } else if(e.target.value ==="Feb") {
            setfeb(true)
        } else if(e.target.value ==="Mar") {
            setmar(true)
        } else if (e.target.value ==="Apr") {
            setapr(true)
        } else if(e.target.value==="May") {
            setmay(true)
        } else if(e.target.value==="Jun") {
            setjun(true)
        } else if (e.target.value==="Jul") {
            setjul(true)
        } else if(e.target.value ==="Aug") {
        setaug(true)
       } else if(e.target.value==="Sep") {
           setsep(true)
       } else if(e.target.value ==="Oct") {
           setoct(true)
       } else if(e.target.value==="Nov") {
           setnov(true)
       } else if (e.target.value==="Dec"){
           setdec(true)
       }
    
    }


    return (
    
        <div>
            <br></br>

        { categoryReset ? 
            <button 
            style={{backgroundColor: "#21BA45"}}
            
        
    value =""
    onClick={handleClick}

        >
        Reset 
        </button> 
        : 
        <button 
           
        
    value =""
    onClick={handleClick}

        >
        Reset 
        </button> 
        }
         {categoryAll? 

            <button 
            style={{backgroundColor: "#21BA45"}}
            value= "All"
            onClick={handleClick}
            >
                All
            </button>  :
            <button 
   

            value= "All"
            onClick={handleClick}
            >
                All
            </button> 
                    }
                { categoryFood? 
            <button 
            value= "Food"
            onClick={handleClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Food
            </button> :
            <button 
   

            value= "Food"
            onClick={handleClick}
            >
                Food
            </button> 
            }
            
            {categoryAuto? 
            <button 
            value= "Auto"
            onClick={handleClick}
            style={{backgroundColor: "#21BA45"}}
            >
                Auto
            </button> :
             <button 
             value= "Auto"
             onClick={handleClick}
             >
                 Auto
             </button> 
                    }
            
                {categoryPersonal ?
            <button 
            value= "Personal"
            onClick={handleClick}
            style={{backgroundColor: "#21BA45"}}
            >
                Personal
            </button> :
            <button 
            value= "Personal"
            onClick={handleClick}
            >
                Personal
            </button> 
            
            }
            {categoryHome? 
            <button 
            value= "Home"
            onClick={handleClick}
            style={{backgroundColor: "#21BA45"}}
            >
                Home
            </button> :
             <button 
             value= "Home"
             onClick={handleClick}
             >
                 Home
             </button> }
             {categoryHealth? 
            <button 
            value= "Health"
            onClick={handleClick}
            style={{backgroundColor:"lawgreen"}}
            >
                Health
            </button> :
            <button 
            value= "Health"
            onClick={handleClick}
            >
                Health
            </button> }


                    {categoryBills? 
            <button 
            value ="Bills"
            onClick={handleClick}
            style={{backgroundColor:"lawgreen"}} >
                Bills
            </button>
             : <button 
             value ="Bills"
             onClick={handleClick} >
                 Bills
             </button>}
            <br></br> <br></br>


                {allmonth? 
            <button 
            value= ""
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Reset
            </button> : 
            <button 
            value= ""
            onClick={handleMonthClick}
            >
                Reset
            </button> 
            }
            

       
            {jan? 
            <button 

            value ="Jan"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Jan
            </button> :
            <button 

            value ="Jan"
            onClick={handleMonthClick}
            >
                Jan
            </button>}

            {feb? 
            <button 

            value ="Feb"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Feb
            </button> :
            <button 

            value ="Feb"
            onClick={handleMonthClick}
            >
                Feb
            </button>}

            {mar? 
            <button 

            value ="Mar"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Mar
            </button> :
            <button 

            value ="Mar"
            onClick={handleMonthClick}
            >
                Mar
            </button>}

            {apr? 
            <button 

            value ="Apr"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Apr
            </button> :
            <button 

            value ="Apr"
            onClick={handleMonthClick}
            >
                Apr
            </button>}

            {may? 
            <button 

            value ="May"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                May
            </button> :
            <button 

            value ="May"
            onClick={handleMonthClick}
            >
                May
            </button>}

            {jun? 
            <button 

            value ="Jun"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Jun
            </button> :
            <button 

            value ="Jun"
            onClick={handleMonthClick}
            >
                Jun
            </button>}

            {jul? 
            <button 

            value ="Jul"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Jul
            </button> :
            <button 

            value ="Jul"
            onClick={handleMonthClick}
            >
                Jul
            </button>} 

            {aug? 
            <button 

            value ="Aug"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Aug
            </button> :
            <button 

            value ="Aug"
            onClick={handleMonthClick}
            >
                Aug
            </button>}

            {sep? 
            <button 

            value ="Sep"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Sep
            </button> :
            <button 

            value ="Sep"
            onClick={handleMonthClick}
            >
                Sep
            </button>}

            {oct? 
            <button 

            value ="Oct"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Oct
            </button> :
            <button 

            value ="Oct"
            onClick={handleMonthClick}
            >
                Oct
            </button>}

            {nov? 
            <button 

            value ="Nov"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Nov
            </button> :
            <button 

            value ="Nov"
            onClick={handleMonthClick}
            >
                Nov
            </button>}

            {dec? 
            <button 

            value ="Dec"
            onClick={handleMonthClick}
            style={{backgroundColor:"#21BA45"}}
            >
                Dec
            </button> :
            <button 

            value ="Dec"
            onClick={handleMonthClick}
            >
                Dec
            </button>}

            <br></br>





            
            
        </div>
    
    )
}

export default GoalFilter; 