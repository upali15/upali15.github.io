'use strict';
//inport {name,intro} from "./intro.json"
import Photo from "./Image.js";
import Words from "./Description.js"
import Line from "./Title.js";

const e = React.createElement;
const rend = ReactDOM.render;
const ge = document.getElementById;

class Introduction extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
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
                        id:'myself',
                        text:this.props.intro,
                        clss:"font-12"
                    }
                )
            )
        );
    }
}
export default Introduction;
