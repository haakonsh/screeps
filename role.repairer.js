var roleRepairer = {

    /** @param {Creep} creep **/
    run: function (creep)
    {
        if (creep.carry.energy < creep.carryCapacity)
        {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(sources[0]);
            }
        }
        else
        {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length > 0)
            {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(targets[0]);
                }
            }
        }

        //
        // if (creep.memory.building && creep.carry.energy == 0)
        // {
        //     creep.memory.building = false;
        //     creep.say('harvesting');
        // }
        // else if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
        //     creep.memory.building = true;
        //     creep.say('building');
        // }
        // if (creep.memory.building)
        // {
        //     var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        //     if (targets.length)
        //     {
        //         if (creep.build(targets[0]) == ERR_NOT_IN_RANGE)
        //         {
        //             creep.moveTo(targets[0]);
        //         }
        //     }
        //     else{
        //         creep.moveTo(Game.Spawn[0]);
        //     }
        // }
        // else
        // {
        //     var sources = creep.room.find(FIND_SOURCES);
        //     if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
        //     {
        //         creep.moveTo(sources[0]);
        //     }
        // }
    }
};

module.exports = roleRepairer;
