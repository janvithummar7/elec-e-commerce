import AppRouter from "./Router";
import { UserProvider } from "./contexts/UserContext";


function App() {
  return (
    <UserProvider>
      <AppRouter />
    </UserProvider>
  )
}

export default App;
