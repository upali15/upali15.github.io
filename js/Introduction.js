'use strict';
//inport {name,intro} from "./intro.json"
import Intro from "./Intro.js";
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
        //var j = JSON.parse("intro.json");
        
        return e(
            'div',
            {className:"container"},
            
            e(
                'div',
                {className:"col-12 col-sm-3 align-centre hidden-sm hidden-xs"},
                e(
                    'img',
                    {
                        className:"small-pad",
                        id:"profile_picture",
                        src:this.props.path,
                    }
                )
            ),
            e(
                'div',
                {className:"col-12 col-sm-9"},
                e(
                    'h1',
                    {
                        id:"fullname",
                        className:"page-header"
                    },
                    this.props.fullname
                ),
                e(
                    Intro,
                    {intro:this.props.intro, clss:"font-12"}
                )
            )
        );
    }
}
export default Introduction;
