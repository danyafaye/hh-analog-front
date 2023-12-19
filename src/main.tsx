import { createRoot } from 'react-dom/client';
import { App } from '@components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@store/root.ts';
import { VacanciesProvider } from '@src/providers/VacanciesProvider';

createRoot(document.getElementById('root')!).render(
  <Router>
    <Provider store={store}>
      <VacanciesProvider>
        <Suspense>
          <App />
        </Suspense>
      </VacanciesProvider>
    </Provider>
  </Router>,
);
