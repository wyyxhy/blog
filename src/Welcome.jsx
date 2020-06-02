/**
 * Created by lmh on 2020/3/4.
 */
import React from 'react';


class NotFound extends React.Component {
    state = {
        animated: ''
    };
    enter = () => {
        this.setState({animated: 'hinge'})
    };
    render() {
        return (
            <div className="center" style={{height: '100%',overflow: 'hidden',minHeight:"315px"}}>
               欢迎光临
            </div>
        )
    }
}

export default NotFound;