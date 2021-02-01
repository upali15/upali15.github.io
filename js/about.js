'use strict'
import Box from "./Infobox.js";

const e = React.createElement;
const re = ReactDOM.render;

var title1 = "Intercountry Comparison of Development Indices";
var caption1 = 'Presidency University, Kolkata';
var des1 = 'A comprehensive and comparative study of development indices of different contries along with development of a new index for comparison';
var title2 = 'Course 1';
var caption2 = 'Coursera';
var des2 = 'Description of work';
var title2 = 'Course 2';
var caption2 = 'Coursera';
var des2 = 'Description of work';



re(e(
    'div',
    {className:"container"},
    e(
        'div',
        {className:"col-12 col-md-4"},
        e(
            Box,
            {
                title:title1,
                caption:caption1,
                description:des1,
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
                title:title1,
                caption:caption1,
                description:des1,
                style:'work color-1',
                thumbnail:'img/presidency_logo.svg'
            }
        ),
    ),
    ),
    document.getElementById("topabout")
);
