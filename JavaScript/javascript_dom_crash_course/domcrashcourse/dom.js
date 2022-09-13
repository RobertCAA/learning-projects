/*
// Create div
let newDiv = document.createElement('div');

// Give a class
newDiv.className = 'hello';

//Give a ID
newDiv.id = 'test1'

// Add attribute
newDiv.setAttribute('title', 'hello div');

// Create a text node
newDivText = document.createTextNode('I am a text node')

// Add text to div
newDiv.appendChild(newDivText);

// Insert element to DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1);


newDiv.style.fontSize = '30px'


console.log(newDiv);

*/

// EVENT LISTENER

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
    //document.getElementById('header-title').textContent = 'changed'
    //document.querySelector('#main').style.backgroundColor = '#f4f4f4'

    /*
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>' + e.target.id + '<h3/>';

    console.log(e.type)
    */

    // Gets position from the actual window object
    //console.log(e.clientY)

    // Gets position from the actual element
    //console.log(e.offsetY)

    // Check if ctrl, alt keys are pressed
    /*
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
    */
//}

var button = document.getElementById('button');
var box = document.getElementById('box');
var output = document.getElementById('output');

//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);


// Fires or triggers within the element only
//box.addEventListener('mouseenter', runEvent)
//box.addEventListener('mouseleave', runEvent)

// Fires or triggers with child elements as well as the parent
//box.addEventListener('mouseover', runEvent)
//box.addEventListener('mouseout', runEvent)

//box.addEventListener('mousemove', runEvent)


var itemInput = document.querySelector('input[type=text]')
var form = document.querySelector('form')
var select = document.querySelector('select');

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);

//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);

//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);


form.addEventListener('submit', runEvent)

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE:'+e.type)

    //output.innerHTML = '<h3>MouseX: '+ e.offsetX + '</h3>' + '<h3> MouseY: '+ e.offsetY + '</h3>';

    //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)"

    //document.getElementById('output').innerHTML = '<h3>'+ e.target.value+ '</h3>'
    //console.log(e.target.value)

    //document.body.style.display = 'none'


}
