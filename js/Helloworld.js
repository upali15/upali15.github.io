'use strict';
const sh = React.createElement;

class Helloworld extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        var k = 'btn btn-' + this.props.type;
        return sh(
            'button',
            {className: k},
            this.props.name
        );
    }
}
export default Helloworld;
