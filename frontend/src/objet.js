import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const data01 = [{x: 100, y: 10}, {x: 120, y: 5},
  {x: 60, y: 6}, {x: 40, y: 4},
  {x: 90, y: 8}, {x: 110, y: 14}];
const data02 = [{x: 70, y: 5}, {x: 30, y: 8},
  {x: 40, y: 3}, {x: 20, y: 7},
  {x: 50, y: 4.5}, {x: 68, y: 4}];

//widget poids et taille des animaux 
export default class Objet extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/3mw50Lc9/1117/';

  render() {
    
    return (
      //Diagramme de dispersion
      <ScatterChart width={400} height={400} margin={{top: 20, right: 50, bottom: 0, left: 20}}>
      	<XAxis type="number" dataKey={'x'} name='taille' unit='cm'/>
      	<YAxis type="number" dataKey={'y'} name='poids' unit='kg'/>
        <CartesianGrid />
      	<Tooltip cursor={{strokeDasharray: '3 3'}}/>
        <Legend />
        <Legend />
      	<Scatter name='Chien' data={data01} fill='red' shape="circle"/>
        <Scatter name='Chat' data={data02} fill='blue' shape="square"/>
      </ScatterChart>
    );
  }
}
