var katzDeli = [];

function takeANumber(name){
  katzDeli = [...katzDeli, name];
  return [`Welcome, ${name}. You are number ${katzDeli.length} in line.`]
}

function nowServing(){

  if (katzDeli.length > 0){
    var name = katzDeli[0];
    katzDeli = katzDeli.slice(1);
    return `Currently serving ${name}`
  }
}
