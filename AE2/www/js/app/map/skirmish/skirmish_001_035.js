/*jslint white: true, nomen: true */
(function (win) {

    'use strict';
    /*global window, document */
    /*global APP */

    win.APP.maps = win.APP.maps || {};

    win.APP.maps.skirmish_001_035 = {
        "type": "skirmish",
        "size": {"width": 12, "height": 12},
        "name": "Road closures",
        "name-es": "Cierres de carreteras",
        "name-ru": "Перекрытая дорога",
        "isOpen": true,
        "maxPlayers": 3,
        "units": [{"x": 1, "y": 11, "type": "commander", "ownerId": 0}, {
            "x": 10,
            "y": 11,
            "type": "commander",
            "ownerId": 1
        }, {"x": 6, "y": 1, "type": "commander", "ownerId": 2}],
        "buildings": [{"x": 1, "y": 11, "type": "castle", "state": "normal", "ownerId": 0}, {
            "x": 10,
            "y": 11,
            "type": "castle",
            "state": "normal",
            "ownerId": 1
        }, {"x": 5, "y": 0, "type": "castle", "state": "normal", "ownerId": 2}, {
            "x": 6,
            "y": 0,
            "type": "castle",
            "state": "normal",
            "ownerId": 2
        }, {"x": 5, "y": 3, "type": "castle", "state": "normal", "ownerId": 2}, {
            "x": 6,
            "y": 3,
            "type": "castle",
            "state": "normal",
            "ownerId": 2
        }, {"x": 7, "y": 0, "type": "farm", "state": "normal", "ownerId": 2}, {
            "x": 7,
            "y": 1,
            "type": "farm",
            "state": "normal",
            "ownerId": 2
        }, {"x": 7, "y": 2, "type": "farm", "state": "normal", "ownerId": 2}, {
            "x": 7,
            "y": 3,
            "type": "farm",
            "state": "normal",
            "ownerId": 2
        }, {"x": 4, "y": 3, "type": "farm", "state": "normal", "ownerId": 2}, {
            "x": 4,
            "y": 2,
            "type": "farm",
            "state": "normal",
            "ownerId": 2
        }, {"x": 4, "y": 1, "type": "farm", "state": "normal", "ownerId": 2}, {
            "x": 4,
            "y": 0,
            "type": "farm",
            "state": "normal",
            "ownerId": 2
        }, {"x": 2, "y": 1, "type": "farm", "state": "normal", "ownerId": 2}, {
            "x": 9,
            "y": 1,
            "type": "farm",
            "state": "normal",
            "ownerId": 2
        }, {"x": 0, "y": 10, "type": "farm", "state": "normal"}, {
            "x": 2,
            "y": 9,
            "type": "farm",
            "state": "normal"
        }, {"x": 11, "y": 10, "type": "farm", "state": "normal"}, {"x": 9, "y": 9, "type": "farm", "state": "normal"}],
        "terrain": {
            "x0y0": "hill-1",
            "x0y1": "forest-2",
            "x0y2": "terra-4",
            "x0y3": "terra-1",
            "x0y4": "forest-1",
            "x0y5": "hill-1",
            "x0y6": "forest-1",
            "x0y7": "terra-2",
            "x0y8": "forest-2",
            "x0y9": "terra-1",
            "x0y10": "terra-1",
            "x1y0": "terra-2",
            "x1y1": "terra-5",
            "x1y2": "hill-1",
            "x1y3": "road-1",
            "x1y4": "road-1",
            "x1y5": "road-1",
            "x1y6": "road-1",
            "x1y7": "road-1",
            "x1y8": "road-1",
            "x1y9": "road-1",
            "x1y10": "road-1",
            "x2y0": "terra-1",
            "x2y1": "terra-1",
            "x2y2": "forest-2",
            "x2y3": "road-1",
            "x2y4": "terra-1",
            "x2y5": "terra-1",
            "x2y6": "terra-1",
            "x2y7": "terra-1",
            "x2y8": "terra-1",
            "x2y9": "terra-1",
            "x2y10": "terra-5",
            "x3y0": "road-1",
            "x3y1": "road-1",
            "x3y2": "road-1",
            "x3y3": "road-1",
            "x3y4": "stone-1",
            "x3y5": "terra-1",
            "x3y6": "forest-2",
            "x3y7": "terra-5",
            "x3y8": "forest-1",
            "x3y9": "water-1",
            "x3y10": "water-1",
            "x4y0": "terra-1",
            "x4y1": "terra-1",
            "x4y2": "terra-1",
            "x4y3": "terra-1",
            "x4y4": "stone-1",
            "x4y5": "water-1",
            "x4y6": "water-1",
            "x4y7": "water-1",
            "x4y8": "water-1",
            "x4y9": "water-1",
            "x4y10": "water-1",
            "x5y0": "road-1",
            "x5y1": "road-1",
            "x5y2": "road-1",
            "x5y3": "road-1",
            "x5y4": "water-1",
            "x5y5": "water-1",
            "x5y6": "water-3",
            "x5y7": "water-1",
            "x5y8": "water-1",
            "x5y9": "water-1",
            "x5y10": "water-1",
            "x6y0": "road-1",
            "x6y1": "road-1",
            "x6y2": "road-1",
            "x6y3": "road-1",
            "x6y4": "water-1",
            "x6y5": "water-1",
            "x6y6": "water-1",
            "x6y7": "water-1",
            "x6y8": "water-1",
            "x6y9": "water-1",
            "x6y10": "water-2",
            "x7y0": "terra-1",
            "x7y1": "terra-1",
            "x7y2": "terra-1",
            "x7y3": "terra-1",
            "x7y4": "stone-1",
            "x7y5": "water-1",
            "x7y6": "water-1",
            "x7y7": "water-1",
            "x7y8": "water-1",
            "x7y9": "water-1",
            "x7y10": "water-1",
            "x8y0": "road-1",
            "x8y1": "road-1",
            "x8y2": "road-1",
            "x8y3": "road-1",
            "x8y4": "stone-1",
            "x8y5": "terra-2",
            "x8y6": "terra-1",
            "x8y7": "terra-4",
            "x8y8": "terra-1",
            "x8y9": "water-1",
            "x8y10": "water-1",
            "x9y0": "terra-1",
            "x9y1": "terra-1",
            "x9y2": "hill-1",
            "x9y3": "road-1",
            "x9y4": "terra-1",
            "x9y5": "terra-1",
            "x9y6": "hill-1",
            "x9y7": "terra-1",
            "x9y8": "forest-1",
            "x9y9": "terra-1",
            "x9y10": "forest-2",
            "x10y0": "terra-2",
            "x10y1": "forest-1",
            "x10y2": "forest-2",
            "x10y3": "road-1",
            "x10y4": "road-1",
            "x10y5": "road-1",
            "x10y6": "road-1",
            "x10y7": "road-1",
            "x10y8": "road-1",
            "x10y9": "road-1",
            "x10y10": "road-1",
            "x11y0": "forest-2",
            "x11y1": "hill-1",
            "x11y2": "forest-1",
            "x11y3": "terra-1",
            "x11y4": "terra-4",
            "x11y5": "terra-1",
            "x11y6": "terra-5",
            "x11y7": "terra-1",
            "x11y8": "terra-1",
            "x11y9": "terra-1",
            "x11y10": "terra-1",
            "x0y11": "hill-1",
            "x1y11": "road-1",
            "x2y11": "terra-1",
            "x3y11": "water-1",
            "x4y11": "water-2",
            "x5y11": "water-1",
            "x6y11": "water-1",
            "x7y11": "water-1",
            "x8y11": "water-1",
            "x9y11": "terra-1",
            "x10y11": "road-1",
            "x11y11": "terra-1"
        }
    };

}(window));