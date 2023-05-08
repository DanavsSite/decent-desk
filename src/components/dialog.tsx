import { ComponentProps } from "solid-js";

type dialogProps = ComponentProps<"dialog">;

interface Props extends dialogProps {}

export default function Dialog(props: dialogProps) {
  return (
    <dialog class={"modal " + props.class} ref={props.ref}>
      Hello world
    </dialog>
  );
}
