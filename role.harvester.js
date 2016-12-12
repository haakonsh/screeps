var roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep)
    {
        if (creep.memory.working == true && creep.carry.energy == 0)
        {
            creep.memory.working = false;
        }
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity)
        {
            creep.memory.working = true;
        }

        if (creep.memory.working == true)
        {
            let spawn = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
            if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(spawn);
            }
        }
        else
        {
            var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(source);
            }
        }
    }
};


module.exports = roleHarvester;
