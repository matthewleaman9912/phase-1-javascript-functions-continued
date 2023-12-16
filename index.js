function saturdayFun(phrase) {
    if (phrase != null) {
        let say = "This Saturday, I want to " + phrase + "!";
        return say
    }
    else {
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(name = "go to the office") {
    return "This Monday, I will " + name + ".";
}

function wrapAdjective(mark = "*"){
    const part1 = "You are ";
    return function(special = "special") {
        return part1 + mark + special + mark + "!";
    }
}