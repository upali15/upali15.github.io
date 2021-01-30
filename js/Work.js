'use strict';

const crelem = React.createElement;

class Thumbnail extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return crelem(
            'img',
            {src:this.props.path}
        );
    }
}
export default Thumbnail;

class Certname extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return crelem(
            'h2', null,
            this.props.name
        );
        /*
        return crelem(
            'div',
            {
                className:"container"
            },
            crelem(
                'div',
                {
                    className:"col-12 col-sm-4"
                },
                crelem('img',null)
            ),
            crelem (
                'div',
                {
                    className:"col-12 col-sm-8"
                },
                crelem (
                    'h1',
                    null,
                    this.props.name
                )
                crelem (
                    'p',
                    null,
                    this.props.intro
                )
            )
        );
        */
    }
}


class Work extends React.Component
{
    /*
     * The component should have:
     * thumbnail area
     * Certification Name
     * Name of Certifier
     * Description
     * Link to credentials
     *
     */
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            crelem(
                'div',
                {
                    class:"container",
                    
                }
            )
        );
    }
}
