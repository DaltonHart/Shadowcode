import { commandPalletViewState } from "../recoil/ui_states";
import { getRecoil, setRecoil } from "recoil-nexus";

export const toggleCommandPalletView = (value: boolean): void => {
  const visible = getRecoil(commandPalletViewState);
  if (value === false) {
    return setRecoil(commandPalletViewState, value);
  }
  setRecoil(commandPalletViewState, !visible);
};
