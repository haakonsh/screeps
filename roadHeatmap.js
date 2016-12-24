/**
 * Created by Rebry on 23.11.2016.
 *
 * Take the whole map as an 2d array
 *  each spot will then have array[x,y]
 *  array[x,y] stores values of ticks the unit have been active in that thick
 *
 *  if creep working{
 *      write tick to heatmap
 *  }
 *
 *  RoadBuilder{
 *      ontick, checkRoadmap
 *  }
 *
 */

var constructRoad = {
    run: function (NumberOfRoadTiles)
    {
        if (NumberOfRoadTiles)
        { //If 0, will not create a single road tile
            // Translate heap map into a one dimensional array of objects

            var MapUsage = [];
            // MapUsage[0].pos = 0; // {0,0};
            // MapUsage[0].value = 0;

            for (var x = 0; x <= 49; x++)
            {
                for (var y = 0; y <= 49; x++)
                {
                    MapUsage.push(
                    {
                        pos:
                        {
                            x,
                            y
                        },
                        value: Memory.MapUsage[x, y]
                    });
                }
            }
            // sort MapUsage by 'value' in ascending order
            SortMapUsage = _.sortBy(MapUsage, value);
            // Create a road tile for the NumberOfRoadTiles most trafficated tiles
            for (let i = 2401; i >= (2401 - NumberOfRoadTiles); i--)
            {
                room.createConstructionSite(MapUsage[i].pos, STRUCTURE_ROAD);
            }
        }
    }
};
module.exports = constructRoad;;
