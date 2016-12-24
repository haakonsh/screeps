var spawnCreep = require('creep');

var spawnCreeps = function(spawn){
    spawnCreep.clearMemory();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == undefined){
            creep.memory.role == 'harvester';
        }
    }
    var haulersModifier     = 2;
    var buildersModifier    = 10;
    var repairmenModifier   = 10;

    var structures          = Game.room.find(FIND_STRUCTURES);
    var possibleSources     = Game.room.find(FIND_SOURCES);

    var harvesters  = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var miners      = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    if(miners.length < possibleSources.length)
    {
            if((miners.length < possibleSources.length) && (harvesters.length == 0)){
                spawnCreep.harvester(spawn);
            }
            else{
                spawnCreep.miner(spawn);
            }
        return;
    }
    var haulers     = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
    if(haulers.length < (haulersModifier * possibleSources.length)){
        spawnCreep.harvester(spawn);
        return;
    }
    var builders    = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    if(builders.length < (structures.length / buildersModifier)){
        spawnCreep.builder(spawn);
        return;
    }
    var upgraders   = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    if(upgraders.length == 0){
        spawnCreep.upgrader(spawn);
        return;
    }
    var repairmen   = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');
    if(repairmen.length < (structures.length / repairmenModifier)){
        spawnCreep.repairman(spawn);
        return;
    }
    spawnCreep.upgrader(spawn);
}
module.exports = spawnCreeps;
