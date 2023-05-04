import React, { Component } from 'react'

class About extends Component {
    render() { 
        return (
            <div style={{ margin: "3%" }}>
                <h1 id="-project-command-control-" style={{marginBottom: "2%"}}><strong>Project Command &amp; Control</strong></h1>

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ display: "flex", marginRight: "5%", flexDirection: "column" }}>
                        <strong>Team Members: </strong>{" "}
                    </div>
                    <div style={{ display: "flex", marginRight: "5%", flexDirection: "column" }}>
                        <strong>Naimul Hasan</strong>{" "}
                        <span>
                            <a href="mailto:naimulhasan@brandeis.edu">Email</a> |{" "}
                            <a href="https://www.linkedin.com/in/naimul-hasan/">LinkedIn</a>
                        </span>
                    </div>
                    <div style={{ display: "flex", marginRight: "5%", flexDirection: "column" }}>
                        <strong>James Kong</strong>{" "}
                        <span>
                            <a href="mailto:jameskong@brandeis.edu">Email</a> |{" "}
                            <a href="https://www.linkedin.com/in/jamesdemingkong/">LinkedIn</a>
                        </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <strong>Brandon Lacy</strong>{" "}
                        <span>
                            <a href="mailto:blacy@brandeis.edu">Email</a> |{" "}
                            <a href="https://www.linkedin.com/in/lacybrandonj/">LinkedIn</a>
                        </span>
                    </div>
                </div>

                <div className="divider"/>

                <h1 id="-general-overview-"><strong>General Overview</strong>:</h1>
                
                <p>The Campus Rover Command & Control project is a critical component of the Campus Rover Project at Brandeis University, facilitating remote control between the operator and the robot. The system consists of three main components: a web application, rosbridge, and ROS (Robot Operating System). These components work together to ensure seamless communication and execution of remote instructions.
                    With the new design, we have eliminated the need for an external API. Instead, the web application directly communicates with rosbridge and ROS. This direct communication streamlines the process and eliminates the complexity of an additional layer.
                    The web application, built using React, serves as the user interface for controlling the robot. It leverages the capabilities of rosbridge to establish a connection with ROS and send commands to the robot. The web application incorporates features such as a live camera feed, teleoperation controls, GPS mapping, and robot metrics.
                    This system restricts access to authorized operators, providing a controlled environment for robot control.
                    One of the challenges addressed in the project is the integration of GPS functionality. By incorporating GPS, the robot gains an understanding of its location on campus, enabling efficient package transfers and navigation.
                    Overall, the Campus Rover Command & Control system presents a user-friendly and efficient solution for remote robot control. It eliminates the need for an external API and enables direct communication between the web application, rosbridge, and ROS, enhancing the overall user experience and system performance.
                </p>
                <h1 id="-goals-"><strong>Goals</strong></h1>
                <p><strong>What we want to demo on showcase day:</strong></p>
                <p>On our demo day, we want to showcase a professional, well-made application that is viable for future students to use to play around with the ROS robot. It will also ideally serve as the foundation for Campus Rover&#39;s future feature enhancements. To get into more of the specifics of demo day though, we will want to show a working teleop control system, a live camera feed from the camera, a GPS map with the location of the robot, GPS coordinates, and robot metrics. It should be a seamless experience that is easy for a user to understand and use. </p>
                <p><strong>What we hope / expect to learn in doing this:</strong></p>
                <p>We hope to get a deeper understanding of how ROS core communicates, as we will have to work out communication between our web app and ROS core in both directions. ROS core will need to receive input information from our web app while our web app will also need to receive robot metric information. Additionally, this project will also aid in us getting more real-world project experience as we are packaging together our knowledge in ROS with a more deployable and understandable product that a beginning user can use.</p>
                <p><strong>How we would like it to be evaluated:</strong></p>
                <p>In terms of how we would like to be evaluated, I think convenience and understandability is the most important for a project like ours. Our project may seem simple on the surface to implement, but if we don&#39;t nail down the specifics of communication between ROS core and our web app, then the user experience will be sub-par on the web app side. </p>
               
            </div>
        );
    }
}
 
export default About;