'use strict';

const e = React.createElement;
const re = ReactDOM.render;

class Embed extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e('embed', {width:this.props.width, height:this.props.height}, this.props.path);
    }
}
class Title extends React.Component
{
    constructor(props) { super(props); }
    render()
    {
        return e(
            'h4',
            {
                //add title CSS classes which contain font style and font family
                
            },
            this.props.title
        );
    }
}

class Description extends React.Component
{
    constructor(props) { super(props); }
    render()
    {
        return e('p',{/*add font size and style*/},this.props.description);
    }
}
class Certifierlogo extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e('img',null,{src:this.props.path});
    }
}

class Certifier extends React.Component
{
    constructor(props){super(props);}
    render()
    {
        return e(

        );
    }
}
