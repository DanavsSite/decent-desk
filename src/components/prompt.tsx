import { JSXElement } from "solid-js";
import "../styles/prompt.scss";
export default function Prompt({ children }: { children: JSXElement }) {
  return (
    <>
      <div class="backdrop">
        <div class="content">{children}</div>
      </div>
    </>
  );
}
