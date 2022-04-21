import fetchData from './effects/fetchData'

const model = {
  state: {
    accountList: [],
    selectOneAccount: {}
  },
  reducers: {
    fetchedAccountList: (state, accountList) => {
      return {
        ...state,
        accountList: [...accountList]
      }
    },
  },
  effects: (dispatch) => ({
    // fetchAccountList: (args, state) => fetchAccountData(args, state, dispatch),
  })
};

export default model;