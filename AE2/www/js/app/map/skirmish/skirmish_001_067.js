/*jslint white: true, nomen: true */
(function (win) {

	'use strict';
	/*global window, document */
	/*global APP */

	win.APP.maps = win.APP.maps || {};

	win.APP.maps.skirmish_001_067 = {
		"type": "skirmish",
		"size": {"width": 16, "height": 14},
		"name": "David wade",
		"name-es": "David wade",
		"name-ru": "Давидов брод",
		"isOpen": true,
		"maxPlayers": 4,
		"units": [{"x": 14, "y": 11, "type": "commander", "ownerId": 3}, {"x": 14, "y": 2, "type": "commander", "ownerId": 2}, {"x": 1, "y": 11, "type": "commander", "ownerId": 1}, {"x": 1, "y": 2, "type": "commander", "ownerId": 0}],
		"buildings": [{"x": 15, "y": 4, "type": "farm", "state": "destroyed"}, {"x": 12, "y": 4, "type": "farm", "state": "destroyed"}, {"x": 12, "y": 9, "type": "farm", "state": "destroyed"}, {"x": 15, "y": 9, "type": "farm", "state": "destroyed"}, {"x": 0, "y": 9, "type": "farm", "state": "destroyed"}, {"x": 3, "y": 9, "type": "farm", "state": "destroyed"}, {"x": 3, "y": 4, "type": "farm", "state": "destroyed"}, {"x": 0, "y": 4, "type": "farm", "state": "destroyed"}, {"x": 6, "y": 5, "type": "castle", "state": "normal"}, {"x": 9, "y": 5, "type": "castle", "state": "normal"}, {"x": 9, "y": 8, "type": "castle", "state": "normal"}, {"x": 6, "y": 8, "type": "castle", "state": "normal"}, {"x": 6, "y": 10, "type": "well", "state": "normal"}, {"x": 9, "y": 10, "type": "well", "state": "normal"}, {"x": 9, "y": 3, "type": "well", "state": "normal"}, {"x": 6, "y": 3, "type": "well", "state": "normal"}, {"x": 1, "y": 2, "type": "castle", "state": "normal", "ownerId": 0}, {"x": 1, "y": 11, "type": "castle", "state": "normal", "ownerId": 1}, {"x": 14, "y": 2, "type": "castle", "state": "normal", "ownerId": 2}, {"x": 14, "y": 11, "type": "castle", "state": "normal", "ownerId": 3}],
		"terrain": {
			"x0y0": "water-1",
			"x0y1": "water-1",
			"x0y2": "terra-1",
			"x0y3": "terra-1",
			"x0y4": "terra-1",
			"x0y5": "terra-1",
			"x0y6": "water-1",
			"x0y7": "water-1",
			"x0y8": "terra-1",
			"x0y9": "terra-1",
			"x0y10": "terra-1",
			"x1y0": "road-1",
			"x1y1": "road-1",
			"x1y2": "road-1",
			"x1y3": "road-1",
			"x1y4": "road-1",
			"x1y5": "road-1",
			"x1y6": "water-1",
			"x1y7": "water-1",
			"x1y8": "road-1",
			"x1y9": "road-1",
			"x1y10": "road-1",
			"x2y0": "terra-1",
			"x2y1": "stone-1",
			"x2y2": "stone-1",
			"x2y3": "stone-1",
			"x2y4": "road-1",
			"x2y5": "road-1",
			"x2y6": "water-1",
			"x2y7": "water-1",
			"x2y8": "road-1",
			"x2y9": "road-1",
			"x2y10": "stone-1",
			"x3y0": "terra-1",
			"x3y1": "terra-1",
			"x3y2": "terra-1",
			"x3y3": "terra-1",
			"x3y4": "terra-1",
			"x3y5": "road-1",
			"x3y6": "bridge-2",
			"x3y7": "bridge-2",
			"x3y8": "road-1",
			"x3y9": "terra-1",
			"x3y10": "terra-1",
			"x4y0": "hill-1",
			"x4y1": "hill-1",
			"x4y2": "terra-1",
			"x4y3": "terra-1",
			"x4y4": "terra-1",
			"x4y5": "road-1",
			"x4y6": "water-1",
			"x4y7": "water-1",
			"x4y8": "road-1",
			"x4y9": "terra-1",
			"x4y10": "terra-1",
			"x5y0": "terra-1",
			"x5y1": "forest-2",
			"x5y2": "stone-1",
			"x5y3": "terra-1",
			"x5y4": "terra-1",
			"x5y5": "road-1",
			"x5y6": "water-1",
			"x5y7": "water-1",
			"x5y8": "road-1",
			"x5y9": "terra-1",
			"x5y10": "terra-1",
			"x6y0": "terra-1",
			"x6y1": "terra-1",
			"x6y2": "terra-1",
			"x6y3": "road-1",
			"x6y4": "terra-1",
			"x6y5": "road-1",
			"x6y6": "water-1",
			"x6y7": "water-1",
			"x6y8": "road-1",
			"x6y9": "terra-1",
			"x6y10": "road-1",
			"x7y0": "terra-1",
			"x7y1": "terra-1",
			"x7y2": "terra-1",
			"x7y3": "terra-1",
			"x7y4": "terra-1",
			"x7y5": "road-1",
			"x7y6": "bridge-2",
			"x7y7": "bridge-2",
			"x7y8": "road-1",
			"x7y9": "terra-1",
			"x7y10": "terra-1",
			"x8y0": "terra-1",
			"x8y1": "terra-1",
			"x8y2": "terra-1",
			"x8y3": "terra-1",
			"x8y4": "terra-1",
			"x8y5": "road-1",
			"x8y6": "bridge-2",
			"x8y7": "bridge-2",
			"x8y8": "road-1",
			"x8y9": "terra-1",
			"x8y10": "terra-1",
			"x9y0": "terra-1",
			"x9y1": "terra-1",
			"x9y2": "terra-1",
			"x9y3": "road-1",
			"x9y4": "terra-1",
			"x9y5": "road-1",
			"x9y6": "water-1",
			"x9y7": "water-1",
			"x9y8": "road-1",
			"x9y9": "terra-1",
			"x9y10": "road-1",
			"x10y0": "terra-1",
			"x10y1": "forest-1",
			"x10y2": "stone-1",
			"x10y3": "terra-1",
			"x10y4": "terra-1",
			"x10y5": "road-1",
			"x10y6": "water-1",
			"x10y7": "water-1",
			"x10y8": "road-1",
			"x10y9": "terra-1",
			"x10y10": "terra-1",
			"x11y0": "forest-1",
			"x11y1": "forest-1",
			"x11y2": "terra-1",
			"x11y3": "terra-1",
			"x11y4": "terra-1",
			"x11y5": "road-1",
			"x11y6": "water-1",
			"x11y7": "water-1",
			"x11y8": "road-1",
			"x11y9": "terra-1",
			"x11y10": "terra-1",
			"x12y0": "terra-1",
			"x12y1": "terra-1",
			"x12y2": "terra-1",
			"x12y3": "terra-1",
			"x12y4": "terra-1",
			"x12y5": "road-1",
			"x12y6": "bridge-2",
			"x12y7": "bridge-2",
			"x12y8": "road-1",
			"x12y9": "terra-1",
			"x12y10": "terra-1",
			"x13y0": "terra-1",
			"x13y1": "stone-1",
			"x13y2": "stone-1",
			"x13y3": "stone-1",
			"x13y4": "road-1",
			"x13y5": "road-1",
			"x13y6": "water-1",
			"x13y7": "water-1",
			"x13y8": "road-1",
			"x13y9": "road-1",
			"x13y10": "stone-1",
			"x14y0": "road-1",
			"x14y1": "road-1",
			"x14y2": "road-1",
			"x14y3": "road-1",
			"x14y4": "road-1",
			"x14y5": "road-1",
			"x14y6": "water-1",
			"x14y7": "water-1",
			"x14y8": "road-1",
			"x14y9": "road-1",
			"x14y10": "road-1",
			"x15y0": "water-1",
			"x15y1": "water-1",
			"x15y2": "terra-1",
			"x15y3": "terra-1",
			"x15y4": "terra-1",
			"x15y5": "terra-1",
			"x15y6": "water-1",
			"x15y7": "water-1",
			"x15y8": "terra-1",
			"x15y9": "terra-1",
			"x15y10": "terra-1",
			"x0y11": "terra-1",
			"x1y11": "road-1",
			"x2y11": "stone-1",
			"x3y11": "terra-1",
			"x4y11": "terra-1",
			"x5y11": "stone-1",
			"x6y11": "terra-1",
			"x7y11": "terra-1",
			"x8y11": "terra-1",
			"x9y11": "terra-1",
			"x10y11": "stone-1",
			"x11y11": "terra-1",
			"x12y11": "terra-1",
			"x13y11": "stone-1",
			"x14y11": "road-1",
			"x15y11": "terra-1",
			"x0y12": "water-1",
			"x1y12": "road-1",
			"x2y12": "stone-1",
			"x3y12": "terra-1",
			"x4y12": "hill-1",
			"x5y12": "forest-1",
			"x6y12": "terra-1",
			"x7y12": "terra-1",
			"x8y12": "terra-1",
			"x9y12": "terra-1",
			"x10y12": "forest-2",
			"x11y12": "forest-1",
			"x12y12": "terra-1",
			"x13y12": "stone-1",
			"x14y12": "road-1",
			"x15y12": "water-1",
			"x0y13": "water-1",
			"x1y13": "road-1",
			"x2y13": "terra-1",
			"x3y13": "terra-1",
			"x4y13": "forest-2",
			"x5y13": "terra-1",
			"x6y13": "terra-1",
			"x7y13": "terra-1",
			"x8y13": "terra-1",
			"x9y13": "terra-1",
			"x10y13": "terra-1",
			"x11y13": "hill-1",
			"x12y13": "terra-1",
			"x13y13": "terra-1",
			"x14y13": "road-1",
			"x15y13": "water-1"
		}
	};

}(window));