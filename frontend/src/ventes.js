import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
  BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// Data for current year
const data1 = [
    {name: 'Chien', animal: 2500},
    {name: 'Chat', animal: 5000},
    {name: 'Hamster', animal: 9000},
];


export default class Ventes extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/gawLqyom/';

  render() {
    return (
            <BarChart width={290} height={290} data={data1} stackOffset="sign"
            margin={{top: 50, right: 0, left: 50, bottom: -30}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Legend />
       <Tooltip/>
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="animal" fill="blue" stackId="stack" />
      </BarChart>
    );
  }
}