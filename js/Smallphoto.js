'use strict';

const rend = ReactDOM.render;
const elem = React.createElement;
//const getelem = document.getElementById;

class Smallphoto extends React.Component
{
    // class should accept the path to the image file and display the image
    // Combined with User name
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return elem(
            'img',
            {src: this.props.path,
            alt: 'PROFILE ICON'}
        );
    }
}
export default Smallphoto;
