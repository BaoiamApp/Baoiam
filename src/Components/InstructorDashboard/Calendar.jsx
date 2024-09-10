import React from 'react';

const Calendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow">
      <h2 className="text-xl text-center font-semibold mb-4">Today</h2>
      
      {/* Days of the week */}
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="text-center font-medium">{day}</div>
        ))}
      </div>
      
      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 mt-2">
        {Array.from({ length: 31 }, (_, i) => i + 1).map(date => (
          <div
            key={date}
            className={`text-center p-2 ${date === currentDay ? 'bg-indigo-900 text-white aspect-square w-10 rounded-full' : ''}`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
