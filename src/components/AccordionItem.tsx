import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { AccordionItemProps } from '../types';

export function AccordionItem({ title, icon, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#edeae1] overflow-hidden mb-4 last:mb-0 transition-shadow hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#f4f1e8] text-[#1B3C35] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <span className="text-[#1B3C35] font-semibold text-lg">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-[#8B5A2B]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-6 pt-2 text-[#4a4a4a]">
              <div className="w-full h-px bg-[#f0eae0] mb-5"></div>
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
