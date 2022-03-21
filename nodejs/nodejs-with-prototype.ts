type User = {
    name: String;
    age: Number;
}

function isAdult(user: User) : boolean {
    return user.age >= 18;
}

const justine: User = {
    name: "Justine",
    age: 23,
}

const isJustineAnAdult: boolean = isAdult(justine);
console.log(isJustineAnAdult);