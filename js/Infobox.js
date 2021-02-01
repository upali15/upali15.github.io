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
                        clss:"font-20 boldify",
                        text:this.props.title,
                        id:"btp"
                    },
                ),
                e(
                    'div',null,
                    e(
                        Line,
                        {
                            clss:"font-24 boldify",
                            type:"h4",
                            text:this.props.caption,
                            id:"ugcollege"
                        }
                    ),
                    e(
                        Line,
                        {
                            type:'p',
                            clss:"font-18",
                            text:this.props.description,
                            id:'btp-ug-description'
                        }
                    )
                )
            )
        );
    }
}
