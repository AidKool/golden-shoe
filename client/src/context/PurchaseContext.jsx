import React, { createContext, useContext, useState } from 'react';

const PurchaseContext = createContext();
export const usePurchaseContext = () => useContext(PurchaseContext);

const PurchaseProvider = (props) => {
  const [valid, setValid] = useState(true);

  return (
    <PurchaseContext.Provider
      value={{ valid: valid, setValid: setValid }}
      {...props}
    />
  );
};

export default PurchaseProvider;
