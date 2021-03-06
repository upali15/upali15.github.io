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
                type:'button',
                className: this.props.css,
                href:this.props.link,
                target:this.props.target,
                alt:this.props.alt
            },
            e(
                "i",
                {
                    className: this.props.type
                }
            ),
            e(
                'img',
                {
                    src:this.props.imgsrc,
                    onClick:this.props.exec
                }
            ),
            this.props.text
        );
    }
}
