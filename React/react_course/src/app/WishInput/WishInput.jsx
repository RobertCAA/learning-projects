import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const WishInput = ({ onNewWish, }) => {
    const [newWishText, setnewWishText] = useState('');
    return(
        <fieldset className='wish-input'>
                <legend className='wish-input__label'>New wish</legend>
                <input 
                    className='wish-input__field' 
                    placeholder='Enter your wish here'
                    value={newWishText}
                    onChange={e => setnewWishText(e.target.value)}
                    onKeyUp = {(e) =>{
                        if(e.key === 'Enter' && newWishText.length){
                            onNewWish({ done: false, text: newWishText});
                            setnewWishText('');
                        }                            
                    }}
                />
        </fieldset>
    )
};

WishInput.propTypes = {
    onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
    onNewWish: () =>{},
};

export default WishInput;