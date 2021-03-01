'use strict';

import Introduction from "./Introduction.js";

const e = React.createElement;
const rend = ReactDOM.render;
var iT="Graduate Junior Analyst";
var aboutme = "College Graduate attentive to Data Analytics. Passionate about Econometrics, Quantitative Modelling and Financial Analysis. Skilled in Econometrics, R, Python and Excel, I am seeking to leverage my skills in data analytics and enhance my performance and expand my skill set.";

rend(e(
    Introduction,
    {
        fullname:'Upali Deb',
        path:"img/profile.svg"
    }),
    document.getElementById("intro")
);
