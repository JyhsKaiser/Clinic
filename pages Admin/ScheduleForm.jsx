import React, { useState } from 'react';

const ScheduleForm = ({ addSchedule }) => {
  const [doctor, setDoctor] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [consultingRoom, setConsultingRoom] = useState('');
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = { doctor, specialty, consultingRoom, day, startTime, endTime, isRecurring };
    addSchedule(newSchedule);
    // Reset form
    setDoctor('');
    setSpecialty('');
    setConsultingRoom('');
    setDay('');
    setStartTime('');
    setEndTime('');
    setIsRecurring(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} placeholder="Médico" required />
      <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Especialidad" required />
      <input type="text" value={consultingRoom} onChange={(e) => setConsultingRoom(e.target.value)} placeholder="Consultorio" required />
      <input type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Día" required />
      <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
      <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
      <label>
        Recurrente:
        <input type="checkbox" checked={isRecurring} onChange={(e) => setIsRecurring(e.target.checked)} />
      </label>
      <button type="submit">Agregar Horario</button>
    </form>
  );
};

export default ScheduleForm;
