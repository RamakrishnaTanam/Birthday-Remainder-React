import React from "react";

const BirthdayCard = ({ name, date, image, extraInfo }) => {
  const calculateAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const todayYear = new Date().getFullYear();
    return todayYear - birthYear;
  };

  return (
    <div className="birthday-card">
      <img src={image} alt={`${name}'s photo`} />
      <div>
        <h3>{name}</h3>
        <p>Age: {calculateAge(date)}</p>
        <p>Birthday: {new Date(date).toDateString()}</p>
        {extraInfo && <p>{extraInfo}</p>}
      </div>
    </div>
  );
};

export default BirthdayCard;