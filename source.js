/* CREDIT TO CLOUDWADDIE 
Anyone can use this but please credit me. */
let doesExists = localStorage.getItem("infinite-craft-data")
let confirmed
let replace = '{"elements":[{"text":"Water","emoji":"💧","discovered":false},{"text":"Fire","emoji":"🔥","discovered":false},{"text":"Wind","emoji":"🌬️","discovered":false},{"text":"Earth","emoji":"🌍","discovered":false}]}'
if (doesExists == null) {
	localStorage.setItem("infinite-craft-data", replace);

}
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
confirmed = confirm("Are you sure? This CANNOT be easily undone!");
if (confirmed == true) {
	localStorage.setItem("infinite-craft-data", array);
	alert("Reloading!")
	window.location.reload();
}
console.log("DONE");
