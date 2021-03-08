function GoalFilter ({goals, category, setCategory, month, setMonth}) {

    function handleClick (e) {
        setCategory(e.target.value)
    }

    function handleMonthClick(e){
        setMonth(e.target.value)
    }

    return (
        <div>
            <br></br>

            <button 

    value =""
    onClick={handleClick}
        >
        Reset 
        </button>


            <button 
            value= "All"
            onClick={handleClick}
            >
                Total
            </button> 


            <button 
            value= "Food"
            onClick={handleClick}
            >
                Food
            </button> 
            

            <button 
            value= "Auto"
            onClick={handleClick}
            >
                Auto
            </button> 
            

            <button 
            value= "Personal"
            onClick={handleClick}
            >
                Personal
            </button> 
            

            <button 
            value= "Home"
            onClick={handleClick}
            >
                Home
            </button> 

            <button 
            value= "Health"
            onClick={handleClick}
            >
                Health
            </button> 



            <button 
            value ="Bills"
            onClick={handleClick} >
                Bills
            </button>
            <br></br>

            <button 
            value= ""
            onClick={handleMonthClick}
            >
                Reset
            </button> 
            

       

            <button 

            value ="Jan"
            onClick={handleMonthClick}
            >
                Jan
            </button>


            <button 

            value ="Feb"
            onClick={handleMonthClick}
            >
                Feb
            </button>

            <button 

            value ="Mar"
            onClick={handleMonthClick}
            >
                Mar
            </button>
            
            <button 

            value ="Apr"
            onClick={handleMonthClick}
            >
                Apr
            </button>

            <button 

            value ="May"
            onClick={handleMonthClick}
            >
                May
            </button>

            <button 

            value ="Jun"
            onClick={handleMonthClick}
            >
                Jun
            </button>

            <button 

            value ="Jul"
            onClick={handleMonthClick}
            >
                Jul
            </button>

            <button 

            value ="Aug"
            onClick={handleMonthClick}
            >
                Aug
            </button>

            <button 

            value ="Sep"
            onClick={handleMonthClick}
            >
                Sep
            </button>


            <button 

            value ="Oct"
            onClick={handleMonthClick}
            >
                Oct
            </button>

            <button 

            value ="Nov"
            onClick={handleMonthClick}
            >
                Nov
            </button>

            <button 

            value ="Dec"
            onClick={handleMonthClick}
            >
                Dec
            </button>


            
            
        </div>
    )
}

export default GoalFilter; 