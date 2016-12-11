/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester');
 * mod.thing == 'a thing'; // true
 */
var _ = require('lodash');
var spawn = require('spawn');

var constructExtension = {
    run: function (construct)
    {
        for (var i in Game.spawns)
        {}
        //TODO create extension sites in a checker board pattern around spawns in +2 linear distance.
        Game.spawns[i].pos
        Game.Room.createConstructionSite(x, y, STRUCTURE_EXTENSION);
    }
};

module.exports = spawnHarvester;
