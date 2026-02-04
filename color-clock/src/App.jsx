// Import the 'format' function from date-fns library to handle date/time strings
import { format } from 'date-fns'

function App() {
  // Create a new Date object representing the current moment
  const today = new Date();
 
  return (
    // Centers the clock horizontally and pushes it down from the top
    <div className='flex justify-center mt-50'>
      
      {/* 
          Main Clock Container:
      */}
      <div className="clock-container shadow-md font-bold flex justify-center w-100 h-50 rounded-full bg-blue-200 ml-70">
        
        {/* Body: Centers the text and adds padding to the top to align content */}
        <div className="clock-card text-center pt-15">
          
          {/* 
              Time Display:
              format(today, "HH:mm:ss") displays time in 24-hour format (e.g., 14:30:05)
          */}
          <h1 className="clock-time text-3xl">
            {format(today, "HH:mm:ss")}
          </h1>

          {/* 
              Date Display:
              format(today, "eeee, MMMM do, yyyy") displays: Day, Month, Date with suffix, Year
          */}
          <p className="clock-date italic">
            {format(today, "eeee, MMMM do, yyyy")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
