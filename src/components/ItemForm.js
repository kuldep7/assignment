import React from "react";

const ItemForm = ({ label, children, type = "text", ...otherProps }) => (
  <div>
  {type === "text" ? (
    <>
    <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
    <input  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type={type} {...otherProps} />
    </>
    ) : (
    <>
    <label />
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type={type} {...otherProps} />
    {label}
    </>
    )}
    </div>
    );

  export default ItemForm;
