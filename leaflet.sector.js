/*
 * L.Sector is a circle sector overlay (with a certain radius in meters, theta angle and azimuth).
 */

L.Sector = L.Circle.extend({
	initialize: function (latlng, radius, theta, azimuth, options) {
		L.Circle.prototype.initialize.call(this, latlng, radius, options);
		this._theta = (theta < 360 ? theta : 359.9999) * Math.PI / 180;
        this._azimuth = (azimuth % 360 - 90) * Math.PI / 180 ;
	},

	getPathString: function () {
		var p = this._point;
        var r = this._radius;

        var a = {
            x: p.x + r * Math.cos(this._azimuth + this._theta / 2),
            y: p.y + r * Math.sin(this._azimuth + this._theta / 2)
        };

        var b = {
            x: p.x + r * Math.cos(this._azimuth - this._theta / 2),
            y: p.y + r * Math.sin(this._azimuth - this._theta / 2)
        };

		if (this._checkIfEmpty()) {
			return '';
		}

		if (L.Browser.svg) {
            return 'M' + p.x + ',' + p.y +
                    ' L' + a.x + ',' + a.y +
                    ' A' + r + ',' + r + ',0,' + (this._theta < Math.PI ? 0 : 1) + ',0,' + b.x + ',' + b.y +
                    ' z';
		} else {
			p._round();
			r = Math.round(r);
			return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360); // TODO: support non-svg browsers
		}
	}
});

L.sector = function (latlng, radius, theta, azimuth, options) {
	return new L.Sector(latlng, radius, theta, azimuth, options);
};
