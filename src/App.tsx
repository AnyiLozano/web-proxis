import React, { FC } from "react";
import { PersistGate } from "redux-persist/integration/react";
import useStore from "config/redux";
import { Provider } from "react-redux";
import useRouter from "routes";
import { CssBaseline } from "@mui/material";

const App: FC = (): JSX.Element => {
  // Store
  const { store, persistor } = useStore();

  // Router
  const Router = useRouter();

  return (
    <React.Fragment>
      <React.Suspense fallback={<p>...Cargando</p>}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={false}>
            <CssBaseline />
            {Router}
          </PersistGate>
        </Provider>
      </React.Suspense>
    </React.Fragment>
  );
};

export default App;
