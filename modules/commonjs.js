function myModule() {
    this.hello = function () {
            return 'Hello!';
        },
        this.goodbye = function () {
            return 'Goodbye!';
        }
}

export default myModule;