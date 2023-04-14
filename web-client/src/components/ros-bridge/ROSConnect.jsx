import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import ros_config from '../../configs/ros_config';

class ROSConnect extends Component {

    constructor(props) {
        super(props);
        this.state = { connected : false}
    }

    componentDidMount() {
        this.init_connection()
    }

    init_connection() {
        const ros = new window.ROSLIB.Ros();
        this.props.setRos(ros);

        ros.on("connection", () => {
            console.log("robot connected")
            this.setState({connected : true})
        })

        ros.on("close", () => {
            console.log("robot disconnected");
            this.setState({connected : false});
            // try to reconnect to rosbridge every 3 seconds
            setTimeout(() => {
                try{
                    // change the ip address to local storage
                    ros.connect(`ws://${ros_config.ROSBRIDGE_SERVER_IP}:${ros_config.ROSBRIDGE_SERVER_PORT}`)
                }catch (error) {
                    console.log("connection error:", error);
                }
            }, ros_config.RECONNECTION_TIMEOUT); 
        })

        try{
            // change the ip address to local storage
            ros.connect(`ws://${ros_config.ROSBRIDGE_SERVER_IP}:${ros_config.ROSBRIDGE_SERVER_PORT}`)
        }catch (error) {
            console.log("connection error:", error);
        }

        // console.log(ros);

    }

    render() { 
        return (
            <div>
                <Alert className='text-center m-3' variant={this.state.connected ? "success" : "danger"}>
                    {this.state.connected ? "Robot Connected" : "Robot Disconnected"}
                </Alert>
            </div>
        );
    }
}
 
export default ROSConnect;
