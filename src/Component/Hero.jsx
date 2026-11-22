// import React,{useEffect} from 'react'
import React from 'react'
import Title from './Title'
function Hero() {

// useEffect(() => {

// var stage = document.querySelector(".stage");
//     if (stage && !reduce && window.matchMedia("(min-width:721px)").matches) {
//         var layers = stage.querySelectorAll("[data-depth]");
//         var tx = 0,
//             ty = 0,
//             cx = 0,
//             cy = 0,
//             hRaf = null;
//         var pump = function() {
//             cx += (tx - cx) * 0.07;
//             cy += (ty - cy) * 0.07;
//             for (var i = 0; i < layers.length; i++) {
//                 var d = parseFloat(layers[i].getAttribute("data-depth"));
//                 if (isNaN(d)) d = 0;
//                 var base = layers[i].classList.contains("core") ? "translate(-50%,-50%) " : "";
//                 layers[i].style.transform = base + "translate3d(" + (cx * d).toFixed(2) + "px," + (cy * d).toFixed(2) + "px,0)";
//             }
//             if (Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02) {
//                 hRaf = requestAnimationFrame(pump);
//             } else {
//                 hRaf = null;
//             }
//         };
//         window.addEventListener("pointermove", function(e) {
//             var r = stage.getBoundingClientRect();
//             tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 2;
//             ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * 2;
//             if (hRaf === null) hRaf = requestAnimationFrame(pump);
//         }, {
//             passive: true
//         });
//     }

//     }, []);

  return (

    <>
                <section className="hero">
                <div className="shell">
                    <span className="pill rv"><b>New</b> Two-way sync with Linear</span>
                    <Title className="rv d1" title='Feedback, finally shaped.'/>
                    <p className="sub rv d2"><Title  subTitle='Celadon pulls customer feedback out of every channel it hides in and groups it into the handful of themes your team can actually act on.'/></p>
                    <div className="acts rv d3">
                        <a className="btn solid" href="#start">Start free trial</a>
                        <a className="btn" href="#how">See how it works</a>
                    </div>
                    <p className="note rv d3">Free for 14 days. No card needed.</p>
                    <div className="stage rv d3" aria-hidden="true">
                        <div className="slab s1" data-depth="14">
                            <span className="src"><i className="dot" style={{"background":"var(--sky)"}}></i>Zendesk</span>
                            <p>"Any chance of a CSV export on the reports page?"</p>
                        </div>
                        <div className="slab s2" data-depth="-18">
                            <span className="src"><i className="dot" style={{"background":"var(--coral)"}}></i>Sales call</span>
                            <p>"They will not sign without letting finance pull the raw numbers."</p>
                        </div>
                        <div className="slab s3" data-depth="-11">
                            <span className="src"><i className="dot" style={{"background":"var(--jade)"}}></i>Slack</span>
                            <p>"Third customer this week asking to get the data out."</p>
                        </div>
                        <div className="slab s4" data-depth="16">
                            <span className="src"><i className="dot" style={{"background":"#F0C980"}}></i>App review</span>
                            <p>"Great app, but my data feels stuck inside it."</p>
                        </div>
                        <div className="core" data-depth="7">
                            <span className="lab">Theme</span>
                            <h3>Get data out of Celadon</h3>
                            <div className="meter">
                                <i></i>
                            </div>
                            <div className="row"><span>Requests</span><b>218</b></div>
                            <div className="row"><span>Accounts affected</span><b>34</b></div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Hero