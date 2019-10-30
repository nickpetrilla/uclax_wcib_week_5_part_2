console.log('Hello from js/scripts.js!');

var customName = document.getElementById('customname');
var customSound = document.getElementById('customsound');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var coolname = document.querySelector('#coolname');



function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, screamed loudly then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


let insertX = ["Willy the Goblin","Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen","Disneyland", "the White House"];
let insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

var coolText = "Bob, now that's a cool name.";


randomize.addEventListener('click', result);

function result() {



  var newStory = storyText;
  var coolNewName = coolText;

  console.log(coolname);

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory=newStory.replace(':insertx:', xItem);
  newStory=newStory.replace(':inserty:', yItem);
  newStory=newStory.replace(':insertz:', zItem);
  newStory=newStory.replace(':insertx:', xItem);


  if(customName.value !== '') {
    var name = customName.value;
    newStory=newStory.replace('Bob', name);
    coolNewName=coolNewName.replace('Bob', name);

  }

  if(customSound.value !== '') {
    var sound = customSound.value;
    newStory=newStory.replace('loudly', sound);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + ' stone';
    var temperature =  Math.round((94 - 32)*5/9) + ' celcius';
    newStory=newStory.replace('94 fahrenheit', temperature);
    newStory=newStory.replace('300 pounds', weight);
  }

  if(document.getElementById("goth").checked) {
    document.querySelector('body').style.backgroundColor = '#8b0000';
  } else {
    document.querySelector('body').style.backgroundColor = '';
  }

  coolname.textcontent=coolNewName;
  console.log(coolText);
  coolname.style.visibility = 'visible';
  story.textContent = newStory;
  story.style.visibility = 'visible';

}
