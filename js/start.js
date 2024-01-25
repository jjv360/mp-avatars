//
// My MetaPress Plugin

import packageJson from '../package.json'

export default class MyMetaPressPlugin {

    // Plugin information
    id              = packageJson.metapress?.id || packageJson.name
    name            = packageJson.metapress?.name || packageJson.name
    description     = packageJson.metapress?.description || packageJson.description
    version         = packageJson.version
    provides        = [ ]
    requires        = [ ]

    /** Get a list of all avatar configurations this plugin supports */
    $getAvatarConfigurations() {
        return [

            // Iron Man
            {
                'avatar_id': 'com.jjv360.avatar.ironman',
                'avatar_image': null,
                'avatar_name': 'Iron Man',
                'avatar_description': `From Sketchfab - By Vfx Boy`,
                'avatar_height': 2.5,
                'avatar_walkSpeed': 3,
                'avatar_runSpeed': 6,
                'extra_offset_y': 0.42,
                'url': this.config.assetsURL + 'ironman.glb',
                ... this.mixamoAvatar,
            },

        ]
    }

    /** Default mixamo avatar fields */
    mixamoAvatar = {

        // Object info
        'type': 'mesh',
        'mesh_bounding_box': true,

        // Avatar controller
        'modifier:avatar-controller': true,

        // Attach physics
        'modifier:physics': true,
        'physics_enabled': true,
        'physics_shape': 'capsule',
        'physics_lockRotation': true,
        'physics_anchorBottom': true,
        'physics_kinematicVelocity': true,  // <-- Needed for avatar controller

        // Apply transform smoothing
        'modifier:transform-smoothing': true,

        // Ensure the model faces the direction it's moving
        'modifier:face-movement-direction': true,

        // Enable animations
        'modifier:animator': true,

    }

}