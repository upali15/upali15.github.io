'use strict';

const e = React.createElement;
const re = ReactDOM.render;

export default class Line extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            this.props.type,
            {
                id:this.props.id,
                className:this.props.clss
            },
            this.props.text
        );
    }
}

