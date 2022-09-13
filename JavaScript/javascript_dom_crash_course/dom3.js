storedItems = window.localStorage;
var itemsToStore = [];

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form listens for submit action
form.addEventListener('submit', addItem);

// Item list listen for a click on delete button
itemList.addEventListener('click', deleteItem);

// Filter listen for input
filter.addEventListener('keyup', filterItems);

// Evaluates if items are stored in local storage
if(!localStorage.getItem('storedItems')){
    // Creates a test item
    initiateDummy();
}else{
    // Populates items
    populateItems();
}

// Creates dummy item
function initiateDummy(){
    createItem("Dummy Item");
    storeItem();
}

// Populates items
function populateItems(){
    // Get items from storage
    var items = JSON.parse(localStorage.getItem('storedItems'));
    // Creates an item from each item in storage
    items.forEach((item) => createItem(item))
}


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

    storeItem();
}

function createItem(text){
    // Get input value
    //var newItem = document.getElementById('itemInput').value;
    
    // Create li to add
    var li = document.createElement('li');

    // Add a class and id
    li.className = 'list-group-item';
    li.id = 'list-item'
    
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

    // No need to store. Getting data from storage
    //storeItem();
}

// Add item to storage
function storeItem(){
    // Evaluates input field
    if(document.getElementById('itemInput').value != ''){
        // Gets value from input
        var newItem = document.getElementById('itemInput').value;
    }else{
        console.log("li");
        // Gets value from li //Check a lot
        newItem = document.getElementById('list-item').firstChild.textContent;
    }
    // Puts it in an array
    itemsToStore.push(newItem);
    // Stores array in JSON string to local storage
    localStorage.setItem('storedItems', JSON.stringify(itemsToStore));
    
}

// Delete Item
function deleteItem(e){
    // Triggered for elements with the delete class ergo deleteButton
    if(e.target.classList.contains('delete')){
        // Confirmation message to user
        if(confirm('Are you sure?')){
            // Selection of correct li from child button
            var li = e.target.parentElement
            // Remove item from local storage
            console.log(li.textContent);
            deleteStoredItem(li.firstChild.textContent);
            // Remove child li from item list
            itemList.removeChild(li)            
        }
    }
}

// Remove item from local storage
function deleteStoredItem (text) {

    //Gets items from local storage
    itemsToStore = JSON.parse(localStorage.getItem('storedItems'));
    
    // Delete item which text matches array of items
    itemsToStore.splice(itemsToStore.indexOf(text), 1);

    //Set updated array of items in local storage
    localStorage.setItem('storedItems', JSON.stringify(itemsToStore));
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
