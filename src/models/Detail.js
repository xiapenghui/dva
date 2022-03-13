import * as usersService from '../services/Detail';

export default {
  namespace: 'Detail',
  state: {
    list: [],
    total: null,
    page: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/Detail') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

 

  effects: {

    //初始化
    *fetch({ payload: { } }, { call, put }) {
      
      const { data } = yield call(usersService.fetch, {});
      yield put({
        type: 'save',
        payload: {
          data: data.list,
          total: data.total
        },
      });
    },


    //删除
    *remove({ payload: { text, values } }, { call, put }) {
      
      yield call(usersService.remove, { "departmentids": [text.departmentid] });
      yield put({ type: 'reload' });
    },

    //  更新
    *patch({ payload: { values } }, { call, put }) {
      yield call(usersService.patch, values);
      yield put({ type: 'reload' });
    },

    //新建
    *create({ payload: values }, { call, put }) {
      yield call(usersService.create, values);
      yield put({ type: 'reload' });
    },

    // 初始
    *reload(action, { put, select }) {
       debugger
      const page = yield select(state => state.Users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },

};
