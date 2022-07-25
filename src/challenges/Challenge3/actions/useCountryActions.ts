export const useCountryActions = () => {
  const list = () => ({ type: "COUNTRY:LIST" });

  return {
    list,
  };
};
