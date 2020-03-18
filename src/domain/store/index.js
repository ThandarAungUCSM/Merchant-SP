import Vue from "vue";
import Vuex from "vuex";
import language from "@/domain/store/modules/lang";
import booking from "@/domain/store/modules/booking";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lang: language,
    book: booking
  }
});
