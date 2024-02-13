let initial = localStorage.getItem("infinite-craft-data");
let array = JSON.parse(initial).elements
let text = prompt("What is the name of the item?");
let emoji = prompt("What should the emoji be for the item? Hint: Press Windows + . ");
let discovered = confirm("Should the item be a first discovery?");
let ItemsToAdd = {
  text: text,
  emoji: emoji,
  discovered: discovered
};
array.push(ItemsToAdd)
let newItem = {
	elements: array
};

array = JSON.stringify(newItem)
localStorage.setItem("infinite-craft-data", array);
alert("Reloading!")
window.location.reload();
