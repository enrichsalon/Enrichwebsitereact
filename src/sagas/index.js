import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchProducts() {

  const json = yield fetch('https://stage.enrichbeauty.com/rest/V1/products/?searchCriteria[filterGroups][0][filters][0][field]=category_id&searchCriteria[filterGroups][0][filters][0][value]=3&searchCriteria[pageSize]=10&searchCriteria[currentPage]=1')
    .then(response => response.json());

    console.log("In Fetch Products")
    // console.log(json.items[0])
  yield put({ type: "PRODUCTS_RECEIVED", json: [json] || [{ error: json.message }] });
}

function* fetchMegaMenuObjects() {

  const json = yield fetch('http://localhost:8181/api/v1/common/objects/getMegaMenuObjects')
    .then(response => response.json());

    console.log("In Fetch Products")
  yield put({ type: "MEGA_MENU_RECEIVED", json: json.data|| [{ error: json.message }] });
}


function* actionWatcher() {
  yield takeLatest('GET_PRODUCTS', fetchProducts)
  yield takeLatest('GET_MEGA_MENU_OBJECTS', fetchMegaMenuObjects)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
