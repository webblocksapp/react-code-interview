export const useUserActions = () => {
  const list = () => ({ type: "USER:LIST" });

  const update = (payload) => ({ type: "USER:UPDATE", payload });

  return {
    list,
    update,
  };
};
