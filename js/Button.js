const e = React.createElement;

export default class Button extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'button',
            {
                className:this.props.css,
                href:this.props.link
                not applicable for any form of identification or for any form of purchase
            }
        );
    }
}
