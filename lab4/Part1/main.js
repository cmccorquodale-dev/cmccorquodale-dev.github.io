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

function returnRandomStoryString() {
  const storyText = `It was 94 Fahrenheit outside, so ${name} went for a walk. When they got to ${location}, they stared in horror for a few moments, then ${action}. Bob saw the whole thing, but was not surprised — ${name} weighs ${weight} pounds, and it was a hot day.`;
  const randomCharacter = randomValueFromArray(["Willy the Goblin", "Big Daddy", "Father Christmas"]);
  const randomPlace = randomValueFromArray(["the soup kitchen", "Disneyland", "the White House"]);
  const randomAction = randomValueFromArray(["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and slithered away"]);
  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);
const newStory = returnRandomStoryString();

function generateStory() {
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature = Math.round(94 - 32 * 5/9) + " celsius";
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}