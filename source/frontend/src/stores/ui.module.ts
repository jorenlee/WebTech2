import { ActionContext } from 'vuex';
import { UiState, RootState } from './state.dto';

// intial state
const state: UiState = {
     toast: {
          isOpen: false,
          header: '',
          message: '',
          duration: 2000,
          position: 'bottom',
     },
     alert: {
          isOpen: false,
          header: '',
          subHeader: '',
          message: '',
          buttons: [
               {
                    text: '',
               },
          ],
     },
};

// mutations
const mutations = {
     setToast(state: UiState, toast: UiState['toast']) {
          state.toast = {
               ...state.toast,
               ...toast,
          };
     },
     setAlert(state: UiState, alert: UiState['alert']) {
          state.alert = {
               ...state.alert,
               ...alert,
          };
     },
};

const actions = {
     async showToast(
          ctx: ActionContext<UiState, RootState>,
          payload: UiState['toast'],
     ) {
          ctx.commit('setToast', {
               ...payload,
               isOpen: true,
          });
     },
     async dismissToast(ctx: ActionContext<UiState, RootState>) {
          ctx.commit('setToast', {
               isOpen: false,
               header: '',
               message: '',
               duration: 3000,
               position: 'bottom',
          });
     },
     async showAlert(
          ctx: ActionContext<UiState, RootState>,
          payload: UiState['alert'],
     ) {
          ctx.commit('setAlert', {
               ...payload,
               isOpen: true,
          });
     },
     async dismissAlert(ctx: ActionContext<UiState, RootState>) {
          ctx.commit('setAlert', {
               isOpen: false,
               header: '',
               subHeader: '',
               message: '',
               button: [],
          });
     },
};

export default {
     namespaced: true,
     state,
     mutations,
     actions,
};