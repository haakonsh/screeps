/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester');
 * mod.thing == 'a thing'; // true
 */
var isEven = require('util.math');

var _ = require('lodash');

var constructExtension = {
    run: function ()
    {
        for (var i in Game.spawns)
        {
            //TODO create extension sites in a checker board pattern around spawns in +2 linear distance.
            //TODO Debug algoritm below.
            for (var x = -3; x <= 3; x++)
            {
                for (var y = -3; y <= 3; y++)
                {
                    if ((isEven.run(x) && isEven.run(y)) || !(isEven.run(x) && isEven.run(y)))
                    {
                        var target = Game.spawns[i].pos;
                        target.x = target.x + x;
                        target.y = target.y + y;
                        Game.room.createConstructionSite(target, STRUCTURE_EXTENSION);
                    }
                }
            }
        }
    }
};
module.exports = constructExtension;
