/* CREDIT TO CLOUDWADDIE 
Anyone can use this but please credit me. */

(function() {
    let replace = '{"elements":[{"text":"Water","emoji":"💧","discovered":false},{"text":"Fire","emoji":"🔥","discovered":false},{"text":"Wind","emoji":"🌬️","discovered":false},{"text":"Earth","emoji":"🌍","discovered":false}]}';
    let initial = localStorage.getItem("infinite-craft-data");
    let array;

    // Error Handling for localStorage Reading
    if (initial === null) {
        try {
            localStorage.setItem("infinite-craft-data", replace);
            initial = replace;
            alert("Initialized Infinite Craft data in your browser's local storage.");
        } catch (e) {
            alert("Error: Could not initialize local storage. Your browser's storage might be inaccessible or full. Please try clearing some space or enabling storage access.");
            return;
        }
    }

    try {
        array = JSON.parse(initial).elements;
    } catch (e) {
        alert("Error: Could not read existing Infinite Craft data. It might be corrupted. Please try resetting your game data or contact support if the issue persists.");
        return;
    }

    // Descriptive Prompts & Input Validation
    let text = prompt("Enter the name for your new Infinite Craft element:");
    if (text === null) {
        alert("Operation cancelled by user.");
        return;
    }
    if (text.trim() === "") {
        alert("Item name cannot be empty. Aborting.");
        return;
    }

    let emoji = prompt("Enter the emoji for your element (e.g., ✨). You can copy emojis from an emoji picker or website.");
    if (emoji === null) {
        alert("Emoji input cancelled. Aborting.");
        return;
    }
    // Basic emoji validation (optional - for now, just checking for null)
    // if (emoji.trim() === "") { // Or more complex regex if needed
    //     alert("Emoji cannot be empty. Aborting.");
    //     return;
    // }


    let discovered = confirm("Should the item be a first discovery?");
    // If confirm is cancelled, 'discovered' will be false, which is acceptable.

    let ItemsToAdd = {
      text: text,
      emoji: emoji,
      discovered: discovered
    };
    array.push(ItemsToAdd);

    let newItem = {
        elements: array
    };

    let newArrayString;
    try {
        newArrayString = JSON.stringify(newItem);
    } catch (e) {
        alert("Error: Could not prepare the new item data for saving. Aborting.");
        return;
    }
    
    let confirmed = confirm("Are you sure you want to add this element? This CANNOT be easily undone!");
    if (confirmed) {
        try {
            localStorage.setItem("infinite-craft-data", newArrayString);
            alert("New element added! Reloading to apply changes...");
            window.location.reload();
        } catch (e) {
            alert("Error: Could not save the new item. Your browser's storage might be full or inaccessible. Please check your browser settings and try again.");
        }
    } else {
        alert("Operation cancelled by user.");
    }

    console.log("Bookmarklet execution finished.");
})();
