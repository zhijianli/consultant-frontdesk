import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

axios.defaults.timeout = 10000
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8"
const urlPrefix = 'http://localhost:8089/'

export default new Vuex.Store({
  state:{
    count:0,
    consultantList: [],
    consultingFieldList: [],
    name: ""
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
  },


})
