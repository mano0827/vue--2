import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender:'',
    year:'',
    month:'',
    day:'',
    a1:'',
    a2:'',
    a3:'',
    answer:''

  },
  mutations: {
    answerGender(state,gender){
      state.gender = gender
    },
    answerYear(state,year){
      state.year = year
    },
    answerMonth(state,month){
      state.month = month
    },
    answerDay(state,day){
      state.day = day
    },
    q1(state,a1){
      state.a1 = a1
    },
    q2(state,a2){
      state.a2 = a2
    },
    q3(state,a3){
      state.a3 = a3
    },
    answers(state,answer){
      state.answer = answer
    }
  },
  actions: {
  },
  modules: {
  }
})
