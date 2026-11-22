import React,{useEffect} from 'react'

function States() {

useEffect(() => {

    const nums = document.querySelectorAll(".stat b");

    // Check user's reduced motion preference
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observers = [];
    const animationFrames = new Map();

    function runNum(el) {

      const to = parseFloat(el.getAttribute("data-to"));
      const sfx = el.getAttribute("data-suffix") || "";

      if (isNaN(to)) return;

      // Display final value if reduced motion is enabled
      if (reduce) {
        el.textContent = to.toLocaleString() + sfx;
        return;
      }

      const t0 = performance.now();
      const dur = 1200;

      function tick(now) {

        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3);

        el.textContent =
          Math.round(to * e).toLocaleString() + sfx;

        if (p < 1) {
          const frame = requestAnimationFrame(tick);
          animationFrames.set(el, frame);
        }
      }

      const frame = requestAnimationFrame(tick);
      animationFrames.set(el, frame);
    }

    if ("IntersectionObserver" in window) {

      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              runNum(entry.target);

              observer.unobserve(entry.target);
            }

          });

        },
        {
          threshold: 0.5
        }
      );

      nums.forEach((num) => observer.observe(num));

      observers.push(observer);

    } else {

      nums.forEach((num) => runNum(num));

    }

    // Cleanup
    return () => {

      observers.forEach((observer) => observer.disconnect());

      animationFrames.forEach((frame) => {
        cancelAnimationFrame(frame);
      });

    };

  }, []);
    
  return (
    <>
    
                <section className="pad-s">
                <div className="shell">
                    <div className="statplate rv">
                        <div className="stat"><b data-to="94" data-suffix="%">0%</b><span>of new feedback themed without a human</span></div>
                        <div className="stat"><b data-to="6" data-suffix=" min">0 min</b><span>from first connection to first theme</span></div>
                        <div className="stat"><b data-to="1800" data-suffix="+">0+</b><span>product teams shaping feedback here</span></div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default States