import { takeEvery, call, put } from "redux-saga/effects";
import { callApiService } from "./callApiService";
import { change_data_list } from "./commonSlice";

type propCall = {
  url: string;
  method: string;
  query: any;
  contentType: string;
};

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// Our worker Saga: will perform the async increment task
export function* saga_get_data_list({ url, page, limit }: any): any {
  try {
    const response = yield call(callApiService, {
      method: "GET",
      query: {
        page: page || 0,
        limit: limit || 10,
      },
      url,
      contentType: "", //"json",
    });

    const data = response.data;

    // yield delay(1000)

    //put reducers
    yield put(change_data_list(data));

    // dispatch a success action to the store with the new dog
    // yield put({type: "API_CALL_SUCCESS", data})
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export default function* watchSagas() {
  const action: any = "SAGA_GET_DATA_LIST";
  yield takeEvery(action, saga_get_data_list);
}
