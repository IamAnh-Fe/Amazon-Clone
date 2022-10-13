import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from '~/redux/selectors';
import { cartItemsCountSelector } from '~/redux/selectors';
const SubTotal = () => {
    const cartTotal = useSelector(cartTotalSelector);
    const badge = useSelector(cartItemsCountSelector);
    return (
        <>
            <h3>
                Subtotal ({badge} items): ${cartTotal}
            </h3>
        </>
    );
};

export default SubTotal;
