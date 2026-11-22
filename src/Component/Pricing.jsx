import React,{useEffect} from 'react'
import Title from './Title';

function Pricing() {

useEffect(() => {

var sw = document.getElementById("switch");
    if (sw) {
        var prices = document.querySelectorAll(".price");
        var pers = document.querySelectorAll(".per");
        var totals = document.querySelectorAll(".plan .total");
        var plansEl = document.querySelector(".plans");
        var lblM = document.getElementById("lblM"),
            lblY = document.getElementById("lblY");

        function money(n) {
            return "$" + Number(n).toLocaleString();
        }

        function setYear(yearly) {
            Sound.play(yearly ? "onSw" : "offSw");
            sw.setAttribute("aria-checked", yearly ? "true" : "false");
            sw.setAttribute("aria-label", yearly ? "Switch to monthly billing" : "Switch to yearly billing");
            lblM.classList.toggle("on", !yearly);
            lblY.classList.toggle("on", yearly);
            if (plansEl) plansEl.classList.toggle("yearly", yearly);
            for (var i = 0; i < prices.length; i++) {
                prices[i].textContent = money(prices[i].getAttribute(yearly ? "data-y" : "data-m"));
            }
            for (var j = 0; j < pers.length; j++) {
                pers[j].textContent = yearly ? "per month, billed yearly" : "per month";
            }
            for (var k = 0; k < totals.length; k++) {
                var t = totals[k];
                if (yearly) {
                    var full = parseFloat(t.getAttribute("data-m")) * 12;
                    t.innerHTML = "<b>" + money(t.getAttribute("data-y")) + "</b> a year <span class=\"was\">" + money(full) + "</span>";
                } else {
                    t.textContent = "Billed monthly";
                }
            }
        }
        sw.addEventListener("click", function() {
            setYear(sw.getAttribute("aria-checked") !== "true");
        });
        sw.addEventListener("keydown", function(e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setYear(sw.getAttribute("aria-checked") !== "true");
            }
        });
    }

    }, []);

  return (
    <>
    
                <section className="pad" id="pricing">
                <div className="shell center">
                    <span className="eyebrow rv"><Title head='Pricing'/></span>
                    <h2 className="h2 rv"><Title title='Priced per workspace, not per seat.'/></h2>
                    <p className="lede rv d1"><Title subTitle='Invite everyone. Charging you for the teammate who reads once a month never made sense.'/></p>
                    <div className="toggle rv d1">
                        <span className="lbl on" id="lblM">Monthly</span>
                        <div className="switch"
                             id="switch"
                             role="switch"
                             tabindex="0"
                             aria-checked="false"
                             aria-label="Switch to yearly billing">
                            <span className="knob"></span>
                        </div>
                        <span className="lbl" id="lblY">Yearly</span>
                        <span className="save">Save 30%</span>
                    </div>
                </div>
                <div className="shell">
                    <div className="plans">
                        <article className="plan rv">
                            <span className="tag">Solo</span>
                            <div className="cost"><b className="price" data-m="30" data-y="21">$30</b><span className="per">per month</span></div>
                            <p className="total" data-m="30" data-y="252">Billed monthly</p>
                            <p className="desc">For one person keeping track of everything on their own.</p>
                            <a className="btn wide" href="#start">Start free trial</a>
                            <ul className="feat">
                                <li><i></i>Three channels connected</li>
                                <li><i></i>Up to 500 feedback items a month</li>
                                <li><i></i>Automatic theming</li>
                                <li><i></i>Email support</li>
                            </ul>
                        </article>
                        <article className="plan hot rv d1">
                            <span className="tag">Team, most picked</span>
                            <div className="cost"><b className="price" data-m="80" data-y="56">$80</b><span className="per">per month</span></div>
                            <p className="total" data-m="80" data-y="672">Billed monthly</p>
                            <p className="desc">For a product team that needs the roadmap to trace back to real people.</p>
                            <a className="btn solid wide" href="#start">Start free trial</a>
                            <ul className="feat">
                                <li><i></i>Unlimited channels and seats</li>
                                <li><i></i>Up to 8,000 feedback items a month</li>
                                <li><i></i>Revenue weighting</li>
                                <li><i></i>Two-way sync with Linear and Jira</li>
                                <li><i></i>Loop closing from any channel</li>
                            </ul>
                        </article>
                        <article className="plan rv d2">
                            <span className="tag">Scale</span>
                            <div className="cost"><b className="price" data-m="160" data-y="112">$160</b><span className="per">per month</span></div>
                            <p className="total" data-m="160" data-y="1344">Billed monthly</p>
                            <p className="desc">For several teams sharing one feedback pool without stepping on each other.</p>
                            <a className="btn wide" href="#start">Talk to us</a>
                            <ul className="feat">
                                <li><i></i>Everything in Team</li>
                                <li><i></i>Unlimited feedback items</li>
                                <li><i></i>Separate boards per team</li>
                                <li><i></i>SSO and audit log</li>
                                <li><i></i>Shared Slack channel with us</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Pricing