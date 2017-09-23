// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import type { Store } from 'redux';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import Router from './router';
import createStore from './store/create-store';
import localeData from './locales/data.json';
import autobind from './utils/autobind';

// styles
import './styles/core.css';

import type {
  State,
  Action,
} from './types';

addLocaleData([...en, ...es]);

const language = (navigator.languages && navigator.languages[0]) || navigator.language;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const messages = localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.en ||
  localeData.es;

type Props = {};

type ContainerState = {
  storeReady: boolean,
};

export default class AppContainer extends Component {
  props: Props;
  state: ContainerState;
  locale: string; // eslint-disable-line react/sort-comp
  store: any;
  persistor: any;

  constructor(props: Props, context: {}) {
    super(props, context);
    autobind(this);

    this.state = {
      storeReady: false,
    };

    // ========================================================
    // Store Instantiation
    // ========================================================
    const initialState = window.__INITIAL_STATE__;
    const reduxItems = createStore(initialState, () => {
      this.setState({ storeReady: true });
    });

    this.store = reduxItems.store;
    this.persistor = reduxItems.persistor;
  }

  render() {
    const { storeReady } = this.state;

    if (!storeReady) {
      return null;
    }

    return (
      <Provider store={this.store} persistor={this.persistor}>
        <IntlProvider locale={language} messages={messages}>
          <Router />
        </IntlProvider>
      </Provider>
    );
  }
}
