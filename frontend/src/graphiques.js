import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Janvier', nombre_de_ventes_des_animaux: 3000, amt: 2400,
  },
  {
    name: 'Février', nombre_de_ventes_des_animaux: 500, amt: 2210,
  },
  {
    name: 'Mars', nombre_de_ventes_des_animaux: 1500, amt: 2290,
  },
  {
    name: 'Avril', nombre_de_ventes_des_animaux: 8000, amt: 2000,
  },
  {
    name: 'Mai', nombre_de_ventes_des_animaux: 3100, amt: 2181,
  },
  {
    name: 'Juin', nombre_de_ventes_des_animaux: 7400, amt: 2500,
  },
  {
    name: 'Juillet', nombre_de_ventes_des_animaux: 2000, amt: 2100,
  },
  {
    name: 'Août', nombre_de_ventes_des_animaux: 1500, amt: 2100,
  },
  {
    name: 'Septembre', nombre_de_ventes_des_animaux: 5700, amt: 2100,
  },
  {
    name: 'Octobre', nombre_de_ventes_des_animaux: 4000, amt: 2100,
  },
  {
    name: 'Novembre', nombre_de_ventes_des_animaux: 5000, amt: 2100,
  },
  {
    name: 'Décembre', nombre_de_ventes_des_animaux: 9000, amt: 2100,
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
          top: 5, right: 30, left: 0, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="nombre_de_ventes_des_animaux" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}