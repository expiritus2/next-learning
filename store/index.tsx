import { createContext, useContext } from 'react';
import { configure } from 'mobx';

import { AppState } from './app-state';

configure({ enforceActions: 'never' });

const store = {
    appState: new AppState(),
};

export const StoreContext = createContext(store);

export const useStore = () => useContext<typeof store>(StoreContext);

export default store;
