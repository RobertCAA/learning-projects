var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
storedItems = window.localStorage;

// Checks storage content
if(!localStorage.getItem('storedItems')){
    //Sets stored items to an empty array
    localStorage.setItem('storedItems', '[]');
    // Fills empty list of items
    populateItemList();
    console.log('hi');
}else{
    // Loads list of items
    setItemList();
    console.log('no hi')
}

// Fills list with the stored items
function populateItemList(){
    // Evaluates if the stored Items array is empty and populates a dummy item
    console.log(storedItems)
    if(storedItems.lenght > 0){
    
    }
    
    /*
    // Sets stored Item list with the elements with the id of items

    // Create an if condition to evaluate if itemList is still empty and populate a dummy item   
    if(localStorage.setItem('storedItems', document.getElementById('items')) === undefined){
        dummyItem();        
    }else{
        // Sets Item List with items stored on local storage
        setItemList();        
    }
    */

    localStorage.setItem('storedItems', JSON.stringify(document.getElementById('items')));
}

// Load list of items
function setItemList(){
    const currentList = JSON.parse(localStorage.getItem('storedItems'));

    document.getElementById('items').value = currentList.value;
    console.log(currentList)

}


// Form listens for submit action
form.addEventListener('submit', addItem);

// Item list listen for a click on delete button
itemList.addEventListener('click', deleteItem);

// Filter listen for input
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('itemInput').value;

    // Create li to add
    var li = document.createElement('li');

    // Add a class
    li.className = 'list-group-item';
    
    // Append input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button
    var deleteButton = document.createElement('button');

    // Add class to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Append text 'X' to delete button
    deleteButton.appendChild(document.createTextNode('X'));

    // Add delete button to item 'li'
    li.appendChild(deleteButton);

    // Add li with text to the list of items
    itemList.appendChild(li);

    // Create array to store it Array.from()

    // Save list of items in stored items
    localStorage.setItem('storedItems', JSON.stringify(itemList));
    console.log(storedItems);
}

function dummyItem(text="Dummy Item"){

    // Create li to add
    var li = document.createElement('li');

    // Add a class
    li.className = 'list-group-item';
    
    // Append input value
    li.appendChild(document.createTextNode(text));

    // Create delete button
    var deleteButton = document.createElement('button');

    // Add class to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Append text 'X' to delete button
    deleteButton.appendChild(document.createTextNode('X'));

    // Add delete button to item 'li'
    li.appendChild(deleteButton);

    // Add li with text to the list of items
    itemList.appendChild(li);

    // Save list of items in stored items
    storedItems = JSON.stringify(itemList.chi);
    console.log(itemList);
    

}

// Delete Item
function deleteItem(e){

    // Triggered for elements with the delete class ergo deleteButton
    if(e.target.classList.contains('delete')){
        // Confirmation message to user
        if(confirm('Are you sure?')){
            // Selection of correct li from child button
            var li = e.target.parentElement
            // Remove child li from item list
            itemList.removeChild(li)
        }
    }
}

// Filter items
function filterItems(e){
    // Get text in filter and conver it to lowercase
    var text = e.target.value.toLowerCase();
    // Creates an HTML collection list of items/li
    var items = itemList.getElementsByTagName('li');
    // Converts list of items (lis) to an array
    Array.from(items).forEach(
        // Get the text from each li
        function(item){
            var itemName = item.firstChild.textContent
            // Checks if searched item text matches any text on the lis
            if(itemName.toLowerCase().indexOf(text) != -1 ){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        }
    );
}

// Save Items in local storage
// storedItems = document.getElementById('items');
// localStorage.setItem('storedItems', storedItems);
/*
let storedItems = localStorage.setItem(storedItems, '');
if (storeItems == null){
    console.log('yes')
}
*/

