document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('click', addPost);


function getText(){
    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err))

}

function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {

        let output = '<h2>Posts</h2>';
        data.forEach(post => {
            output += `
                <div>
                    <h3> ${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function getUsers(){
    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {

        let output = '<h2>Users</h2>';
        data.forEach(user => {
            output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>email: ${user.email}</li>
                </ul>
            `;
        });
        document.getElementById('output').innerHTML = output;
    })
}

function addPost(e){
    e.preventDefault();

    let title = document.getElementById('title');
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type':  'application/json'
        },
        body: JSON.stringify({title: title, body: body})
    })
    .then((res)=>res.json())
    .then((data)=> console.log(data))
}