import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SizeGuideModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
        >
          <motion.div 
            initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
            className="bg-white rounded-3xl p-8 max-w-lg w-full relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2"><X /></button>
            <h2 className="text-2xl font-serif mb-6">Size Guide</h2>
            <table className="w-full text-left">
              <thead><tr className="border-b"><th>Size</th><th>Bust (cm)</th><th>Waist (cm)</th></tr></thead>
              <tbody>
                <tr><td>S</td><td>80-85</td><td>60-65</td></tr>
                <tr><td>M</td><td>85-90</td><td>65-70</td></tr>
                <tr><td>L</td><td>90-95</td><td>70-75</td></tr>
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
