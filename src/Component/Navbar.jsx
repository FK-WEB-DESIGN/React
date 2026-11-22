import React,{useEffect} from 'react'

function Navbar() {
    useEffect(() => {

    var top = document.getElementById("top");
    var onScroll = function() {
        top.classList.toggle("stuck", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, {
        passive: true
    });
    onScroll();

    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    var scrim = document.getElementById("scrim");

   function setDrawer(open) {
        var was = drawer.classList.contains("on");
        drawer.classList.toggle("on", open);
        scrim.classList.toggle("on", open);
        document.body.classList.toggle("lock", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        if (open !== was) Sound.play(open ? "drop" : "slideClose");
    }
    burger.addEventListener("click", function() {
        setDrawer(!drawer.classList.contains("on"));
    });
    scrim.addEventListener("click", function() {
        setDrawer(false);
    });
    drawer.addEventListener("click", function(e) {
        if (e.target.closest("a")) setDrawer(false);
    });
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") setDrawer(false);
    });

    }, []);
  return (
    <>
            <header className="top" id="top">
            <div className="shell bar">
                <a className="brand" href="#home"><span className="mark" aria-hidden="true"></span>Celadon</a>
                <nav className="nav">
                    <a href="#features">Features</a>
                    <a href="#how">How it works</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                </nav>
                <a className="btn solid" href="#start">Start free</a>
                <button className="burger"
                        id="burger"
                        aria-label="Open menu"
                        aria-expanded="false"
                        aria-controls="drawer">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
                <div className="scrim" id="scrim"></div>
        <aside className="drawer" id="drawer" aria-label="Menu">
            <span className="dtag">Menu</span>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#stories">Customers</a>
            <a href="#faq">FAQ</a>
            <a className="btn solid" href="#start">Start free</a>
        </aside>
    </>
  )
}

export default Navbar