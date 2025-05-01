
import { ReactNode } from "react";

export interface SlideProps {
  title: string;
  subtitle?: string;
  content: ReactNode;
  background: string;
  icon?: string;
}
