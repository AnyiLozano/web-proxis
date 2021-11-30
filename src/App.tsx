import React, {FC} from "react";
import {PersistGate} from "redux-persist/integration/react";
import useStore from "config/redux";
import {Provider} from "react-redux";

const App: FC = (): JSX.Element => {
    const {store, persistor} = useStore();

    return (
        <React.Fragment>
            <React.Suspense fallback={<p>...Cargando</p>}>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={false}>
                        <span>Ba ?</span>
                    </PersistGate>
                </Provider>
            </React.Suspense>
        </React.Fragment>
    );
}

export default App;