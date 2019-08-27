Serialize = function(options){
    return this.init(options);
}
Serialize.prototype = {
    eventSubmit: null,
    init: function (options) {
        var that = this;
        that.eventSubmit = options.eventSubmit ? $(options.eventSubmit) : null;
        return that;
    },
    showValues: function () {

    }
}