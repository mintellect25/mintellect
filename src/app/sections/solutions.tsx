'use client'
import React from "react";
import './solution.css'

export default function Solution() {
    return (
        <section id="solution" className="solution-section">
            <div className="container">
                <div className="header-section">
                    <h2 className="section-title">How Mintellect Works</h2>
                    <p className="section-subtitle">
                        Transforming patent licensing through blockchain innovation
                    </p>
                </div>

                <div className="solution-flow">
                    <div className="flow-line"></div>

                    <div className="step-item">
                        <div className="step-visual">
                            <div className="step-circle">
                                <span className="step-number">1</span>
                            </div>
                            <div className="step-icon">🔍</div>
                        </div>
                        <div className="step-content">
                            <h3>Patent Verification</h3>
                            <p>Inventors list their pending patents; we verify with official databases.</p>
                        </div>
                    </div>

                    <div className="step-item reverse">
                        <div className="step-visual">
                            <div className="step-circle">
                                <span className="step-number">2</span>
                            </div>
                            <div className="step-icon">🎯</div>
                        </div>
                        <div className="step-content">
                            <h3>Tokenization</h3>
                            <p>Unique NFTs represent each application; ERC-20 tokens allow fractional usage rights.</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-visual">
                            <div className="step-circle">
                                <span className="step-number">3</span>
                            </div>
                            <div className="step-icon">🔐</div>
                        </div>
                        <div className="step-content">
                            <h3>Smart Licensing</h3>
                            <p>Usage rights are embedded in smart contracts – fast, secure, programmable.</p>
                        </div>
                    </div>

                    <div className="step-item reverse">
                        <div className="step-visual">
                            <div className="step-circle">
                                <span className="step-number">4</span>
                            </div>
                            <div className="step-icon">🎪</div>
                        </div>
                        <div className="step-content">
                            <h3>Marketplace Matching</h3>
                            <p>Companies, startups, and collaborators discover and license IP with confidence.</p>
                        </div>
                    </div>

                    <div className="step-item">
                        <div className="step-visual">
                            <div className="step-circle">
                                <span className="step-number">5</span>
                            </div>
                            <div className="step-icon">🤖</div>
                        </div>
                        <div className="step-content">
                            <h3>AI Assistance</h3>
                            <p>Our AI suggests potential applications, commercialization pathways, and partners.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}