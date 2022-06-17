import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import i18n from 'i18next'
import {initReactI18next} from "react-i18next";
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import i18nextHttpBackend from 'i18next-http-backend';

// redux
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";
// import {composeWithDevTools} from "redux-devtools-extension";

// custom imports

i18n
    .use(initReactI18next)
    .use(i18nextBrowserLanguageDetector)
    .use(i18nextHttpBackend)
    .init({
        supportedLngs: ['en', 'am', 'ru'],
        fallbackLng: 'en',
        detection: {
            order: ['cookie'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    })

const store = createStore(rootReducer,compose(
    applyMiddleware(thunk)
))

ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
              <Suspense fallback={true}>
              <App />
              </Suspense>
          </BrowserRouter>
      </Provider>,
  document.getElementById("root")
);