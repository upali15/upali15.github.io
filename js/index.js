'use strict';

import Helloworld from "./Helloworld.js";//unnecessary file -> do delete it later
import Thumbnail from "./Work.js";
import Smallphoto from "./Smallphoto.js";
import Introduction from "./Introduction.js";

const e = React.createElement;
const rend = ReactDOM.render;
const ge = document.getElementById;
var iT = "College Graduate attentive to Data Analytics. Passionate about Econometrics, Quantitative Modelling and Financial Analysis. Skilled in Econometrics, R, Python and Excel, I am seeking to leverage my skills in data analytics and enhance my performance and expand my skill set.";


ReactDOM.render(e(
    Helloworld, 
    {name : 'Custom Button', type:'danger'}
    ), 
    document.getElementById("hi")
);

rend(e(
    Introduction,
    {
        fullname:'Upali Deb',
        path:"img/profile.png",
        intro:iT
    }),
    document.getElementById("intro")
);
