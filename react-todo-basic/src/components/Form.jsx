import React from 'react';
import '../assets/stylesheets/css/Form.css';

const Form = ({ value, onChange, onCreate }) => {
  return (
    <form className="form">
      <input name="input" value={value} onChange={onChange} />
      <button className="create-button" onClick={onCreate}>
        추가
      </button>
    </form>
  );
};

export default Form;
