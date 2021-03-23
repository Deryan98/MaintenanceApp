export const TOGGLE_ACCESS = "TOGGLE_ACCESS";

export const toggleAccess = (currentAccess) => {
  return { type: TOGGLE_ACCESS, access: currentAccess };
};
