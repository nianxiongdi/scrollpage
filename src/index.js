import React from 'react';
import PropTypes from 'prop-types';
 
export default class ScrollPage extends React.Component {

    static propTypes = {
        element: PropTypes.node,
        threshold: PropTypes.number
    };
    
    static defaultProps = {
        element: 'div',
        threshold: 300
    };
    

    constructor(props) {
        super(props);
    }
 
    getScrollContainer() {
        const { container } = this.props;
        if (typeof container === 'function') {
          return container();
        }
    
        return window;
    }

    componentDidMount() {

        let scrollContainer = this.getScrollContainer();
        scrollContainer.addEventListener('scroll', this.scrollFunction , false);
        scrollContainer.addEventListener('resize', this.scrollFunction , false);
    }

    scrollFunction = ()=> {

        const {
            threshold,
            loadMore
        } = this.props;

        let container;
        if(!this.props.container) {
            container = document.body || document.documentElement || document.body.parentNode;
        }else {
            container = this.getScrollContainer();
        }

        const offset = container.scrollHeight - container.clientHeight - container.scrollTop;
            
        if(offset < threshold) {
            loadMore();
        }
        
    }

    componentDidUpdate() {
        let scrollContainer = this.getScrollContainer();
        scrollContainer.addEventListener('scroll', this.scrollFunction , false);
        scrollContainer.addEventListener('resize', this.scrollFunction , false);
    }
 
    render() {
        const {
            element: Tag,
            loader,
            hasMore,
            className,
            style,
        } = this.props;

        return (
            <Tag className={className} style={style}>
                { this.props.children }
                { hasMore && loader ? loader : null }
            </Tag>
        );
    }

}
