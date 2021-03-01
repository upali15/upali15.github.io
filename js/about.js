'use strict'
import Box from "./Infobox.js";
//const fs = require('fs');
import Line from "./Text.js";
import Clickable from "./Embed.js";
import Photo from "./Image.js";
const e = React.createElement;
const re = ReactDOM.render;

var abt1 = "Hi, I'm Upali!";
var abt2 = "A graduate data analyst and data scientist majoring in Economics, I translate data into valuable and comprehensible insights. My goal is to improve results, make the right decisions and save costs.";
var abt3 = "I am experienced in Econometrics and Financial Analysis, and use data visualization techniques to present the results. I use MS Excel, R and Stata for my data projects.";
var abt4 = "Currently a Market Analyst Intern in Vodafone-Idea, I am pursuing an M. Sc in Applied Economics from the Presidency University, Kolkata.";

/*
 *
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 */


//var abt;
//fs.readFile('me.txt','utf-8',(err,data) => { if (err) throw err; abt = data.toString();} );


//fs.readFile('Input.txt', (err, data) => { if (err) throw err; console.log(data.toString()); }) 


re(
    e(
        'div',
        {className:'row'},// color: #023ab8
        e(
            'div',
            {className:'col-12 col-sm-6 hidden-sm hidden-xs giffill'},
            e(
                Photo,
                {
                    id:'stock',
                    path:"img/stock.gif",
                    alt:"Sample Photo",
                    clss:'fill'
                }
            )
        ),
        e(
            'div',
            {className:'col-12 col-sm-6 norm sidecolor'},
            e(
                Line,{clss:'hi',type:'p',text:abt1, id:'me1'}
            ),
            e(
                Line,{clss:'para',type:'p',text:abt2, id:'me2'}
            ),
            e(
                Line,{clas:'para',type:'p',text:abt3, id:'me3'}
            ),
            e(
                Line,{clss:'para', type:'p',text:abt4, id:'me4'}
            )
        )
    ),
    document.getElementById('about')

);

