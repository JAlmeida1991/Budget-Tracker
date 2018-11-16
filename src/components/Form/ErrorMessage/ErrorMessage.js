import React from "react";

const ErrorMessage = props => (
  <div className="alert alert-danger mt-3 d-flex justify-content-center">
    {props.message}
  </div>
);

export default ErrorMessage;
