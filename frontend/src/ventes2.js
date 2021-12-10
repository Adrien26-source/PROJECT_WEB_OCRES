import React, { PureComponent } from 'react';
import ResponsiveContainer from "react-responsive-widget";
import './App.css';
import {
    Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea
} from 'recharts';

const data = [
    { name: "Noir", chats: 2, chiens : 3},
    { name: "Gris", chats: 6, chiens : 6},
    { name: "Blanc", chats: 2, chiens : 4},
    { name: "Brun", chats: 3, chiens : 4},
    { name: "Gold", chats: 5, chiens : 5},
  ];
  
//widget liste des animaux mis en vente 

export default class Ventes2 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/ucdl/2yr7e4a5/5/';

  render() {

    return (
  //Line chart des animaux mis en vente
            <LineChart
              width={400}
              height={200}
              data={data}
              margin={{top: 50, right: 0, left: 0, bottom: 0}}>
                
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis 
                allowDataOverflow={true}
                dataKey="name"
            
              />
              <YAxis 
              orientation="right"
                allowDataOverflow={true}
                type="number"
                yAxisId="1"
               />
              <YAxis 
                orientation="left"
                allowDataOverflow={true}
                type="number"
                yAxisId="2"
               /> 
              <Tooltip/>
              <Line yAxisId="1" type='natural' dataKey='chats' stroke='blue' animationDuration={300}/>
              <Line yAxisId="1" type='natural' dataKey='chiens' stroke='red' animationDuration={300}/>
              
            </LineChart> 

      );
    }
  }  