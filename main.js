var roleHarvester = require('role.harvester');
var roleHauler = require('role.hauler');
var roleUpgrader = require('role.upgrader');
var roleRepairman = require('role.repairman');
var roleBuilder = require('role.builder');
var roleMiner = require('role.miner');
var sources = require('utility.sources');
var memorySetup = require('utility.memorySetup');
var buildDNA = require('utility.buildDNA');
var tower = require('tower');
var spawnCreep = require('creep');
var constructRoad = require('roadHeatmap')
var spawnCreeps = require('spawn')

require('prototype.spawn')();
require('prototype.roomAutoBuild')();
if (Memory.initialRun) {
    memorySetup.setup(Memory);
}

const profiler = require('screeps-profiler');
profiler.enable();

module.exports.loop = function () {
    profiler.wrap(function () {
        // Main.js logic should go here.
        for (var spawn in Game.spawns) {
            if (Game.spawns[spawn].room.controller.level > Memory.controllerLevel) {
                Game.spawns[spawn].room.roomAutoBuild(Game.spawns[spawn].room, 20);
                Memory.controllerLevel++;
            }
            spawnCreeps(spawn);
        }

        Memory.ticks++;
        if (Memory.ticks % 100 == 0) {
            console.log(Memory.ticks);
            console.log(Memory.MapUsage.join("\n"));
            constructRoad.run(50);
        }
        tower.defend();
        for (var name in Game.creeps) {
            var creep = Game.creeps[name];
            Memory.MapUsage[creep.pos.y][creep.pos.x]++; // heap map
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            if (creep.memory.role == 'repairman') {
                roleRepairman.run(creep);
            }
            if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            if (creep.memory.role == 'miner') {
                roleMiner.run(creep);
            }
            if (creep.memory.role == 'hauler') {
                roleHauler.run(creep);
            }
        }

    });
}
