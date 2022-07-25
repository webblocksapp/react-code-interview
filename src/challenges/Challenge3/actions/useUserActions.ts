export const useUserActions = () => {
  const list = () => ({ type: "USER:LIST" });

  const create = (payload) => ({ type: "USER:CREATE", payload });

  const update = (payload) => ({ type: "USER:UPDATE", payload });

  const remove = (payload) => ({ type: "USER:REMOVE", payload });

  return {
    list,
    create,
    update,
    remove,
  };
};
