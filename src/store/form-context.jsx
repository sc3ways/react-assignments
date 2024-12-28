import { createContext, useReducer } from "react";

export const FormAppContext = createContext({
  formItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const formAppReducer = (currentItems, action) => {
  let newItemLists = currentItems;
  if (action.type === "ADDITEM") {
    newItemLists = [action.payload, ...currentItems];
  }
  if (action.type === "DELETEITEM") {
    newItemLists = currentItems.filter((item) => item.id !== action.payload.id);
  }
  return newItemLists;
};

const FormAppContextProvider = ({ children }) => {
  const [formItems, dispatchFormItems] = useReducer(
    formAppReducer,
    DEFAULT_DATA
  );
  const addNewItem = (firstName, lastName, email, phone, designation) => {
    dispatchFormItems({
      type: "ADDITEM",
      payload: {
        id: Date.now(),
        firstName,
        lastName,
        email,
        phone,
        designation,
      },
    });
  };
  const deleteItem = (id) => {
    dispatchFormItems({
      type: "DELETEITEM",
      payload: {
        id,
      },
    });
  };
  return (
    <FormAppContext.Provider value={{ formItems, addNewItem, deleteItem }}>
      {children}
    </FormAppContext.Provider>
  );
};

const DEFAULT_DATA = [
  {
    id: "0001",
    firstName: "Sunil",
    lastName: "Choudhary",
    email: "sc4web@gmail.com",
    phone: "9876543210",
    gender: "Male",
    designation: "Professional",
  },
  {
    id: "0002",
    firstName: "Deepak",
    lastName: "Verma",
    email: "deepak.verma@gmail.com",
    phone: "8967543218",
    gender: "Male",
    designation: "Professional",
  },
];
export default FormAppContextProvider;
