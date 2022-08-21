export interface InputProp {
	value: string;
	handleChange(event: React.FormEvent<HTMLInputElement>): void;
  }

  export interface HeaderProp {
	children: React.ReactNode;
  }

  export interface CommitItemProp {
	message: string
	date: string
	author: string
  }
  export interface ButtonProp {
	title: string;
	handleClick: () => void;
	className: string;
  }