import { Router } from "./Providers/";
import { StoreProvider } from "./Providers";
import "./styles/index.css";

export const App = () => {
  return (
    <StoreProvider>
      <Router></Router>
    </StoreProvider>
  );
};
