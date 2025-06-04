import * as React from 'react';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';
import { Heading } from '../Heading/Heading';
import "./Piechart.css"
export default function Piechart() {
  const [problems, setProblems] = React.useState({
    total:0,
    easy: 0,
    medium: 0,
    hard: 0,
  });

  React.useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("https://leetcode-stats-api.herokuapp.com/rambarkidileepkumar");
        setProblems({
          total:response.data.totalSolved,
          easy: response.data.easySolved,
          medium: response.data.mediumSolved,
          hard: response.data.hardSolved,
        });
      } catch (error) {
        console.error("Failed to fetch LeetCode data:", error);
      }
    };
    fetchProblems();
  }, []);

  const chartData = [
    { id: 0, label: `Easy ${problems.easy}`, value: problems.easy, color: '#81c784' },   // green
    { id: 1, label: `Medium ${problems.medium}`, value: problems.medium, color: '#ffb74d' }, // orange
    { id: 2, label: `Hard ${problems.hard}`, value: problems.hard, color: '#e57373' },   // red
  ];

  const valueFormatter = (item) => `${item.value}  problems`;

  return (
    <div className='leetcode-container' id='leetcode'>
      <Heading text="Leetcode Profile"/>
      <div className='leetcode-stats'>

      <PieChart
  sx={{ margin: '40px 0 10px 0' }}
  series={[
    {
      data: chartData,
      highlightScope: { fade: 'global', highlight: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
      valueFormatter,
      innerRadius: 20,       
      outerRadius: 120,
      arcLabelMinAngle: 10, 
      labelOffset: 0       
    },
  ]}
  interaction="highlight"
  height={300}
  width={280}
/>
      </div>
    <div className='total'>
      <h3>Total problems {problems.total}</h3>
    </div>
    </div>
  );
}
