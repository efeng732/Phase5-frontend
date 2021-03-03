function GoalFilter ({goals, category, setCategory}) {

    function handleClick (e) {
        setCategory(e.target.value)
    }

    return (
        <div>
            <br></br>

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
            value= ""
            onClick={handleClick}
            >
                Reset
            </button> 
            
            
        </div>
    )
}

export default GoalFilter; 