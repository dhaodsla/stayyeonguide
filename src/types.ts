import { ReactNode } from 'react';

export interface AccordionItemProps {
  id: string;
  title: string;
  icon: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}
