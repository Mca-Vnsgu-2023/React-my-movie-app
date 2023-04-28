import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <MainRoutes />
      </Provider>
    </div>
  );
}

export default App;
