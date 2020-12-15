// Capture all the values and pass into simulator run script
document.getElementById("runSimulator").addEventListener("click", () => {
    let payload = {
        "general_config": {
            "fields": {
                "run_config": {
                    "default": document.getElementById("run_config").value
                }, 
                "num_runs": {
                    "default": document.getElementById("num_runs").value
                }, 
                "package": {
                    "default": document.getElementById("package").value
                }, 
                "launch_file": {
                    "default": document.getElementById("launch_file").value
                }, 
            }
        },
        "ambient_params": {
            "fields": {
                "amb_means": {
                    "default": [
                        document.getElementById("amb_means0").value, 
                        document.getElementById("amb_means1").value, 
                        document.getElementById("amb_means2").value, 
                        document.getElementById("amb_means3").value, 
                    ]
                }, 
                "amb_stds": {
                    "default": [
                        document.getElementById("amb_stds0").value, 
                        document.getElementById("amb_stds1").value, 
                        document.getElementById("amb_stds2").value, 
                        document.getElementById("amb_stds3").value, 
                    ]
                }
            }
        },
        "fog_params": {
            "fields": {
                "fog_profile": {
                    "default": document.getElementById("fog_profile").value
                }, 
                "fog_color_mean": {
                    "default": [
                        document.getElementById("fog_color_mean0").value, 
                        document.getElementById("fog_color_mean1").value, 
                        document.getElementById("fog_color_mean2").value, 
                        document.getElementById("fog_color_mean3").value
                    ]
                }, 
                "fog_color_std": {
                    "default": [
                        document.getElementById("fog_color_std0").value, 
                        document.getElementById("fog_color_std1").value, 
                        document.getElementById("fog_color_std2").value, 
                        document.getElementById("fog_color_std3").value
                    ]
                }, 
                "fog_start_mean": {
                    "default": document.getElementById("fog_start_mean").value,
                }, 
                "fog_start_std": {
                    "default": document.getElementById("fog_start_std").value
                }, 
                "fog_end_mean": {
                    "default": document.getElementById("fog_end_mean").value
                }, 
                "fog_end_std": {
                    "default": document.getElementById("fog_end_std").value
                }
            }
        }, 
        "prop_positions": {

        }, 
        "light_params": {
            "fields": {
                "light_pose_mean": {
                    "default": [
                        document.getElementById("light_pose_mean0").value, 
                        document.getElementById("light_pose_mean1").value, 
                        document.getElementById("light_pose_mean2").value, 
                        document.getElementById("light_pose_mean3").value, 
                        document.getElementById("light_pose_mean4").value, 
                        document.getElementById("light_pose_mean5").value, 
                    ]
                }, 
                "light_pose_std": {
                    "default": [
                        document.getElementById("light_pose_std0").value, 
                        document.getElementById("light_pose_std1").value, 
                        document.getElementById("light_pose_std2").value, 
                        document.getElementById("light_pose_std3").value, 
                        document.getElementById("light_pose_std4").value, 
                        document.getElementById("light_pose_std5").value, 
                    ]
                },
                "light_diffuse_mean": {
                    "default": [
                        document.getElementById("light_diffuse_mean0").value, 
                        document.getElementById("light_diffuse_mean1").value, 
                        document.getElementById("light_diffuse_mean2").value, 
                        document.getElementById("light_diffuse_mean3").value
                    ]
                }, 
                "light_diffuse_std": {
                    "default": [
                        document.getElementById("light_diffuse_std0").value, 
                        document.getElementById("light_diffuse_std1").value, 
                        document.getElementById("light_diffuse_std2").value, 
                        document.getElementById("light_diffuse_std3").value
                    ]
                }, 
                "light_direction_mean": {
                    "default": [
                        document.getElementById("light_direction_mean0").value, 
                        document.getElementById("light_direction_mean1").value, 
                        document.getElementById("light_direction_mean2").value
                    ]
                }, 
                "light_direction_std": {
                    "default": [
                        document.getElementById("light_direction_std0").value, 
                        document.getElementById("light_direction_std1").value, 
                        document.getElementById("light_direction_std2").value
                    ]
                }, 
                "light_specular_mean": {
                    "default": [
                        document.getElementById("light_specular_mean0").value, 
                        document.getElementById("light_specular_mean1").value, 
                        document.getElementById("light_specular_mean2").value
                    ]
                }, 
                "light_specular_std": {
                    "default": [
                        document.getElementById("light_specular_std0").value, 
                        document.getElementById("light_specular_std1").value, 
                        document.getElementById("light_specular_std2").value
                    ]
                }
            }
        }
    }
});