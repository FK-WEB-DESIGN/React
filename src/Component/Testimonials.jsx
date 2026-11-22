import React,{useEffect} from 'react'
import Title from './Title';

function Testimonials() {

useEffect(() => {

    var view = document.getElementById("viewport");
    var lane = document.getElementById("lane");
    if (view && lane) {
        var cards = lane.children;
        var x = 0,
            minX = 0,
            vel = 0,
            snap = null,
            raf = null;
        var down = false,
            promoted = false,
            startX = 0,
            startPointer = 0,
            lastP = 0,
            lastT = 0,
            padL = 0;
        var idx = -1,
            blockUntil = 0;
        var prevB = document.getElementById("prev");
        var nextB = document.getElementById("next");
        var count = document.getElementById("count");

        function pad2(n) {
            return (n < 10 ? "0" : "") + n;
        }
        var lag = [],
            tfCache = [];
        for (var c = 0; c < cards.length; c++) {
            lag.push(0);
            tfCache.push("");
        }

        function physics() {
            if (reduce) return false;
            var moving = false;
            for (var i = 0; i < cards.length; i++) {
                var k = 0.155 - (i % 3) * 0.032;
                lag[i] += (vel - lag[i]) * k;
                if (Math.abs(lag[i]) > 0.03) moving = true;
                else lag[i] = 0;
                var rot = (-lag[i] * 0.115).toFixed(2);
                var dy = (Math.abs(lag[i]) * 0.3).toFixed(2);
                var t = "rotate(" + rot + "deg) translateY(" + dy + "px)";
                if (tfCache[i] !== t) {
                    cards[i].style.transform = t;
                    tfCache[i] = t;
                }
            }
            return moving;
        }

        function measure() {
            padL = parseFloat(getComputedStyle(lane).paddingLeft) || 0;
            minX = Math.min(0, view.clientWidth - lane.scrollWidth);
            if (x < minX) x = minX;
            if (x > 0) x = 0;
            draw();
        }

        function nearest() {
            var best = 0,
                bestD = Infinity;
            for (var i = 0; i < cards.length; i++) {
                var d = Math.abs(cards[i].offsetLeft + x - padL);
                if (d < bestD) {
                    bestD = d;
                    best = i;
                }
            }
            return best;
        }

        var lastGlide = 0;

        function draw() {
            lane.style.transform = "translate3d(" + x.toFixed(2) + "px,0,0)";
            var i = nearest();
            if (i !== idx) {
                if (idx !== -1) {
                    var now = Date.now();
                    if (now - lastGlide > 110) {
                        Sound.play("glide", i > idx ? 1 : -1);
                        lastGlide = now;
                    }
                }
                idx = i;
                count.textContent = pad2(i + 1) + " / " + pad2(cards.length);
            }
            prevB.disabled = x >= -1;
            nextB.disabled = x <= minX + 1;
        }

        function loop() {
            if (snap !== null) {
                x += (snap - x) * 0.16;
                if (Math.abs(snap - x) < 0.5) {
                    x = snap;
                    snap = null;
                }
            } else if (!down) {
                if (Math.abs(vel) > 0.1) {
                    x += vel;
                    vel *= 0.92;
                    if (x > 0) {
                        x = 0;
                        vel = 0;
                    }
                    if (x < minX) {
                        x = minX;
                        vel = 0;
                    }
                } else {
                    vel = 0;
                }
            }
            draw();
            var springing = physics();
            if (snap !== null || Math.abs(vel) > 0.1 || down || springing) {
                raf = requestAnimationFrame(loop);
            } else {
                raf = null;
            }
        }

        function kick() {
            if (raf === null) raf = requestAnimationFrame(loop);
        }

        function goTo(i) {
            i = Math.max(0, Math.min(cards.length - 1, i));
            snap = Math.max(minX, Math.min(0, -(cards[i].offsetLeft - padL)));
            kick();
        }
        prevB.addEventListener("click", function() {
            goTo(nearest() - 1);
        });
        nextB.addEventListener("click", function() {
            goTo(nearest() + 1);
        });

        view.addEventListener("pointerdown", function(e) {
            down = true;
            promoted = false;
            snap = null;
            vel = 0;
            startX = x;
            startPointer = e.clientX;
            lastP = e.clientX;
            lastT = performance.now();
        });
        view.addEventListener("pointermove", function(e) {
            if (!down) return;
            var travel = e.clientX - startPointer;
            if (!promoted) {
                if (Math.abs(travel) < 8) return;
                promoted = true;
                view.classList.add("dragging");
                try {
                    view.setPointerCapture(e.pointerId);
                } catch (err) {}
            }
            x = startX + travel;
            if (x > 0) x = x * 0.35;
            if (x < minX) x = minX + (x - minX) * 0.35;
            var now = performance.now(),
                dt = now - lastT;
            if (dt > 0) vel = (e.clientX - lastP) / dt * 15;
            lastP = e.clientX;
            lastT = now;
            kick();
        });

        function endDrag() {
            if (!down) return;
            down = false;
            if (promoted) {
                blockUntil = Date.now() + 240;
            }
            promoted = false;
            view.classList.remove("dragging");
            if (x > 0 || x < minX) {
                snap = x > 0 ? 0 : minX;
                vel = 0;
            }
            /* nudge the chain so the cards settle back through zero instead of stopping flat */
            if (!reduce) {
                for (var i = 0; i < lag.length; i++) {
                    lag[i] *= 1.35;
                }
            }
            kick();
        }
        view.addEventListener("pointerup", endDrag);
        view.addEventListener("pointercancel", endDrag);
        view.addEventListener("lostpointercapture", endDrag);
        window.addEventListener("pointerup", endDrag);
        window.addEventListener("blur", endDrag);
        view.addEventListener("dragstart", function(e) {
            e.preventDefault();
        });
        view.addEventListener("wheel", function() {
            snap = null;
        }, {
            passive: true
        });

        window.addEventListener("resize", measure);
        window.addEventListener("load", measure);
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(measure);
        }
        measure();
    }


    }, []);

  return (
    <>
    
                <section className="pad" id="stories">
                <div className="shell">
                    <div className="railhead">
                        <div>
                            <span className="eyebrow rv"><Title head='Customers'/></span>
                            <h2 className="h2 rv"><Title title='What changed after the spreadsheet went away.'/></h2>
                        </div>
                        <div className="railnav rv d1">
                            <button className="arw" id="prev" aria-label="Previous customer">
                                <svg viewBox="0 0 24 24">
                                    <path d="M15 5l-7 7 7 7" />
                                </svg>
                            </button>
                            <span className="count" id="count">01 / 06</span>
                            <button className="arw" id="next" aria-label="Next customer">
                                <svg viewBox="0 0 24 24">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="shell">
                    <div className="viewport" id="viewport">
                        <div className="lane" id="lane">
                            <article className="quote">
                                <div className="qtop"><span className="co"><i className="t-jade"></i>Northbeam</span><span className="result">11 themes on day one</span></div>
                                <blockquote>
                                    Four years of feedback sat in a spreadsheet nobody trusted. Celadon read it and gave us eleven themes. Two we had been arguing about for months.
                                </blockquote>
                                <div className="groove"></div>
                                <div className="who">
                                    <span className="face t-jade">RA</span>
                                    <div><b>Rosa Aldana</b><span>Head of Product</span></div>
                                </div>
                            </article>
                            <article className="quote tint">
                                <div className="qtop"><span className="co"><i className="t-sky"></i>Halyard</span><span className="result">Roadmap fight, 10 minutes</span></div>
                                <blockquote>
                                    The revenue weighting settled an argument we had been having all quarter. The feature we kept deferring was worth more than the three above it combined.
                                </blockquote>
                                <div className="groove"></div>
                                <div className="who">
                                    <span className="face t-sky">JM</span>
                                    <div><b>Jonah Merrick</b><span>VP Product</span></div>
                                </div>
                            </article>
                            <article className="quote">
                                <div className="qtop"><span className="co"><i className="t-coral"></i>Petrichor</span><span className="result">6 hrs a week back</span></div>
                                <blockquote>
                                    Support stopped forwarding me screenshots. Everything shows up already grouped, with the account name and the plan attached to it.
                                </blockquote>
                                <div className="groove"></div>
                                <div className="who">
                                    <span className="face t-coral">SO</span>
                                    <div><b>Sena Okafor</b><span>Product Lead</span></div>
                                </div>
                            </article>
                            <article className="quote">
                                <div className="qtop"><span className="co"><i className="t-jade"></i>Oxbow</span><span className="result">2,100 loops closed</span></div>
                                <blockquote>
                                    The loop closing is the part customers notice. People get a reply months after they asked, and they write back surprised that anyone remembered.
                                </blockquote>
                                <div className="groove"></div>
                                <div className="who">
                                    <span className="face t-jade">DK</span>
                                    <div><b>Dov Katsaros</b><span>Customer Success</span></div>
                                </div>
                            </article>
                            <article className="quote tint">
                                <div className="qtop"><span className="co"><i className="t-sky"></i>Studio Marrow</span><span className="result">Replaced three tools</span></div>
                                <blockquote>
                                    We are five people and I did not want another subscription. This one took out a spreadsheet, a Notion board and a weekly meeting, so it came out ahead.
                                </blockquote>
                                <div className="groove"></div>
                                <div className="who">
                                    <span className="face t-sky">MB</span>
                                    <div><b>Maren Bly</b><span>Founder</span></div>
                                </div>
                            </article>
                            <article className="quote">
                                <div className="qtop"><span className="co"><i className="t-coral"></i>Kelp</span><span className="result">Set up over one coffee</span></div>
                                <blockquote>
                                    I connected Zendesk and Slack, went to make a coffee, and came back to a themed list already waiting for me.
                                </blockquote>
                                <div className="groove"></div>
                                <div className="who">
                                    <span className="face t-coral">TF</span>
                                    <div><b>Tomas Ferreira</b><span>Director of Product</span></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default Testimonials