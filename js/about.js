'use strict'
import Box from "./Infobox.js";
//const fs = require('fs');
import Line from "./Text.js";
const e = React.createElement;
const re = ReactDOM.render;

var abt1 = "Hi, I'm Upali!";
var abt2 = "A graduate data analyst and data scientist majoring in Economics, I translate data into valuable and comprehensible insights. My goal is to improve results, make the right decisions and save costs.";
var abt3 = "I am experienced in Econometrics and Financial Analysis, and use data visualization techniques to present the results. I use MS Excel, R and Stata for my data projects.";
var abt4 = "Currently a Market Analyst Intern in Vodafone-Idea, I am pursuing an M. Sc in Applied Economics from the Presidency University, Kolkata.";



//var abt;
//fs.readFile('me.txt','utf-8',(err,data) => { if (err) throw err; abt = data.toString();} );


//fs.readFile('Input.txt', (err, data) => { if (err) throw err; console.log(data.toString()); }) 


var title1 = "Intercountry Comparison of Development Indices";
var caption1 = 'Presidency University, Kolkata';
var des1 = 'A comprehensive and comparative study of development indices of different contries along with development of a new index for comparison';
var title2 = 'Python and Statistics for Financial Analysis';
var caption2 = e(
    'a',
    {href:'https://https://www.linkedin.com/in/upali-deb-023235150/',
        target:'_blank'},
    "Coursera"
);
var des2 = 'Course focussing on learning concepts of Python to perform Statistical Analysis of data with in-depth implementation of Financial Data Analysis';
var title3 = 'Market Analyst Internship';
var caption3 = e(
    'a',
    {href:'https://https://www.linkedin.com/in/upali-deb-023235150/',
        target:'_blank'},
    "Vodafone Idea"
);
var des3 = 'Description of work';

re(
    e(
        'div',
        {className:'row'},
        e(
            'div',
            {className:'col-12 col-sm-6 hidden-sm hidden-xs'},
            null
        ),
        e(
            'div',
            {className:'col-12 col-sm-6 hidden-sm hidden-xs'},
            e(
                Line,{clss:'hi',type:'p',text:abt1, id:'me1'}
            ),
            e(
                Line,{type:'p',text:abt2, id:'me2'}
            ),
            e(
                Line,{type:'p',text:abt3, id:'me3'}
            ),
            e(
                Line,{type:'p',text:abt4, id:'me4'}
            )
        )
    ),
    document.getElementById('about')

);



re(e(
    'div',
    {className:"container"},
    e(
        'div',// Coursera Certificate for something
        {className:"col-12 col-md-4"},
        e(
            Box,
            {
                title:title2,
                caption:caption2,
                description:des2,
                style:'work color-2',
                thumbnail:'img/coursera_logo.svg'
                //coursera blue: #0056d2
            }
        ),
    ),
    e(
        'div',
        {className:"col-12 col-md-4"},
        e(
            Box,
            {
                title:title1,
                caption:caption1,
                description:des1,
                style:'work color-1',
                thumbnail:'img/presidency_logo.svg'
            }
        ),
    ),
    e(
        'div',
        {className:"col-12 col-md-4"},
        e(
            Box,
            {
                title:title3,
                caption:caption3,
                description:des3,
                style:'work color-3',
                thumbnail:'img/vodafone_logo.svg'
            }
        ),
    ),
    ),
    document.getElementById("topabout")
);
