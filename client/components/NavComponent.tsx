import { useNavigate } from 'react-router-dom';
import type { NavigateFunction } from 'react-router-dom';
import type { MouseEvent as SyntheticMouseEvent } from 'react';

interface NavProps {
  endpoint: string,
  name: string,
}

function NavButton({ endpoint, name }: NavProps) {
  const navigate: NavigateFunction = useNavigate();
  async function handleClick(event: SyntheticMouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    // Call our Redux-thunk async event here.
    navigate(`/${endpoint}`);
  }
  return (
    <button type="submit" onClick={handleClick}>{name}</button>
  );
}

export default NavButton;
