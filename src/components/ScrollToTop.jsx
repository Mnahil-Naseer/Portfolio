import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash (anchor), try to scroll that element into view.
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Use smooth scroll; CSS `scroll-margin-top` handles fixed header offset.
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // fallback to top if element not found
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }

    // Default: scroll to top on pathname change
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
