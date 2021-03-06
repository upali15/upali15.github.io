'use strict'
import Box from "./Infobox.js";
//const fs = require('fs');
import Line from "./Text.js";
import Clickable from "./Embed.js";
import Photo from "./Image.js";
const e = React.createElement;
const re = ReactDOM.render;

/*
 *
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 */


//var abt;
//fs.readFile('me.txt','utf-8',(err,data) => { if (err) throw err; abt = data.toString();} );


//fs.readFile('Input.txt', (err, data) => { if (err) throw err; console.log(data.toString()); }) 

var workintro = 'Work smart and learn smart has always been my motto in my life. My dedication to learning and application has earned me a position as a Market analyst intern in Vodafone-Idea. The following are some experiences I have and academic certifications that I have earned.';
var title1 = "Intercountry Comparison of Development Indices";
var caption1 = 'Presidency University, Kolkata';
var des1 = 'A comprehensive and comparative study of development indices of different contries along with development of a new index for comparison';
var title2 = 'Python and Statistics for Financial Analysis';
var caption2 = e( Clickable, {href:'https://https://www.linkedin.com/in/upali-deb-023235150/', target:'_blank',text:"Coursera"});
var des2 = 'Course focussing on learning concepts of Python to perform Statistical Analysis of data with in-depth implementation of Financial Data Analysis';
var title3 = 'Market Analyst Internship';
var caption3 = e(Clickable, {href:'https://https://www.linkedin.com/in/upali-deb-023235150/', target:'_blank',text:"Vodafone-Idea"});
var des3 = 'Studied the variation of contacts from different telecommunication services and how these services interact with customers. Analyzed the customer interaction and developed models';
re(e(
    'div',null,
    e(
        Line,
        {
            type:'h3',
            text:workintro,
            clss:'workintro'
        }
    ),
    e(
    'div',
    {className:"container"},
    e(
        'div',
        {className:"col-12"},
        e(
            Box,
            {
                title:title3,
                caption:caption3,
                description:des3,
                style:'color-3',
                thumbnail:'img/vodafone_logo.svg'
            }
        ),
    ),
    e(
        'div',
        {className:"col-12"},
        e(
            Box,
            {
                title:title1,
                caption:caption1,
                description:des1,
                style:'color-1',
                thumbnail:'img/presidency_logo.svg'
            }
        ),
    ),
    e(
        'div',// Coursera Certificate for something
        {className:"col-12"},
        e(
            Box,
            {
                title:title2,
                caption:caption2,
                description:des2,
                style:'color-2',
                thumbnail:'img/coursera_logo.svg'
                //coursera blue: #0056d2
            }
        ),
    )
    )
),
    document.getElementById("work")
);
