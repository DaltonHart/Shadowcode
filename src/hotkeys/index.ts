import { toggleCommandPalletView } from "./commandPallet";

export default e => {
  console.log(e);

  if ((e.metaKey || e.ctrlKey) && e.code === "KeyP") {
    e.preventDefault();
    toggleCommandPalletView();
  }

  if (e.code === "Escape") {
    toggleCommandPalletView(false);
  }
};
