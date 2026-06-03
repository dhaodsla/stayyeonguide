import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { AccordionItemProps } from '../types';

export function AccordionItem({ title, icon, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white dark:bg-[#1E2E2A] rounded-2xl shadow-sm border border-[#edeae1] dark:border-[#2A3F39] overflow-hidden mb-4 last:mb-0 transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-[#1E2E2A] focus:outline-none transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#f4f1e8] dark:bg-[#2C3F3A] text-[#1B3C35] dark:text-[#9FE2C5] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <span className="text-[#1B3C35] dark:text-[#F4F1E8] font-semibold text-lg">{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-[#8B5A2B] dark:text-[#CFA47E]"
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="px-5 pb-6 pt-2 text-[#4a4a4a] dark:text-[#D4EADD]"
            >
              <div className="w-full h-px bg-[#f0eae0] dark:bg-[#2C3F3A] mb-5"></div>
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
