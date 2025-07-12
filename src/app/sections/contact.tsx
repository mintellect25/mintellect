'use client'
import React from "react";
import './contact.css'

export default function ContactSection() {
    return (
        <section id="contact" className="cta-section">
            <div className="contact-container">
                <div className="cta-content">
                    <h2>Backed by Blockchain. Boosted by AI. Built for Impact.</h2>
                    <p>Mintellect is more than a marketplace — it's a movement to reimagine how the world unlocks ideas. We begin in India, but our vision is global.</p>
                    <a href="https://lagomchain.com" target="_blank" className="cta-button contact-btn">Join the Movement</a>
                </div>
            </div>
        </section>
    );
}
