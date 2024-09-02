import React, { useState } from 'react';
import ScheduleForm from './ScheduleForm';
import ScheduleList from './ScheduleList';

const AdminPanel = () => {
  const [schedules, setSchedules] = useState([]);

  const addSchedule = (newSchedule) => {
    setSchedules([...schedules, newSchedule]);
  };

  return (
    <div>
      <h1>Panel de Administración</h1>
      <ScheduleForm addSchedule={addSchedule} />
      <ScheduleList schedules={schedules} />
    </div>
  );
};

export default AdminPanel;