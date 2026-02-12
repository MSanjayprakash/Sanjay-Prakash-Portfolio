import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-[0_0_20px_rgba(32,178,166,0.4)] hover:scale-110 transition-all"

      >
        <ArrowUp size={20} />
      </button>
    )
  );
};
