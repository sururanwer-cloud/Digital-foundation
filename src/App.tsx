import AppRouter from "./router/AppRouter";
import { ContactModalProvider } from "./context/ContactModalContext";
import ContactModal from "./components/ContactModal/ContactModal";
import { BookCallModalProvider } from "./context/BookCallModalContext";
import BookCallModal from "./components/BookCallModal/BookCallModal";

function App() {
  return (
    <ContactModalProvider>
      <BookCallModalProvider>
        <AppRouter />
        <ContactModal />
        <BookCallModal />
      </BookCallModalProvider>
    </ContactModalProvider>
  );
}

export default App;