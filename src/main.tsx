import { createRoot } from 'react-dom/client';
import { App } from '@components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/root.ts';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <Suspense>
        <App />
      </Suspense>
    </Provider>
  </Router>,
);
