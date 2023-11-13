import "./App.css";
import { useState } from "react";
import myImg from "./images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const [ageDays, setAgeDays] = useState("-");
  const [ageMonths, setAgeMonths] = useState("-");
  const [ageYears, setAgeYears] = useState("-");

  const handleDate = (e) => {
    console.log(e.target.value);
    setDay(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  };
  function calculateAge() {
    // Split the date string into day, month, and year components
    // var parts = birthdate.split('-');

    // Create a Date object using the components (months are 0-based in JavaScript)
    var birthDate = new Date(day,month,year);
    birthDate.setUTCHours(0, 0, 0, 0); // Reset time to midnight

    // Get the current date
    var currentDate = new Date();
    currentDate.setUTCHours(0, 0, 0, 0); // Reset time to midnight

    // Calculate the age in years
    var ageInYears = currentDate.getUTCFullYear() - birthDate.getUTCFullYear();

    // Adjust the age if the birthdate hasn't occurred yet this year
    if (
        currentDate.getUTCMonth() < birthDate.getUTCMonth() ||
        (currentDate.getUTCMonth() === birthDate.getUTCMonth() &&
            currentDate.getUTCDate() < birthDate.getUTCDate())
    ) {
        ageInYears--;
    }

    // Calculate the age in months
    var ageInMonths = currentDate.getUTCMonth() - birthDate.getUTCMonth();
    if (currentDate.getUTCDate() < birthDate.getUTCDate()) {
        ageInMonths--;
        // Ensure months are non-negative
        if (ageInMonths < 0) {
            ageInMonths += 12;
        }
    }

    // Calculate the age in days
    var ageInDays =
        currentDate.getUTCDate() -
        birthDate.getUTCDate() +
        (currentDate.getUTCMonth() - birthDate.getUTCMonth()) * 30;

    // Return the result as an object
     setAgeYears(ageInYears)
     setAgeMonths(ageInMonths)
     setAgeDays(ageInDays)
  
}

  return (
    <div className="h-screen flex items-center justify-center bg-gray-300">
      <div className="border border-gray-300 w-1/3 bg-gray-100 rounded-2xl rounded-br-[20%]">
        <div className="flex p-6">
          <div className="flex flex-col mr-2">
            <span className="text-sm text-gray-500 font-bold">Day</span>
            <input
              type="number"
              className="w-16 p-2 mr-2 rounded-md font-bold text-lg"
              name="day"
              min="1"
              max="31"
              onChange={handleDate}
            />
          </div>
          <div className="flex flex-col mr-2">
            <span className="text-sm text-gray-500 font-bold">Month</span>
            <input
              type="number"
              className="w-16 p-2 mr-2 rounded-md font-bold text-lg"
              name="month"
              min="1"
              max="12"
              onChange={handleMonth}
            />
          </div>
          <div className="flex flex-col mr-2">
            <span className="text-sm text-gray-500 font-bold">Year</span>
            <input
              type="number"
              className="w-[5rem] p-2 mr-2 rounded-md font-bold text-lg"
              name="year"
              min="1900"
              max="3000"
              onChange={handleYear}
            />
          </div>
        </div>
        <hr className=""></hr>
        <div className="w-full flex justify-end items-center ">
          <button className="" onClick={calculateAge}>
            <img
              className="w-14 bg-purple-600 rounded-full p-4 mr-4 hover:opacity-60"
              src={myImg}
              alt="logo"
            />
          </button>
        </div>
        <div className="ml-4">
          <div>
            <div
              className="p-2 w-16 bg-transparent text-purple-500 text-3xl font-bold ml-4"
              value={ageYears}
            >{ageDays}</div>
            <span className="text-[3rem] font-extrabold italic">years</span>
          </div>
          <div>
            <div
              className="p-2 w-16 bg-transparent  text-purple-500 text-3xl font-bold ml-4"
              value={ageMonths}
            >{ageMonths}</div>  
            <span className="text-[3rem] font-extrabold italic">months</span>
          </div>
          <div>
            <div
              className="p-2 w-[4rem] bg-transparent  text-purple-500 text-3xl font-bold ml-4"
              
            >{ageYears}</div>
            <span className="text-[3rem] font-extrabold italic">days</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
