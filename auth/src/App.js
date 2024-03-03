import './App.css';
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
      <AuthProvider>
        <MainRoutes/>
      </AuthProvider>
  );
}

export default App;
