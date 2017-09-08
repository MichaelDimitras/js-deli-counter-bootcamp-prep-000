var katzDeli = [];

function takeANumber(name){
  katzDeli = [...katzDeli, name];
  return [`Welcome, ${name}. You are number {} in line.`]
}
