// Dashboard.js
import React, { useEffect, useState } from 'react';
import { getExerciseData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const exerciseData = await getExerciseData();
      setData(exerciseData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Exercise Dashboard</h1>
      {data && (
        <div>
          <p>Steps: {data.steps}</p>
          <p>Calories: {data.calories}</p>
          {/* More data display */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;