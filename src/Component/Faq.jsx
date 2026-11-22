import React,{useEffect} from 'react'

function Faq() {

  useEffect(() => {

    const qs = document.querySelectorAll(".q");

    function toggleQ(q) {

      const open = q.classList.toggle("open");

      q.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

      // Play sound only if Sound exists
      if (
        window.Sound &&
        typeof window.Sound.play === "function"
      ) {
        window.Sound.play(open ? "openq" : "closeq");
      }
    }

    function handleClick(e) {
      toggleQ(e.currentTarget);
    }

    function handleKeyDown(e) {

      if (e.key === "Enter" || e.key === " ") {

        e.preventDefault();

        toggleQ(e.currentTarget);
      }
    }

    qs.forEach((el) => {

      el.addEventListener("click", handleClick);
      el.addEventListener("keydown", handleKeyDown);

      // Set initial accessibility state
      el.setAttribute(
        "aria-expanded",
        el.classList.contains("open") ? "true" : "false"
      );

    });

    // React cleanup
    return () => {

      qs.forEach((el) => {

        el.removeEventListener("click", handleClick);
        el.removeEventListener("keydown", handleKeyDown);

      });

    };

  }, []);

  return (
    <>
    
                <section className="pad" id="faq">
                <div className="shell center">
                    <span className="eyebrow rv">Questions</span>
                    <h2 className="h2 rv">Asked often enough to put here.</h2>
                </div>
                <div className="shell">
                    <div className="faq">
                        <div className="q rv" role="button" tabindex="0" aria-expanded="false">
                            <div className="qh">
                                <h3>Can I bring in the feedback I already have?</h3>
                                <span className="plus"></span>
                            </div>
                            <div className="qb">
                                <div>
                                    <p>Yes. Upload a CSV or connect a tool and Celadon reads the full history, not only what arrives from today. Most teams import a few years on the first afternoon.</p>
                                </div>
                            </div>
                        </div>
                        <div className="q rv" role="button" tabindex="0" aria-expanded="false">
                            <div className="qh">
                                <h3>How accurate is the automatic theming?</h3>
                                <span className="plus"></span>
                            </div>
                            <div className="qb">
                                <div>
                                    <p>Around 94 percent of items land in a theme without anyone touching them. The rest sit in a review queue, and every grouping can be split, merged or renamed by hand.</p>
                                </div>
                            </div>
                        </div>
                        <div className="q rv" role="button" tabindex="0" aria-expanded="false">
                            <div className="qh">
                                <h3>Does it write to my issue tracker?</h3>
                                <span className="plus"></span>
                            </div>
                            <div className="qb">
                                <div>
                                    <p>It does. Push a theme to Linear or Jira and the issue carries the summary and a link back. When the issue closes, Celadon marks the theme shipped and queues the replies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="q rv" role="button" tabindex="0" aria-expanded="false">
                            <div className="qh">
                                <h3>What happens when the trial ends?</h3>
                                <span className="plus"></span>
                            </div>
                            <div className="qb">
                                <div>
                                    <p>The workspace goes read only. Nothing is deleted, and you can export everything as CSV or JSON at any point, including after you leave.</p>
                                </div>
                            </div>
                        </div>
                        <div className="q rv" role="button" tabindex="0" aria-expanded="false">
                            <div className="qh">
                                <h3>Is customer data used to train models?</h3>
                                <span className="plus"></span>
                            </div>
                            <div className="qb">
                                <div>
                                    <p>No. Your feedback is processed to build your themes and nothing else. Data stays in the region you pick at setup, and the Scale plan adds an audit log of every read.</p>
                                </div>
                            </div>
                        </div>
                        <div className="q rv" role="button" tabindex="0" aria-expanded="false">
                            <div className="qh">
                                <h3>We are two people. Is this too much tool?</h3>
                                <span className="plus"></span>
                            </div>
                            <div className="qb">
                                <div>
                                    <p>Small teams get the most out of the loop closing, since there is nobody spare to chase old threads. Start on Solo and move up only when the item count says so.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default Faq