import React from 'react';

export default class ScrollPage extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        const { loadMore } = this.props;

        let scrollContainer;
        scrollContainer = document.body;
        let threshold = 300;
        window.addEventListener('scroll', function() {
            console.log( scrollContainer.scrollHeight,
                scrollContainer.clientHeight, 
                scrollContainer.scrollTop );

            const offset = scrollContainer.scrollHeight - scrollContainer.clientHeight - scrollContainer.scrollTop;
            
            if(offset < threshold) {
                loadMore();
            }
            
        }, false);
    }

    componentDidUpdate() {

    }
    render() {
        
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}
