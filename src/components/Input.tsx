import { InputProp } from "../types";

export default function Input({ value, handleChange }: InputProp) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="input"
        placeholder="Enter access token"
      />
    </div>
  );
}
