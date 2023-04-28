let ros_config = {
    ROSBRIDGE_SERVER_IP: "127.0.0.1",
    ROSBRIDGE_SERVER_PORT: "9090",
    RECONNECTION_TIMEOUT: 3000,
    CHECK_IMAGE_CONFIG: 3000,
    ROSBRIDGE_BATTERY_STATE_THROTTLE: 5000,
    ROSBRIDGE_CMD_VEL: "/cmd_vel",
    ROSBRIDGE_ODOM: "/odom",
    ROSBRIDGE_CAMERA_RGB_TOPIC: "/camera/rgb/image_raw/compressed",
    ROSBRIDGE_RASPICAM_TOPIC: "/raspicam_node/image_res/compressed",
    ROSBRIDGE_IMAGE_CONFIGS: "/image_configs",
    ROSBRIDGE_ROSTOPICS_LIST: "/rostopic_list",
    ROSBRIDGE_IMAGE_WIDTH: "640",
    ROSBRIDGE_IMAGE_HEIGHT: "360",
    ROSBRIDGE_FRAME_WIDTH: 640,
    ROSBRIDGE_FRAME_HEIGHT: 360,
    ROSBRIDGE_BATTERY_TOPIC: "/battery_state",
    ROSBRIDGE_MANUAL_TELEOP: false,
    ROSBRIDGE_BATTERY_STATUS: true,
}

export default ros_config