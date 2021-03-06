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
            {className:"container"},
            e(
                'div',
                {className:"col-12 col-sm-3 align-centre hidden-xs hidden-sm"},
                e(
                    Photo,
                    {
                        clss:"img-flex round",
                        id:"me",
                        path:'img/profile.png',
                        alt:"Profile Picture"
                    }
                )
            ),
            e(
                'div',
                {className:"col-12 col-sm-9 up-pad"},
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
            ),
                e(
                    'div',
                    {className:'social'},
                    e(
                        Button,
                        {
                            css:'btn social-media-buttons insta page-links',
                            text:' About',
                            type:'fa fa-info-circle',
                            link:'#about',
                            alt:'About Myself'
                        }
                    ),
                    e(
                        Button,
                        {
                            css:'btn social-media-buttons background',
                            text:' Background',
                            type:'fa fa-list-alt',
                            link:'#work',
                            alt:'Hello, facebook'
                        }
                    ),
                    e(
                        Button,
                        {
                            css:'btn social-media-buttons linkedin',
                            text:' LinkedIn',
                            type:'fab fa-linkedin',
                            link:'https://www.linkedin.com/in/upali-deb-023235150/',
                            target:'_blank',
                            alt:'Linkedin'
                        }
                    ),
                    e(
                        Button,
                        {
                            css:'btn social-media-buttons github',
                            text:' Github',
                            type:'fab fa-github',
                            link:'https://github.com/upali15',
                            target:'_blank',
                            alt:'Github'
                        }
                    )
                )
            );
    }
}
export default Introduction;
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
