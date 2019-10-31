export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const FULLSCREEN = "FULLSCREEN";

export const openModal = (modal, id) => {
  return {
    type: OPEN_MODAL,
    modal,
    id: id
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const fullscreen = () => {
  return {
    type: FULLSCREEN
  };
};
