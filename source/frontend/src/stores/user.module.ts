import { ActionContext } from 'vuex';
import { UserState, RootState } from './state.dto';
import store from 'storejs';
import firebase from 'firebase';
import router from '../router';
import vuexStore from './index';
import { loadingController } from '@ionic/vue';
import axios from 'axios';
import qs from 'qs';

// intial state
const state: UserState = {
  userDetail: {},
  authenticated: false,
  userTokens: {
    idToken: null,
    refreshToken: null,
  },
};

async function createLoading() {
  return await loadingController.create({
    spinner: 'crescent',
    message: 'Please wait...',
  });
}

// mutations
const mutations = {
  setUserDetail(state: UserState, user: UserState['userDetail']) {
    state.userDetail = user;
  },
  setAuthenticated(
    state: UserState,
    authenticated: UserState['authenticated'],
  ) {
    state.authenticated = authenticated;
  },
  setUserTokens(state: UserState, userTokens: UserState['userTokens']) {
    state.userTokens = userTokens;
    if (userTokens) {
      state.authenticated = true;
    }
  },
};

// actions
const actions = {
  setUser(
    ctx: ActionContext<UserState, RootState>,
    payload: {
      userDetail: UserState['userDetail'];
      userTokens: UserState['userTokens'];
    },
  ) {
    store.set('companion_app_user', payload.userDetail);
    store.set('companion_app_user_tokens', payload.userTokens);
    ctx.commit('setUserDetail', payload.userDetail);
    ctx.commit('setUserTokens', payload.userTokens);
  },

  async getCallback(
    ctx: ActionContext<UserState, RootState>,
    payload: {
      idToken: UserState['userTokens']['idToken'];
      pushToken?: string;
      refreshToken: UserState['userTokens']['refreshToken'];
    },
  ) {
    const data = (
      await axios.get(
        window.config.API_URL +
          '/auth/callback?' +
          qs.stringify({
            id_token: payload.idToken,
            ...(payload.pushToken ? { push_token: payload.pushToken } : {}),
          }),
      )
    ).data;

    ctx.dispatch('setUser', {
      userDetail: data.result,
      userTokens: {
        idToken: payload.idToken,
        refreshToken: payload.refreshToken,
      },
    });
  },

  async login(ctx: ActionContext<UserState, RootState>, pushToken: string) {
    const loading = await createLoading();
    loading.present();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(
        provider.setCustomParameters({
          prompt: 'select_account',
        }),
      )
      .then(async () => {
        const idToken = await firebase.auth().currentUser?.getIdToken();
        const refreshToken = await firebase.auth().currentUser?.refreshToken;

        await ctx.dispatch('getCallback', {
          idToken,
          pushToken,
          refreshToken,
        });

        router.push('/stores');
        loading.dismiss();
        vuexStore.dispatch('ui/showToast', {
          message: 'You have successfully logged in.',
        });
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.email;
        // const credential = error.credential;
        console.log(errorMessage);
        loading.dismiss();
        vuexStore.dispatch('ui/showToast', {
          message: 'Unauthorized Login!',
        });
      });
  },

  async getUserToken(ctx: ActionContext<UserState, RootState>) {
    const user = store.get('companion_app_user');
    const userTokens = store.get('companion_app_user_tokens');
    if (userTokens) {
      ctx.commit('setUserDetail', user);
      ctx.commit('setUserTokens', userTokens);
      ctx.commit('setAuthenticated', true);
      window.apiClient.setAuthenticationHeader();
    }
  },

  async logout(ctx: ActionContext<UserState, RootState>) {
    const loading = await createLoading();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('successful logout');

        store.remove('companion_app_user');
        store.remove('companion_app_user_tokens');
        ctx.commit('setUserDetail', {});
        ctx.commit('setUserTokens', {
          idToken: null,
          refreshToken: null,
        });
        ctx.commit('setAuthenticated', false);
        window.apiClient.removeAuthenticationHeader();

        router.push('/login');
        loading.dismiss();
      })
      .catch(() => {
        loading.dismiss();
        vuexStore.dispatch('ui/showToast', {
          message: 'Logout Fail!',
        });
      });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
