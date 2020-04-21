import React from 'react';

import ScrollPage from './Scroll'
import List from './List'

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new Array(20).fill(2),
        }

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        // call api
        this.setState({
            dataSource: this.state.dataSource.concat(new Array(20).fill(2))
        })
    }


    render(){
        const { dataSource } = this.state;
        return (<ScrollPage
                    loadMore={this.loadMore}
                    threshold={300}
                    >
            <List dataSource={dataSource}/>
        </ScrollPage>)
    }
}

/* 
    发布学习： https://github.com/crazylxr/react-demo
*/

const ReactDemo = () => (
    <Main />
);



export default ReactDemo;
