'use strict'

import Photo from "./Image.js";
import Line from "./Text.js";

const e = React.createElement;
const re = ReactDOM.render;

export default class Box extends React.Component
{
    constructor(props) {super(props);}
    render()
    {
        return e(
            'div',
            {
                className:this.props.style
            },
            e(
                'div',
                null,
                e(
                    Photo,
                    {
                        clss:"img-flex",
                        id:"bachelors",
                        path:this.props.thumbnail,
                        alt:"Profile Picture"
                    }
                )
            ),
            e(
                'div',
                null,
                e(
                    Line,
                    {
                        type:"h3",
                        text:"Intercountry Comparison of Development Indices",
                        id:"btp"
                    },
                ),
                e(
                    'div',null,
                    e(
                        Line,
                        {
                            className:"border-black",
                            type:"h4",
                            text:"Presidency University, Kolkata",
                            id:"ugcollege"
                        }
                    ),
                    e(
                        Line,
                        {
                            type:'p',
                            text:'A comprehensive and comparative study of development indices of different contries along with development of a new index for comparison',
                            id:'btp-ug-description'
                        }
                    )
                )
            )
        );
    }
}
