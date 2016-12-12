/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester');
 * mod.thing == 'a thing'; // true
 */
import{ isEven, isOdd} from "util.math"

var _ = require('lodash');
var spawn = require('spawn');

var constructExtension = {
    run: function (construct)
    {
        for (var i in Game.spawns)
        {
        //TODO create extension sites in a checker board pattern around spawns in +2 linear distance.
        //TODO Debug algoritm below.
        for(var x  == -3 ; x <= 3 ;x++)
        {
            for (var y == -3 ; y <= 3 ;y++)
            {
                if((isEven(x) && isEven(y)) || (isOdd(x) && isOdd(y))
                {
                var target = Game.spawns[i].pos;
                target.x +=  x;
                target.y +=  y;
                Game.Room.createConstructionSite(target.pos, STRUCTURE_EXTENSION);
                }
            }
        }
    }
};

module.exports = constructExtension;
