var katzDeli = [];

function takeANumber(name){
  katzDeli = [...katzDeli, name];
  return [`Welcome, ${name}. You are number ${katzDeli.length} in line.`]
}

function nowServing(arr){

  if (arr.length > 0){
    var name = arr[0];
    arr = arr.slice(1);
    return `Currently serving ${name}`
  }
  else return "There is nobody waiting to be served!";
}
