import { HeaderProp } from "../types";



export default function Header({ children }: HeaderProp) {
  return (
    <header className="header">
      <div className="header-inner">{children}</div>
    </header>
  );
}
