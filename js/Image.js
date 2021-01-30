'use strict';

const e = React.createElement;
const re = ReactDOM.render;

export default class Photo extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'img',
            {
                className:this.props.clss,
                src:this.props.path,
                id:this.props.id,
                alt:this.props.alt
            }
        );
    }
}
