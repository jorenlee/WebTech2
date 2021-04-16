import { createStore, Store } from 'vuex';

import user from './user.module';
import ui from './ui.module';

export default createStore({
     modules: {
          user,
          ui,
     },
}) as Store<any>;