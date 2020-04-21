

# scrollpage-react

我们在浏览淘宝(浏览商品)，微信(好友列表，朋友圈)，QQ(好友列表，空间)和百度图片的时候，需要对页面进行一定的性能优化。若是淘宝用户搜索的商品进行全部展示，会影响页面的性能，针对这个问题，可以选择设置`overflow:scroll`和`对相同的item进行懒加载`等方法进行优化。本文使用滑动分页的方式进行懒加载，这样可以增加用户的体验，而且不影响页面的性能。

# install

```js
npm i scrollpage-react
```

# parameter

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| container | 需要滚动的容器 | Function | window |
| threshold | 设置滑动请求api的阈值 | Number | 300 |
| loader | 设置等待效果 | Node | null |
| hasmore | 是否还可以活动 | Boolean | true |
| className | 设置的样式 | Object | {} |
| style | 设置行内样式 | Object | {} |


# Example Usage


```js
import React from 'react';
import ScrollPage from 'scrollpage-react'
import List from './List'

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pageStart:0,
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

```
