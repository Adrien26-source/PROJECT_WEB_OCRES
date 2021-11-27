import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Janvier', AchatDesAnimaux: 3000, amt: 2400,
  },
  {
    name: 'Février', AchatDesAnimaux: 0, amt: 2210,
  },
  {
    name: 'Mars', AchatDesAnimaux: 0, amt: 2290,
  },
  {
    name: 'Avril', AchatDesAnimaux: 3500, amt: 2000,
  },
  {
    name: 'Mai', AchatDesAnimaux: 2500, amt: 2181,
  },
  {
    name: 'Juin', AchatDesAnimaux: 0, amt: 2500,
  },
  {
    name: 'Juillet', AchatDesAnimaux: 4500, amt: 2100,
  },
  {
    name: 'Août', AchatDesAnimaux: 1000, amt: 2100,
  },
  {
    name: 'Septembre', AchatDesAnimaux: 1600, amt: 2100,
  },
  {
    name: 'Octobre', AchatDesAnimaux: 5000, amt: 2100,
  },
  {
    name: 'Novembre', AchatDesAnimaux: 0, amt: 2100,
  },
  {
    name: 'Décembre', AchatDesAnimaux: 1500, amt: 2100,
  },
];

export default class Graphique extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 50, right: 0, left: 50, bottom: -25,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="AchatDesAnimaux" stroke="blue" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}