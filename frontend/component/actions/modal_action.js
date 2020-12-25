
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (info) => ({
  type: OPEN_MODAL,
  info,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
