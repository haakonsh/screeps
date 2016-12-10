module.exports.loop = function ()
{
    var creep = require('harvester');
    creep.harvesters == roleHarvester;
    for (var i in Game.creeps)
    {
        creep.run(Game.creeps[i]);
    }

    Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE], 'Harvester2');
}
