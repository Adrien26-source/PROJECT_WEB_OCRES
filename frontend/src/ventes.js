import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
  BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// Data for current year
const data1 = [
    {name: 'Apple', men: 4000, women: 2400},
    {name: 'Orange', men: 2000, women: 2000},
    {name: 'Kiwi', men: 1000, women: 1400},
];

// Data for previous year
const data2 = [
    {name: 'Apple', men: -3000, women: -2000},
    {name: 'Orange', men: -1000, women: -1000},
    {name: 'Kiwi', men: -2000, women: -400},
];

const data = data1.concat(data2);

export default class Ventes extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/gawLqyom/';

  render() {
    return (
            <BarChart width={300} height={300} data={data} stackOffset="sign"
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Legend />
       <Tooltip/>
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="men" fill="#8884d8" stackId="stack" />
      </BarChart>
    );
  }
}