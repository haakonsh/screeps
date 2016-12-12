var roleUpgrader = require('role.upgrader');

var roleBuilder = {

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
            var ConstructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            if (ConstructionSite != undefined)
            {
                if (creep.build(ConstructionSite) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(ConstructionSite);
                }
            }
            else
            {
                roleUpgrader.run(Creep);
            }
        }
        else
        {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(source);
            }
        }
    }
};

module.exports = roleBuilder;
