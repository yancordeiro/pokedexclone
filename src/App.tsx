import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";

interface AppProps {}

const queryClient = new QueryClient();

const App: React.FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
