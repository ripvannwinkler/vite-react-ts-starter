import "./style/main.scss";
import { createRoot } from "react-dom/client";

const App = () => <div>Hello world!</div>;
const root = document.getElementById("root")!;
createRoot(root).render(<App />);
