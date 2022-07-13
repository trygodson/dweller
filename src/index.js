import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import Main from './Entryfile/Main';
import './index.css';
import { AuthProvider } from './shared/context/useAuthContext';
import Modal from 'react-modal';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});
Modal.setAppElement('#root');

ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Main />
      </AuthProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>,

  document.getElementById('root'),
);
