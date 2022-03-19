function greet() {
    const reply = [this.animal, 'typically sleep between', this.duration].join(' ');
    console.log(reply);
}
const obj = {
    animal: 'cats',
    duration: '12 and 16 hours'
};

greet.call(obj);