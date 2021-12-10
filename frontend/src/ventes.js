import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
  BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

// Data for current year
const data1 = [
    {name: 'Chien', animal: 20},
    {name: 'Chat', animal: 15},
    {name: 'Hamster', animal: 10},
];

//Widget liste animaux disponibles 
export default class Ventes extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/gawLqyom/';

  render() {
    return (
      //histogramme liste des animaux disponibles 
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