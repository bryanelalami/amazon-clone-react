import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className="subtotal">
           <button>Proceed to Checkout</button>
           <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{` ${value} `}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                </>
            )}

            decimaScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
           /> 
        </div>
    )
}

export default Subtotal
