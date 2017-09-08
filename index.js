var katzDeli = [];

function takeANumber(name){
  katzDeli = [...katzDeli, name];
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(arr){

  if (arr.length > 0){
    var name = arr[0];
    arr.shift();
    return `Currently serving ${name}.`
  }
  else return "There is nobody waiting to be served!";
}

function currentLine(arr){
  if (arr.length == 0){
    return "The line is currently empty."
  }
  else{
    var curr = "The line is currently: ";
    for(var i = 0; i < arr.length; i++){
      curr += `${i + 1}. ${arr[i]}, `
    }
    return curr.slice(0,-2)
  }
}
