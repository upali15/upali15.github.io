'use strict';

const e = React.createElement;
const re = ReactDOM.render;

export default class Words extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'p',
            {
                className:this.props.clss,
                id:this.props.id
            },
            this.props.text
        );
    }
}
