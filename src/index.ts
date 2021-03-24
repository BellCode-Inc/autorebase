import {
  createApplicationFunction,
  requireWriteAccessForOneTimeRebase,
} from "./app";

const nopHandler = () => Promise.resolve();

export = createApplicationFunction({
  canRebaseOneTime: requireWriteAccessForOneTimeRebase,
  handleAction: nopHandler,
  handleEvent: nopHandler,
  label: "autorebase",
})
