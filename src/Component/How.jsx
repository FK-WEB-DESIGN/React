import React from 'react'
import Title from './Title'

function How() {
  return (
    <>
    
                <section className="pad" id="how">
                <div className="shell center">
                    <span className="eyebrow rv"><Title head='The process'/></span>
                    <h2 className="h2 rv"><Title title='Three steps, then it runs itself.'/></h2>
                </div>
                <div className="shell">
                    <div className="track">
                        <div className="step rv">
                            <div className="disc">1</div>
                            <h3>Collect</h3>
                            <p>Connect your channels once. New feedback arrives every few minutes with the customer already matched.</p>
                        </div>
                        <div className="step rv d1">
                            <div className="disc">2</div>
                            <h3>Shape</h3>
                            <p>Similar requests gather into themes with a plain summary you can rewrite in a sentence.</p>
                        </div>
                        <div className="step rv d2">
                            <div className="disc">3</div>
                            <h3>Ship</h3>
                            <p>Push a theme to your tracker. Everyone who asked for it hears back on the day it lands.</p>
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default How