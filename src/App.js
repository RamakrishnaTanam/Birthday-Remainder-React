import React from "react";
import BirthdayList from "./components/BirthdayList";
import birthdays from "./data";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Birthday Reminder</h1>
      <BirthdayList data={birthdays} />
    </div>
  );
}

export default App;