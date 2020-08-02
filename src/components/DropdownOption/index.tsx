import React from 'react';

interface iDropdown {
  name: string;
  content: object;
}

const DropdownOption: React.FC<iDropdown> = ({
  name,
  content
}: iDropdown) => {
  return (
    <button className="dropdown-option">{ name }</button>
  )
}

export default DropdownOption
