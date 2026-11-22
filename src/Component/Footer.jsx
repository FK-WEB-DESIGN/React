import React,{useEffect} from 'react'

function Footer() {
useEffect(() => {

    const up = document.getElementById("up");

    // Check reduced motion preference
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!up) return;

    function handleScrollTop() {

      window.scrollTo({
        top: 0,
        behavior: reduce ? "auto" : "smooth"
      });

    }

    up.addEventListener("click", handleScrollTop);

    // Cleanup
    return () => {
      up.removeEventListener("click", handleScrollTop);
    };

  }, []);

  return (
    <>
    
            <footer className="foot">
            <div className="shell">
                <div className="footbar">
                    <p>&copy; 2026 Celadon. A free HTML template.</p>
                    <p>Design by <a rel="nofollow noopener" href="#">TemplateMo</a> <a rel="nofollow noopener"
    href="#">Tooplate</a></p>
                </div>
            </div>
        </footer>
<button className="up" id="up" aria-label="Back to top">
            <svg viewBox="0 0 24 24">
                <path d="M12 19V6M6 12l6-6 6 6" />
            </svg>
</button>
    </>
  )
}

export default Footer