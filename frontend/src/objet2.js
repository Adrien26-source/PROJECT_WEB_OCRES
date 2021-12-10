import React, { PureComponent } from 'react';
import {
    PieChart, Pie, Sector, Cell
} from 'recharts';
const data = [{name: 'chien', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 200}, {name: 'Group D', value: 100}];
const COLORS = ['blue', 'red', 'black', 'Seagreen'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


//widget repartition races d'un type animal

export default class Objet2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/c9pL8k61/6206/';

  render() {


    return (
      //Diagramme circulaire
    	<PieChart width={800} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={200} 
          cy={150} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="blue"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    );
  }
}