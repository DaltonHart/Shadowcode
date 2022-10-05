import { commandPalletViewState } from "../recoil/ui_states";
import { getRecoil, setRecoil } from "recoil-nexus";

export const toggleCommandPalletView = () => {
  const visible = getRecoil(commandPalletViewState);
  setRecoil(commandPalletViewState, !visible);
};
