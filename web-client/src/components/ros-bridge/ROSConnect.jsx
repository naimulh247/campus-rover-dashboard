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
                    const rosbridge_ip = localStorage.getItem('rosbridgeServerIP') || ros_config.ROSBRIDGE_SERVER_IP;
                    const rosbridge_port = localStorage.getItem('rosbridgeServerPort') || ros_config.ROSBRIDGE_SERVER_PORT;
                    // console.log('trying to connect to:', rosbridge_ip, rosbridge_port)
                    ros.connect(`ws://${rosbridge_ip}:${rosbridge_port}`)
                }catch (error) {
                    console.log("connection error:", error);
                }
            }, ros_config.RECONNECTION_TIMEOUT); 
        })

        try{
            const rosbridge_ip = localStorage.getItem('rosbridgeServerIP') || ros_config.ROSBRIDGE_SERVER_IP;
            const rosbridge_port = localStorage.getItem('rosbridgeServerPort') || ros_config.ROSBRIDGE_SERVER_PORT;
            ros.connect(`ws://${rosbridge_ip}:${rosbridge_port}`)
        }catch (error) {
            console.log("connection error:", error);
        }
    }

    render() { 
        return (
            <div>
                <Alert className='text-center' variant={this.state.connected ? "success" : "danger"}>
                    {this.state.connected ? "Robot Connected" : "Robot Disconnected"}
                </Alert>
            </div>
        );
    }
}
 
export default ROSConnect;
