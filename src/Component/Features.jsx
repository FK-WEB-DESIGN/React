import React from 'react'
import Title from './Title'

function Features() {
  return (
    <>
    
                <section className="pad" id="features">
                <div className="shell center">
                    <span className="eyebrow rv"><Title head='What you get' /></span>
                    <h2 className="h2 rv"><Title title='Six raw pieces, one shaped workflow.' /></h2>
                    <p className="lede rv d1"><Title subTitle='No more spreadsheet of quotes that nobody opens after the second week.'/></p>
                    <p className="hint rv d1">Click a panel to open it.</p>
                </div>
                <div className="shell">
                    <div className="slabrow rv" id="slabrow">
                        <div className="stave open" role="button" tabIndex="0" aria-expanded="true">
                            <div className="spine"><span className="pip t-jade"></span><span className="st">One inbox for all of it</span></div>
                            <div className="bodywrap">
                                <div className="body">
                                    <div className="tile t-jade">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M3 7h18M3 12h18M3 17h11" />
                                            <circle cx="19" cy="17" r="2.4" />
                                        </svg>
                                    </div>
                                    <h3>One inbox for all of it</h3>
                                    <p>Support tickets, sales notes, app store reviews and Slack threads land in the same place, with the customer already attached.</p>
                                    <p className="proof">Pulling from <b>nine sources</b>, including CSV drops and forwarded email.</p>
                                </div>
                            </div>
                        </div>
                        <div className="stave" role="button" tabIndex="0" aria-expanded="false">
                            <div className="spine"><span className="pip t-sky"></span><span className="st">Themes, not tags</span></div>
                            <div className="bodywrap">
                                <div className="body">
                                    <div className="tile t-sky">
                                        <svg viewBox="0 0 24 24">
                                            <circle cx="8" cy="9" r="4" /><circle cx="16.5" cy="15" r="4.2" />
                                            <path d="M11 11.6l2.6 2" />
                                        </svg>
                                    </div>
                                    <h3>Themes, not tags</h3>
                                    <p>Similar requests cluster on their own, so you stop maintaining a tag taxonomy that only one person ever follows.</p>
                                    <p className="proof"><b>94%</b> of items land in a theme with nobody touching them.</p>
                                </div>
                            </div>
                        </div>
                        <div className="stave" role="button" tabIndex="0" aria-expanded="false">
                            <div className="spine"><span className="pip t-coral"></span><span className="st">Weighted by revenue</span></div>
                            <div className="bodywrap">
                                <div className="body">
                                    <div className="tile t-coral">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M5 19V10M12 19V5M19 19v-6" />
                                            <path d="M3 21h18" />
                                        </svg>
                                    </div>
                                    <h3>Weighted by revenue</h3>
                                    <p>Every theme shows which accounts are behind it and what they pay, so the loudest request stops beating the biggest one.</p>
                                    <p className="proof">Sorts by <b>the revenue behind the ask</b>, not by upvote count.</p>
                                </div>
                            </div>
                        </div>
                        <div className="stave" role="button" tabIndex="0" aria-expanded="false">
                            <div className="spine"><span className="pip t-sky"></span><span className="st">Reply where it started</span></div>
                            <div className="bodywrap">
                                <div className="body">
                                    <div className="tile t-sky">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M4 6h16v11H9l-5 4z" />
                                            <path d="M9 11h6" />
                                        </svg>
                                    </div>
                                    <h3>Reply where it started</h3>
                                    <p>Close the loop in the channel the feedback arrived in, without copying links between four different tools.</p>
                                    <p className="proof">Replies go out in <b>the original channel</b>, in your own words.</p>
                                </div>
                            </div>
                        </div>
                        <div className="stave" role="button" tabIndex="0" aria-expanded="false">
                            <div className="spine"><span className="pip t-jade"></span><span className="st">A roadmap that links back</span></div>
                            <div className="bodywrap">
                                <div className="body">
                                    <div className="tile t-jade">
                                        <svg viewBox="0 0 24 24">
                                            <rect x="3" y="4" width="18" height="16" rx="3" />
                                            <path d="M3 9h18M8 4v16" />
                                        </svg>
                                    </div>
                                    <h3>A roadmap that links back</h3>
                                    <p>Each roadmap item keeps a live list of the feedback that shaped it, so the reason it exists never goes missing.</p>
                                    <p className="proof">Every item keeps <b>a live list</b> of the feedback behind it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="stave" role="button" tabIndex="0" aria-expanded="false">
                            <div className="spine"><span className="pip t-coral"></span><span className="st">Fits your stack</span></div>
                            <div className="bodywrap">
                                <div className="body">
                                    <div className="tile t-coral">
                                        <svg viewBox="0 0 24 24">
                                            <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </div>
                                    <h3>Fits your stack</h3>
                                    <p>Two-way sync with Linear, Jira, HubSpot and Zendesk, set up from a settings page rather than a support call.</p>
                                    <p className="proof">Status changes travel <b>both ways</b>, so nothing drifts out of date.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Features