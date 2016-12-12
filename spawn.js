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
        for (var i in Game.spawns)
        {
            if (Game.spawns[i].canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                console.log('harvesters: ' + harvesters.length);

                if (harvesters.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'harvester'
                    });
                    console.log('Spawning new medium harvester: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                console.log('builders: ' + builders.length);

                if (builders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'builder'
                    });
                    console.log('Spawning new medium builder: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
                console.log('upgraders: ' + builders.length);

                if (upgraders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'upgrader'
                    });
                    console.log('Spawning new medium upgrader: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn harvester creep with role set in memory
                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                console.log('Harvesters: ' + harvesters.length);

                if (harvesters.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'harvester'
                    });
                    console.log('Spawning new small harvester: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
                console.log('upgraders: ' + upgraders.length);

                if (upgraders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'upgrader'
                    });
                    console.log('Spawning new upgrader: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                console.log('builders: ' + builders.length);

                if (builders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'builder'
                    });
                    console.log('Spawning new builder: ' + newName);
                }
            }
        }
    }
};
var spawnHarvester = {
    run: function (spawn)
    {
        for (var i in Game.spawns)
        {
            if (Game.spawns[i].canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                console.log('harvesters: ' + harvesters.length);

                if (harvesters.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'harvester'
                    });
                    console.log('Spawning new medium harvester: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn harvester creep with role set in memory
                var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
                console.log('Harvesters: ' + harvesters.length);

                if (harvesters.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'harvester'
                    });
                    console.log('Spawning new small harvester: ' + newName);
                }
            }
        }
    }
}
var spawnUpgrader = {
    run: function (spawn)
    {
        for (var i in Game.spawns)
        {
            if (Game.spawns[i].canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
                console.log('upgraders: ' + builders.length);

                if (upgraders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'upgrader'
                    });
                    console.log('Spawning new medium upgrader: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
                console.log('upgraders: ' + upgraders.length);

                if (upgraders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'upgrader'
                    });
                    console.log('Spawning new upgrader: ' + newName);
                }
            }
        }
    }
}

var spawnUpgrader = {
    run: function (spawn)
    {
        for (var i in Game.spawns)
        {
            if (Game.spawns[i].canCreateCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                console.log('builders: ' + builders.length);

                if (builders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'builder'
                    });
                    console.log('Spawning new medium builder: ' + newName);
                }
            }
            if (Game.spawns[i].canCreateCreep([WORK, CARRY, MOVE], undefined) == OK)
            {
                // spawn creep with role set in memory
                var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
                console.log('builders: ' + builders.length);

                if (builders.length < 3)
                {
                    var newName = Game.spawns[i].createCreep([WORK, CARRY, MOVE], undefined,
                    {
                        role: 'builder'
                    });
                    console.log('Spawning new builder: ' + newName);
                }
            }
        }
    }
}

module.exports = spawnbuilder;
module.exports = spawnUpgrader;
module.exports = spawnHarvester;
module.exports = spawnCreep;
