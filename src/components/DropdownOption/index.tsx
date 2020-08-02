import React from 'react';

interface IDropdown {
  name: string;
  content: object;
}

const DropdownOption: React.FC<IDropdown> = ({
  name,
  content
}: IDropdown) => {
  return (
    <button className="dropdown-option">{ name }</button>
  )
}

export default DropdownOption
