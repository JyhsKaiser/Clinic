import React from 'react';

const ScheduleList = ({ schedules }) => {
  return (
    <div>
      <h2>Horarios Configurados</h2>
      <ul>
        {schedules.map((schedule, index) => (
          <li key={index}>
            {schedule.doctor} - {schedule.specialty} - {schedule.consultingRoom} - {schedule.day} - {schedule.startTime} a {schedule.endTime} - {schedule.isRecurring ? 'Recurrente' : 'Excepcional'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;
