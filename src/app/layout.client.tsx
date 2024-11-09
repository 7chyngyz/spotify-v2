import { FC, ReactNode } from "react";
import ReduxProvider from "@/providers/ReduxProvider";
import LayoutSite from "@/components/layout/LayoutSite";

interface LayoutClientProps {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientProps> = ({ children }) => {
  return (
    <ReduxProvider>
      <LayoutSite>{children}</LayoutSite>
    </ReduxProvider>
  );
};

export default LayoutClient;
