        // Array of strings
        const stringArray = ["Apple", "Banana", "Orange", "Grapes"];

        // Function to convert array to list
        function arrayToList(array) {
            // Create an unordered list element
            const ul = document.createElement("ul");

            // Loop through the array and create a list item for each element
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;  // Set the text of the list item
                ul.appendChild(li);  // Append the list item to the unordered list
            });

            // Append the unordered list to the container div
            document.getElementById("list-container").appendChild(ul);
        }

        // Call the function with the array of strings
        arrayToList(stringArray);
