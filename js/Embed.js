'use strict';

const e = React.createElement;
const re = ReactDOM.render;

/*export default class Embed extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(
            'embed',{id:this.props.id,src:this.props.path,width:this.props.width,height:this.props.height}
        );
    }
}
*/
export default class Clickable extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e('a',{href:this.props.link,target:this.props.target,className:this.props.clss},this.props.text);
    }
}
