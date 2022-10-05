import { toggleCommandPalletView } from "./commandPallet";

export default e => {
  console.log(e);

  if ((e.metaKey || e.ctrlKey) && e.code === "KeyP") {
    toggleCommandPalletView();
  }
};
