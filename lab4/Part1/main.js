/*
Name: Cailum McCorquodale
File:js.javascript
INFT1206 – Web Development Fundamentals
Date: 28 July 2026
Description: A random story generator
*/

// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

// Willy the Goblin
// Big Daddy
// Father Christmas

// the soup kitchen
// Disneyland
// the White House

// spontaneously combusted
// melted into a puddle on the sidewalk
// turned into a slug and slithered away

// Partial return random string function
const Character = randomValueFromArray(["Willy the Goblin", "Big Daddy", "Father Christmas"]);
const Place = randomValueFromArray(["the soup kitchen", "Disneyland", "the White House"]);
const Action = randomValueFromArray(["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"]);

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(Character);
  const randomPlace = randomValueFromArray(Place);
  const randomEvent = randomValueFromArray(Action);
  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;
return storyText;
}
generateBtn.addEventListener("click", generateStory);


function generateStory() {
  let newStory = returnRandomStoryString();
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature = Math.round((94 - 32) * (5/9)) + " celsius";
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }


  story.textContent = newStory;
  story.style.visibility = "visible";
}