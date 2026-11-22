import React from 'react'
import Title from './Title'
function Feedback() {
  return (
    <>
    
                <section className="pad" id="start">
                <div className="shell">
                    <div className="close-plate rv">
                        <span className="eyebrow"><Title head='Get started'/></span>
                        <Title title='Point it at a week of your own feedback.'/>
                        <Title className="lede" subTitle='Connect one channel and see what comes back. If the themes are wrong, you will know inside an hour.'/>
                
                        <div className="form">
                            <input className="field"
                                   type="email"
                                   placeholder="you@company.com"
                                   aria-label="Work email"/>
                            <button className="btn solid" type="button" id="create">Create account</button>
                        </div>
                        <p className="note">Free for 14 days. Cancel from the settings page in two clicks.</p>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Feedback