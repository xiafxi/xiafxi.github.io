import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: null,
      dailyRecords: [],
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addRecord(state, record) {
      state.dailyRecords.push(record);
    },
    removeRecord(state, recordId) {
      state.dailyRecords = state.dailyRecords.filter(record => record.id !== recordId);
    },
    updateRecord(state, updatedRecord) {
      const index = state.dailyRecords.findIndex(record => record.id === updatedRecord.id);
      if (index !== -1) {
        state.dailyRecords[index] = updatedRecord;
      }
    },
  },
  actions: {
    fetchUser({ commit }, userId) {
      // 模拟 API 调用
      const user = { id: userId, name: 'John Doe' };
      commit('setUser', user);
    },
    addNewRecord({ commit }, record) {
      // 模拟 API 调用
      commit('addRecord', record);
    },
    deleteRecord({ commit }, recordId) {
      // 模拟 API 调用
      commit('removeRecord', recordId);
    },
    modifyRecord({ commit }, updatedRecord) {
      // 模拟 API 调用
      commit('updateRecord', updatedRecord);
    },
  },
  getters: {
    getUser: (state) => state.user,
    getRecords: (state) => state.dailyRecords,
    getRecordById: (state) => (id) => state.dailyRecords.find(record => record.id === id),
  },
});

export default store;
