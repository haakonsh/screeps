var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
//var spawnCreep = require('spawn');
var spawnHarvester = require('spawn').spawnHarvester;
var spawnUpgrader = require('spawn').spawnUpgrader;
var spawnBuilder = require('spawn').spawnBuilder;

module.exports.loop = function ()
{
    for (var creep in Memory.creeps)
    {
        if (!Game.creeps[name])
        {
            delete Memory.creeps[name];
            //console.log('Clearing non-existing creep memory:', name);
        }
    }

    var spawn = Game.spawns;
    //spawnCreep.run(spawn);
    spawnHarvester.run(spawn);
    spawnUpgrader.run(spawn);
    spawnBuilder.run(spawn);

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
        if (creep.memory.role == 'builder')
        {
            roleBuilder.run(creep);
        }
    }
}
