'use strict'
const e = React.createElement;

export default class Button extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'a',
            {
                className: this.props.css,
                href:this.props.link,
                target:this.props.target,
                alt:this.props.alt
            },
            e(
                "i",
                {
                    className: this.props.type,
                }
            ),
            this.props.text
        );
    }
}
