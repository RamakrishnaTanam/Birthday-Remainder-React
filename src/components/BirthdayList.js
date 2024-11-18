import React from "react";
import BirthdayCard from "./BirthdayCard";

const BirthdayList = ({ data }) => {
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // Month is 0-indexed
  const todayDate = today.getDate();

  // Filter today's birthdays
  const todaysBirthdays = data.filter((person) => {
    const [year, month, day] = person.date.split("-").map(Number);
    return month === todayMonth && day === todayDate;
  });

  // Filter and sort upcoming birthdays
  const upcomingBirthdays = data
    .filter((person) => {
      const [year, month, day] = person.date.split("-").map(Number);
      return !(month === todayMonth && day === todayDate); // Exclude today's birthdays
    })
    .map((person) => {
      const [year, month, day] = person.date.split("-").map(Number);
      const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
      const isPast = birthdayThisYear < today;

      return {
        ...person,
        upcomingDate: isPast
          ? new Date(today.getFullYear() + 1, month - 1, day)
          : birthdayThisYear,
      };
    })
    .sort((a, b) => a.upcomingDate - b.upcomingDate);

  return (
    <div>
      <h2>Today's Birthdays</h2>
      {todaysBirthdays.length > 0 ? (
        todaysBirthdays.map((person) => (
          <BirthdayCard
            key={person.id}
            name={person.name}
            date={person.date}
            image={person.image}
          />
        ))
      ) : (
        <p>No birthdays today 🎉</p>
      )}

      <h2>Upcoming Birthdays</h2>
      {upcomingBirthdays.length > 0 ? (
        upcomingBirthdays.map((person) => {
          const dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
            person.upcomingDate
          );

          return (
            <BirthdayCard
              key={person.id}
              name={person.name}
              date={person.date}
              image={person.image}
              extraInfo={`Day: ${dayOfWeek}`}
            />
          );
        })
      ) : (
        <p>No upcoming birthdays 🎉</p>
      )}
    </div>
  );
};

export default BirthdayList;