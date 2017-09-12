var Sample1;
(function (Sample1) {
    var CustomerService = (function () {
        function CustomerService() {
        }
        CustomerService.prototype.getAll = function () {
            var list = [];
            list.push(new Sample1.Customer(1, 'Evi', 'Pfleger'));
            list.push(new Sample1.Customer(2, 'Harry', 'Pfleger'));
            list.push(new Sample1.Customer(3, 'Niklas', 'Pfleger'));
            list.push(new Sample1.Customer(4, 'Julia', 'Pfleger'));
            return list;
        };
        CustomerService.prototype.getById = function (id) {
            return this.getAll()[id];
        };
        return CustomerService;
    }());
    Sample1.CustomerService = CustomerService;
})(Sample1 || (Sample1 = {}));
