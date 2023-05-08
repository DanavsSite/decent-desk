import {
  Button,
  Divider,
  HopeProvider,
  HopeThemeConfig,
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem as Mi,
  MenuLabel,
  MenuTrigger,
  Kbd,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  createDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  SelectTrigger,
  SelectPlaceholder,
  SelectIcon,
  SelectValue,
  SelectContent,
  SelectOptionText,
  SelectOptionIndicator,
  SelectOption,
  SelectListbox,
} from "@hope-ui/solid";
import { register } from "@tauri-apps/api/globalShortcut";
import { Command, File, Plus } from "lucide-solid";
import {
  ComponentProps,
  For,
  JSXElement,
  createEffect,
  createSignal,
} from "solid-js";
import Prompt from "./components/prompt";

interface MiProps extends ComponentProps<typeof Mi> {
  children: JSXElement;
  end?: JSXElement;
}

function MenuItem(props: MiProps) {
  return (
    <Mi class="menuitem" {...props}>
      <span>{props.children}</span>
      <span class="end">{props.end}</span>
    </Mi>
  );
}

export default function MenuC() {
  const { isOpen, onOpen, onClose } = createDisclosure();
  createEffect(async () => {
    await register("CommandOrControl+N", () => {
      onOpen();
    });
  });
  return (
    <>
      <Menu>
        <MenuTrigger as={Button} class="menutrig">
          File
        </MenuTrigger>
        <MenuContent class="menucontent">
          <MenuGroup>
            <MenuLabel>File</MenuLabel>
            <MenuItem
              onSelect={() => {
                onOpen();
              }}
              command="⌘+N"
            >
              <Plus size={17} /> New Project
            </MenuItem>
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <Divider role="presentation" my="$1" />
          <MenuGroup>
            <MenuLabel>Help</MenuLabel>
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
        </MenuContent>
      </Menu>
      <Modal
        class="modal"
        centered
        opened={isOpen()}
        onClose={onClose}
        initialFocus="#firstname"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <FormControl id="firstname" mb="$4">
              <FormLabel>Name</FormLabel>
              <Input placeholder="MyCoolWebsite" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} class="mr-5">
              <Plus class="mr-1" />
              Create
            </Button>
            <Button variant={"ghost"} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
