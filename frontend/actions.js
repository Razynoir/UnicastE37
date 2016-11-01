export const MODIFY_INVENTORY = "MODIFY_INVENTORY";
export const SWITCH_NODE = "SWITCH_NODE";

export const modifyInventoryWithSpecs = (spec) => ({
  type: MODIFY_INVENTORY,
  payload: spec
});

export const switchNode = (nextNode) => ({
  type: SWITCH_NODE,
  nextNode: nextNode
});
