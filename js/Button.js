const e = React.createElement;

export default class Button extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            "button",
            {
                type: "button",
                className: this.props.css
            },
            e(
                "i",
                {
                    className: "fa fa-" + this.props.profile,
                    "aria-hidden": "true"
                }
            ),
            "Hello"
        );
    }
}
