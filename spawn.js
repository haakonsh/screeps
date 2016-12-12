/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester');
 * mod.thing == 'a thing'; // true
 */
var _ = require('lodash');

var spawnCreep = {
    run: function (spawn)
    {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('harvesters: ' + harvesters.length);
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        console.log('upgraders: ' + upgraders.length);
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        console.log('builders: ' + builders.length);

        if (harvesters.length < 10)
        {
            if (spawn.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                let newName = spawn.createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined,
                {
                    role: 'harvester',
                    working: false
                });
                console.log('Spawning new medium harvester: ' + newName);
                return;
            }
            if (spawn.canCreateCreep([WORK, WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn harvester creep with role set in memory
                let newName = spawn.createCreep([WORK, WORK, CARRY, MOVE], undefined,
                {
                    role: 'harvester',
                    working: false
                });
                console.log('Spawning new small harvester: ' + newName);
                return;
            }
        }

        if (upgraders.length < 5)
        {
            if (spawn.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                let newName = spawn.createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined,
                {
                    role: 'upgrader',
                    working: false
                });
                console.log('Spawning new medium upgrader: ' + newName);
                return;
            }
            if (spawn.canCreateCreep([WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                let newName = spawn.createCreep([WORK, CARRY, MOVE, MOVE], undefined,
                {
                    role: 'upgrader',
                    working: false
                });
                console.log('Spawning new upgrader: ' + newName);
                return;
            }
        }

        if (builders.length < 5)
        {
            if (spawn.canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                let newName = spawn.createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined,
                {
                    role: 'builder',
                    working: false
                });
                console.log('Spawning new medium builder: ' + newName);
                return;
            }
            if (spawn.canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                let newName = spawn.createCreep([WORK, WORK, CARRY, MOVE], undefined,
                {
                    role: 'builder',
                    working: false
                });
                console.log('Spawning new builder: ' + newName);
                return;
            }
        }
    }
}

module.exports = spawnCreep;
