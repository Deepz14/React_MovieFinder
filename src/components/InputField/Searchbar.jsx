import React from 'react'
import './style.css';

export const Searchbar = ({handleChange, handleSubmit, value}) => {
    return (
      <form className="p-4 text-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inp-field p-2"
          placeholder="Search Movie"
          value={value}
          onChange={handleChange}
        />
      </form>
    );
}
