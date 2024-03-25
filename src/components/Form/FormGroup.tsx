import { ReactNode } from "react";

interface IFormGroupProps {
  children: ReactNode;
}

export const FormGroup = ({ children }: IFormGroupProps) => {
  return <div className="md:flex flex-col md:items-start mb-5 relative">{children}</div>;
};
