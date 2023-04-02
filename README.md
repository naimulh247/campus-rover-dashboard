# **Project Command & Control**

Team Members: 
- Brandon J. Lacy (blacy@brandeis.edu)
- Naimul Hasan (naimulhasan@brandeis.edu)
- James Kong (jameskong@brandeis.edu)


# **General Overview**: 

The Campus Rover Command & Control project is a critical component to the development of the Campus Rover Project at Brandeis University as it’s the medium in which remote control will take place between the operator and the robot. It is the culmination of three components: a web application, application programmable interface (API), and robot. Each component is a separate entity within the system which calls for exquisite intercommunication to ensure successful implementation of remote instruction execution. The web application and API will be located on the VNC to leverage the existing configuration with Tailscale to transmit instructions to the robot. All communication between the web application and robot will occur through GET and POST methods to the API, as seen in the diagram below. The web application will have an authentication system to restrict access and the API will ensure a robot only receives communication from one operator at a time. The end result is a system that is similar to the way programming assignments are conducted except the control originates from a web application. There is an additional challenge of the incorporation of GPS to provide the robot with a greater knowledge of its whereabouts on campus so that it can effectively transfer packages.

# **Goals**

**What we want to demo on showcase day:**

On our demo day, we want to showcase a professional, well-made application that is viable for future students to use to play around with the ROS robot. It will also ideally serve as the foundation for Campus Rover's future feature enhancements. To get into more of the specifics of demo day though, we will want to show a working teleop control system, a live camera feed from the camera, a GPS map with the location of the robot, GPS coordinates, and robot metrics. It should be a seamless experience that is easy for a user to understand and use. 

**What we hope / expect to learn in doing this:**

We hope to get a deeper understanding of how ROS core communicates, as we will have to work out communication between our web app and ROS core in both directions. ROS core will need to receive input information from our web app while our web app will also need to receive robot metric information. Additionally, this project will also aid in us getting more real-world project experience as we are packaging together our knowledge in ROS with a more deployable and understandable product that a beginning user can use.

**How we would like it to be evaluated:**

In terms of how we would like to be evaluated, I think convenience and understandability is the most important for a project like ours. Our project may seem simple on the surface to implement, but if we don't nail down the specifics of communication between ROS core and our web app, then the user experience will be sub-par on the web app side. 