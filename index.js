function saturdayFun(){
    console.log("This Saturday I want to roller-skate.");
}
function mondayWork(){
    console.log("This Monday I will go to the office");
}
function wrapAdjective(name) {
    const part1 = "you";
    return function () {
      const part2 = "are";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }

  wrapAdjective("100%")("a dedicated programmer")();