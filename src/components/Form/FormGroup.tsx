import { ReactNode } from "react";

interface IFormGroupProps {
  children: ReactNode;
}

export const FormGroup = ({ children }: IFormGroupProps) => {
  return <div className="md:flex md:items-center mb-2">{children}</div>;
};
