function shout(string) {
  return string.toUpperCase();
}


function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
  console.log(shout(string));
}

function logWhisper(string) {
  console.log(whisper(string));
}


function sayHiToGrandma(string){
  if(string === whisper(string)) {
    return "I can\'t hear you!";
  }else if(string === shout(string)) {
    return "YES INDEED!";
  }else if
    
  }
  

}


function sayHiToGrandma(string) {
  if(string === "I love you, Grandma."){
    return "I love you, too."
  }
}
/*


  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
*/