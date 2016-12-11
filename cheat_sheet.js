//set creep roles
Game.creeps['Harvester1'].memory.role = 'harvester';
Game.creeps['Upgrader1'].memory.role = 'upgrader';

// spawn creep with role set in memory
Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Builder1',
{
    role: 'builder'
});

Game.spawns['Spawn1'].createCreep([WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE],
    'HarvesterBig',
    {
        role: 'harvester'
    });


var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function ()
{

    for (var name in Memory.creeps)
    {
        if (!Game.creeps[name])
        {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if (harvesters.length < 2)
    {
        var newName = Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], undefined,
        {
            role: 'harvester'
        });
        console.log('Spawning new harvester: ' + newName);
    }

    for (var name in Game.creeps)
    {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester')
        {
            roleHarvester.run(creep);
        }
        if (creep.memory.role == 'upgrader')
        {
            roleUpgrader.run(creep);
        }
    }
}


Game.spawns['Spawn1'].room.createConstructionSite(23, 22, STRUCTURE_TOWER);

Game.spawns['Spawn1'].room.controller.activateSafeMode();
