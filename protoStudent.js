Person = function Person(options) {
    return this.init(options);
}
Person.prototype = {
    name: "",
    age: "",
    address: "",
    birthday: "",
    init: function (options) {
        var that = this;
        that.name = options.name;
        that.age = options.age;
        that.address = options.address;
        that.birthday = options.birthday;
        that.birthday.datepicker({
            dateFormat: "dd-mm-yy"
        });
        that.getPersonInfo();
        return that;
    },
    getPersonInfo: function () {
        return (this.name + " - " + this.address + " - " + this.birthday);
    }

}

