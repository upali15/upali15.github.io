'use strict';
//inport {name,intro} from "./intro.json"
import Photo from "./Image.js";
import Line from "./Text.js";
import Button from "./Button.js";
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
            {className:"row"},
            e(
                'div',
                {className:"col-12 col-sm-3 align-centre hidden-xs hidden-sm"},
                e(
                    Photo,
                    {
                        clss:"img-flex",
                        id:"me",
                        path:this.props.path,
                        alt:"Profile Picture"
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
                        clss:"description"
                    }
                ),
                e(
                    Line,
                    {
                        type:'p',
                        text:line2,
                        clss:"description"
                    }
                ),
                e(
                    Line,
                    {
                        type:'p',
                        text:line3,
                        clss:"description"
                    }
                ),
                e(
                    'div',
                    {className:'btn-group'},
                    e(
                        Button,
                        {
                            css:'btn social-media-buttons insta',
                            text:' Instagram',
                            type:'fab fa-instagram',
                            link:'https://www.instagram.com/_upali.15_/',
                            target:'_blank',
                            alt:'Hello, facebook'
                        }
                    ),
                    e(
                        Button,
                        {
                            css:'btn btn-danger social-media-buttons',
                            text:' Instagram',
                            type:'fab fa-instagram',
                            link:'https://www.instagram.com/_upali.15_/',
                            target:'_blank',
                            alt:'Hello, facebook'
                        }
                    )
                )
            )
        );
    }
}
export default Introduction;
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
