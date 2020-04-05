import React from 'react';


export default class List extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        
        const { dataSource } = this.props;

        return (
            <div id="abc">
                 {
                    dataSource.map((item, index) => 
                        <div key={index} style={{width: '300px', height: '300px', border: '1px solid red', margin: '10px', display:'inline-block'}}>
                            {index}
                        </div>
                    )
                 }
            </div>
        );
    }

}

