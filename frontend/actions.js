export const MODIFY_INVENTORY = "MODIFY_INVENTORY";

export const modifyInventoryWithSpecs = (spec) => ({
  type: MODIFY_INVENTORY,
  payload: spec
});
