// const jokes = require('./jokes');

import {jokes} from './jokes.js';

import $ from 'jquery';
import fs from 'fs';

jokes.getOne()
    .then(joke => {
        // document.getElementById('joke').innerHTML = joke;
        $('#joke').text(joke);
    })

    const copy = fs.readFileSync('copyright.txt', 'utf8');

    $('#copy').text(copy);