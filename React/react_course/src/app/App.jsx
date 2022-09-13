import React, {useState} from 'react';

import './App.css'
import WishInput from './WishInput';
import WishList from './WishList/WishList';

const initialWishes = [
    {text: 'Travel to the moon', done: false},
    {text: 'Pay the gym', done: true},
    {text: 'Go to the gym', done: false},
]

const App = () =>{
    const[wishes, setWishes] = useState(initialWishes);
    return(
    <div className='app'>
        <h1>My Wishlist</h1>
        <WishInput onNewWish={wish => setWishes([...wishes, wish])}/>        
        <WishList wishes={wishes} onWishesChange={setWishes}/> 
        {/* Same as onWishesChange={wishes => setWishes(wishes)} */}
        <button className='wish-clear' type='button' onClick={() => setWishes(wishes.filter(wish => !wish.done))}>Archive fulfilled wishes</button>
    </div>
    )
};
export default App;