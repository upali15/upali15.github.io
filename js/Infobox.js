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
                className:'row work ' + this.props.style
            },
            e(
                'div',
                {className:'col-12 col-sm-4 col-md-3'},
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
                {className:'col-12 col-sm-8 col-md-9'},
                e(
                    Line,
                    {
                        type:"h3",
                        clss:"font-20 boldify",
                        text:this.props.title,
                        id:"project-name"
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
                            id:"institution"
                        }
                    ),
                    e(
                        Line,
                        {
                            type:'p',
                            clss:"description",
                            text:this.props.description,
                            id:'description'
                        }
                    )
                )
            )
        );
    }
}
