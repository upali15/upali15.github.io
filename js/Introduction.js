'use strict';
//inport {name,intro} from "./intro.json"
import Photo from "./Image.js";
import Line from "./Text.js";

const e = React.createElement;
const rend = ReactDOM.render;

class Introduction extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        var line1 = "Junior Post-graduate in Economics";
        var line2 = "Bachelor of Science in Economics";
        var line3 = "Presidency University, Kolkata-700073";
        return e(
            'div',
            {className:"container"},
            
            e(
                'div',
                {className:"col-12 col-sm-3 align-centre hidden-sm hidden-xs"},
                e(
                    Photo,
                    {
                        clss:"img-flex",
                        id:"me",
                        path:this.props.path,
                        alt:"profile picture"
                    }
                )
            ),
            e(
                'div',
                {className:"col-12 col-sm-9"},
                e(
                    Line,
                    {
                        type:'p',
                        id:"fullname",
                        clss:"page-header",
                        text:this.props.fullname
                    }
                ),
                e(
                    Line,
                    {
                        type:'p',
                        text:line1,
                        clss:"font-12"
                    }
                ),
                e(
                    Line,
                    {
                        type:'p',
                        text:line2,
                        clss:"font-12"
                    }
                ),
                e(
                    Line,
                    {
                        type:'p',
                        text:line3,
                        clss:"font-12"
                    }
                )
            )
        );
    }
}
export default Introduction;
