var roleUpgrader = {

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
            if (creep.transfer(RoomObject.Structure.OwnedStructure.StructureController, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE)
            {
                creep.moveTo(RoomObject.Structure.OwnedStructure.StructureController);
            }
        }
    }
};

module.exports = roleUpgrader;
