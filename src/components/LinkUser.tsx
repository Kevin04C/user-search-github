import { ReactComponentElement, ReactElement, ReactNode } from "react";

interface Props {
  link: null | undefined | string;
  children: ReactNode;
  icon: ReactElement;
}

export const LinkUser = ({ link, children, icon }: Props) => {
  return (
    <li className={`user-social-network ${!link && 'disable'}`}>
      {icon}
      {!link ? "not available" : children}
    </li>
  );
};
