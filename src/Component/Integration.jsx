import React from 'react'
import Title from './Title'

function Integration() {
  return (
    <>
                <section className="pad-s">
                <div className="shell center">
                    <span className="eyebrow rv"><Title head='Connections' /></span>
                    <h2 className="h2 rv"><Title title='Plugs into the tools already open on your screen.' /></h2>
                    <div className="chips rv d1">
                        <span className="chip"><i style={{'background':'var(--jade)'}}></i>Linear</span>
                        <span className="chip"><i style={{"background":"var(--sky)"}}></i>Jira</span>
                        <span className="chip"><i style={{"background":"var(--coral)"}}></i>Zendesk</span>
                        <span className="chip"><i style={{"background":"#F0C980"}}></i>Intercom</span>
                        <span className="chip"><i style={{"background":"var(--jade)"}}></i>Slack</span>
                        <span className="chip"><i style={{"background":"var(--sky)"}}></i>HubSpot</span>
                        <span className="chip"><i style={{"background":"var(--coral)"}}></i>Notion</span>
                        <span className="chip"><i style={{"background":"#F0C980"}}></i>Front</span>
                        <span className="chip"><i style={{"background":"var(--jade)"}}></i>Gong</span>
                        <span className="chip"><i style={{"background":"var(--sky)"}}></i>App Store</span>
                        <span className="chip"><i style={{"background":"var(--coral)"}}></i>G2</span>
                        <span className="chip"><i style={{"background":"#F0C980"}}></i>Zapier</span>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Integration