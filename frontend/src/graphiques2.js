import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
    LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const data = [
    {
      name: 'Janvier', VentesDesAnimaux: 3000, amt: 2400,
    },
    {
      name: 'Février', VentesDesAnimaux: 0, amt: 2210,
    },
    {
      name: 'Mars', VentesDesAnimaux: 0, amt: 2290,
    },
    {
      name: 'Avril', VentesDesAnimaux: 3500, amt: 2000,
    },
    {
      name: 'Mai', VentesDesAnimaux: 2500, amt: 2181,
    },
    {
      name: 'Juin', VentesDesAnimaux: 0, amt: 2500,
    },
    {
      name: 'Juillet', VentesDesAnimaux: 4500, amt: 2100,
    },
    {
      name: 'Août', VentesDesAnimaux: 1000, amt: 2100,
    },
    {
      name: 'Septembre', VentesDesAnimaux: 1600, amt: 2100,
    },
    {
      name: 'Octobre', VentesDesAnimaux: 5000, amt: 2100,
    },
    {
      name: 'Novembre', VentesDesAnimaux: 0, amt: 2100,
    },
    {
      name: 'Décembre', VentesDesAnimaux: 1500, amt: 2100,
    },
  ];

export default class Graphique2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/tv8zfzxo/375/';

  render() {
    return (
    	<div>
        <AreaChart width={320} height={300} data={data} syncId="anyId"
              margin={{top: 50, right: 0, left: 50, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='VentesDesAnimaux' stroke='red' fill='purple' />
        </AreaChart>
      </div>
    );
  }
}