'use strict';


const e = React.createElement;
const rend = ReactDOM.render;
const ge = React.getElementById;

class Intro extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return e('p',{className:this.props.clss}, this.props.intro);
    }
}

export default Intro;
