var spawnCreep = {
    clearMemory: function ()
    {
        for (var name in Memory.creeps)
        {
            if (!Game.creeps[name])
            {
                delete Memory.creeps[name];
                console.log('Creep died. removing from memory:', name);
            }
        }
    },
    harvester: function (spawn)
    {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

        if (harvesters.length < Memory.worker.harvesters)
        {
            var newName = Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], undefined,
            {
                role: 'harvester',
                evolution: Memory.harvesterEvolution
            });
            if (newName != "-6" && newName != "-4")
            {
                newName = newName += " harvester";
                console.log("Spawning harvetster : " + newName);
            }

        }
    },
    upgrader: function (spawn)
    {
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if (upgraders.length < Memory.worker.upgraders)
        {
            if (!Memory.notified)
            {
                console.log("need more upgraders " + upgraders.length + "/" + Memory.worker.upgraders);
                Memory.notified = true;
            }
            var newName = Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], undefined,
            {
                role: 'upgrader'
            });
            if (newName != "-6" && newName != "-4")
            {
                newName = newName += " upgrader";
                console.log("Spawning upgrader: " + newName)
                Memory.notified = false;
            }

        }
    },
    builder: function (spawn)
    {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        if (builders.length < Memory.worker.builders)
        {
            if (!Memory.notified)
            {
                console.log("need more builders " + builders.length + "/" + Memory.worker.builders);
                Memory.notified = true;
            }
            var newName = Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], undefined,
            {
                role: 'builder'
            });
            if (newName != "-6" && newName != "-4")
            {
                newName = newName += " builder";
                console.log("Spawning builder: " + newName)
                Memory.notified = false;
            }

        }
    },
    repairman: function (spawn)
    {
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');
        if ((Game.spawns[spawn].room.find(FIND_STRUCTURES,
            {
                filter: (structure) => (structure.structureType == STRUCTURE_ROAD)
            }).length < 0) && repairers.length < Memory.worker.repairers)
        {
            if (!Memory.notified)
            {
                console.log("need more repairmen " + repairers.length + "/" + Memory.worker.repairers);
                Memory.notified = true;
            }
            var newName = Game.spawns[spawn].createCreep([WORK, CARRY, MOVE], undefined,
            {
                role: 'repairman',
                needsRefill: true
            });
            if (newName != "-6" && newName != "-4")
            {
                newName = newName += " repairman";
                Memory.notified = false;
                console.log("Spawning repairman: " + newName)
            }

        }
    },
    hauler: function (spawn)
    {
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
        if ((Game.spawns[spawn].room.find(FIND_STRUCTURES,
            {
                filter:
                {
                    structureType: STRUCTURE_CONTAINER
                }
            }).length < 0) && haulers.length < Memory.worker.haulers)
        {
            if (!Memory.notified)
            {
                console.log("need more hauler " + haulers.length + "/" + Memory.worker.haulers);
                Memory.notified = true;
            }
            var newName = Game.spawns[spawn].createCustomCreep(Game.spawns.Spawn1.room.energyAvailable, 'hauler');
            if (newName != "-6" && newName != "-4" && newName != "-5")
            {
                console.log("Spawning hauler: " + newName);
                Memory.notified = false;
            }
        }
    },
    miner: function (spawn)
    {
        var miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
        if (miners.length < Memory.worker.miners)
        {
            if (!Memory.notified)
            {
                console.log("need more miners " + miners.length + "/" + Memory.worker.miners);
                Memory.notified = true;
            }
            if (Game.spawns.Spawn1.room.energyAvailable > 200)
            {
                var newName = Game.spawns[spawn].createCustomCreep(Game.spawns.Spawn1.room.energyAvailable, 'miner');
                if (newName != "-6" && newName != "-4" && newName != "-5")
                {
                    console.log("Spawning miner: " + newName)
                    Memory.notified = false;
                }
            }
        }
    },
    bigUpgrader: function (spawn)
    {
        var MaxenergyAviable = Game.spawns.Spawn1.room.energyCapacityAvailable;
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        if (MaxenergyAviable == Game.spawns.Spawn1.room.energyAvailable && Memory.isTowesFull && Game.spawns.Spawn1.room.energyAvailable > 500)
        {
            var newName = Game.spawns[spawn].createCustomCreep(MaxenergyAviable, 'upgrader');
            if (newName != "-6" && newName != "-4")
            {
                console.log("Spawning upgrader: " + newName)
            }
        }
    }
};

module.exports = spawnCreep;
