Shape = function (options) {
    return this.init(options);
}

Shape.prototype = {
    rectangle: null,
    circle: null,
    circleVertical: null,
    rectangleLeft: null,
    btnClick: null,
    effect: null,
    state: true,
    circleTogether: null,
    init: function (options) {
        var that = this;
        that.rectangle = options.rectangle ? $(options.rectangle) : null;
        that.circle = options.circle ? $(options.circle) : null;
        that.circleVertical = options.circleVertical ? $(options.circleVertical) : null;
        that.rectangleLeft = options.rectangleLeft ? $(options.rectangleLeft) : null;
        that.btnClick = options.btnClick ? $(options.btnClick) : null;
        that.effect = options.effect ? $(options.effect) : null;
        that.circleTogether = options.circleTogether ? $(options.circleTogether) : null;
        that.render().renderCircle().renderCircleVertical().renderRectangleLeft().renderCircleTogether().eventClick();
        return that
    },
    render: function (n = 1) {
        var that = this;
        that.rectangle.animate({
            rotate: n * 360,
            backgroundColor: "red",
        }, {
            duration: 5000,
            specialEasing: {
                width: "linear",
                height: "easeInElastic"
            },
            step: function (now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)',
                });
            },
            complete: function () {
                n = n + 1;
                that.renderMoon(n);
            }
        });
        return that;
    },
    renderMoon: function (n = 1) {
        var that = this;
        that.rectangle.animate({
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: "blue",
        }, {
            duration: 1000,
            specialEasing: {
                width: "linear",
                height: "easeOutElastic"
            },
            step: function (now) {
                $(this).css({
                    transform: 'rotate(' + now + 'deg)',
                });
            },
            complete: function () {
                n = n + 1;
                that.render(n);
            }
        });

    },
    renderCircle: function (n = true) {
        var that = this;
        let left = !n ? "-500" : "500";
        that.circle.animate({
            top: left,
            left: left,
            backgroundColor: "yellow",
        }, {
            duration: 3000,
            specialEasing: {
                width: "linear",
                height: "easeInElastic"
            },
            complete: function () {
                n = !n;
                that.renderCircle(n);
            }
        });
        return that;
    },
    renderRectangleLeft: function (n = true) {
        var that = this;
        let left = !n ? "-300" : "300";
        that.rectangleLeft.animate({
            left: left,
            backgroundColor: "#8e0ca3",
        }, {
            duration: 3000,
            specialEasing: {
                width: "linear",
                height: "easeInElastic"
            },
            complete: function () {
                n = !n;
                that.renderRectangleLeft(n);
            }
        });
        return that;
    },
    renderCircleVertical: function (n = true) {
        var that = this;
        let top = !n ? "-200" : "200";
        that.circleVertical.animate({
            opacity: 0.25,
            top: top,
            backgroundColor: "green",
        }, {
            easing: 'easeOutExpo',
            duration: 3000,
            specialEasing: {
                width: "linear",
                height: "easeInElastic"
            },
            complete: function () {
                n = !n;
                that.renderCircleVertical(n);
            }
        });
        return that;
    },
    renderCircleTogether: function (n = true) {
        var that = this;
        let top = !n ? "-200" : "200";
        that.circleTogether.animate({
            backgroundColor: "red",
            opacity: 0.5,
            right:top,
            top:top,
            transition: 'width 2s'
        }, {
            duration: 2000,
            complete: function () {
                n = !n;
                that.renderCircleTogether(n);
            }
        });
        return that;
    },
    eventClick: function () {
        var that = this;
        that.btnClick.on("click", function () {
            that.effect.animate({
                backgroundColor: that.state ? "#aa0000" : "#fff",
                color: that.state ? "#fff" : "#000",
                width: that.state ? 500 : 240
            }, {
                duration: 1000
            });
            that.state = !that.state;
        });
        return that;
    }


};