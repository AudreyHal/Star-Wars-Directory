import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        display_people:true,
        display_planets:false,
        display_starships:false,
        row_data: [],
        show_select:false,
        index:'',
        type:''
      },
      mutations: {
        change_row_data(state, row_data) {
          state.row_data = row_data
        },
        change_index(state, index) {
          state.index = index
        },
        change_show_select(state, show_select) {
          state.show_select = show_select
        },
        change_type(state, type) {
          state.type = type
        },
        change_display_planets(state, display_planets) {
          state.display_planets = display_planets
        },
        change_display_starships(state, display_starships) {
          state.display_starships = display_starships
        },
        change_display_people(state, type) {
          state.display_starships = display_starships
        },
      },
      getters: {
        employee_data( state){return state.employees},
        clicked_employee: state => state.employees[state.index],
        index: state => state.index,
        row_data: state => state.row_data,
        show_select: state => state.show_select,
        display_people: state => state.display_people,
        display_planets: state => state.display_planets,
        display_starships: state => state.display_starships,
        type: state => state.type

      }
})