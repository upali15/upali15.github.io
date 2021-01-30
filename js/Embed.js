'use strict';

const e = React.createElement;
const re = ReactDOM.render;

export default class Ember extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'embed',{id:this.props.id,src:this.props.path}
        );
    }
}
