import { HopeProvider, HopeThemeConfig } from "@hope-ui/solid";
import "./styles.scss";
import logo from "./assets/logo.svg";
import MenuC from "./menu";
import { X } from "lucide-solid";
import Dialog from "./components/dialog";
import Prompt from "./components/prompt";

function App() {
  return (
    <>
      <HopeProvider>
        <nav data-tauri-drag-region>
          <div id="l" data-tauri-drag-region>
            <div class="logo">
              <img src={logo} class="logoimg" />
              <span>Astrin</span>
            </div>
            <div class="divider"></div>
            <div class="menubar" data-tauri-drag-region>
              <MenuC />
            </div>
            <div class="controls">
              <button>
                <X />
              </button>
            </div>
          </div>
        </nav>
        <h1>hELLO </h1>
      </HopeProvider>
    </>
  );
}

export default App;
