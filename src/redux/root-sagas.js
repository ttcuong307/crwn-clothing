import { call , all } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from '../redux/user/user.sagas';
import { cartSagas } from './cart/cart.sagas'

export default function* rootSaga() {
    yield all ([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas),
    ]);
}