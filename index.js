function saturdayFun (task = "roller-skate") {
    return `This Saturday, I want to ${task}!`;
}
function mondayWork (task = "go to the office") {
    return `This Monday, I will ${task}.`
}
function wrapAdjective (style ="*") {
    return function (name = 'special') {
        return `You are ${style}${name}${style}!`;
    }
}
