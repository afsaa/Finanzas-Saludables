import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import * as serviceWorker from "./serviceWorker";

const initialState = {
  users: [{ email: "andressaa.dev@gmail.com", password: "andressaa94" }],
  loggedInUser: {},
  posts: [
    {
      id: 1,
      title: "Las deudas te ahogan?",
      subtitle: `Los intereses que pagas en tus deudas cuentan y te pueden
                perjudicar.`,
      imgSrc:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      imgAlt: "Person Drowning",
    },
    {
      id: 2,
      title: "Aprende a crear tu presupuesto",
      subtitle: `Determina en que estas gastando tu dinero y que cantidad.`,
      imgSrc:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      imgAlt: "Budgeting",
    },
    {
      id: 3,
      title: "Desarrolla el habito de ahorrar",
      subtitle: `Ya sea para obtener lo que quieres o para alcanzar tus metas.`,
      imgSrc:
        "https://images.unsplash.com/photo-1567427013953-88102117053a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      imgAlt: "Saving",
    },
    {
      id: 4,
      title: "Invierte como debe ser",
      subtitle: `La mayoría de personas deberían invertir siempre a largo plazo
                        y de manera consistente.`,
      imgSrc:
        "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      imgAlt: "Investing",
    },
  ],
};

const store = configureStore({
  reducer: reducer,
  preloadedState: initialState,
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
