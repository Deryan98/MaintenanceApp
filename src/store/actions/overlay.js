export const TOGGLE_OVERLAY = "TOGGLE_OVERLAY";

export const toggleOverlay = (visible) => {
  return { type: TOGGLE_OVERLAY, visible: visible };
};
