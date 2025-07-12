'use client'
import React from "react";
import './problem.css'

export default function ProblemSection() {
    return (<section id="problem" className="problem-section">
        <div className="container">
            <div className="section-header">
                <h2 className="p-section-title">What We Solve</h2>
                <div className="title-decoration">
                    <span className="decoration-line"></span>
                    <span className="decoration-dot"></span>
                    <span className="decoration-line"></span>
                </div>
            </div>

            <div className="problems-container">
                <div className="problems-grid">
                    <div className="problem-card scroll-animate" data-index="1">
                        <div className="card-header">
                            <span className="problem-icon">⏰</span>
                            <div className="icon-bg"></div>
                        </div>
                        <div className="card-content">
                            <h3>3-5 Year Patent Delays</h3>
                            <p>Innovations lose relevance or become obsolete during the lengthy patent approval process.</p>
                        </div>
                        <div className="card-number">01</div>
                    </div>

                    <div className="problem-card scroll-animate" data-index="2">
                        <div className="card-header">
                            <span className="problem-icon">📉</span>
                            <div className="icon-bg"></div>
                        </div>
                        <div className="card-content">
                            <h3>Lost Startup Growth</h3>
                            <p>Delays reduce employment by 21% and sales by 28% per year, stifling innovation.</p>
                        </div>
                        <div className="card-number">02</div>
                    </div>

                    <div className="problem-card scroll-animate" data-index="3">
                        <div className="card-header">
                            <span className="problem-icon">🏛️</span>
                            <div className="icon-bg"></div>
                        </div>
                        <div className="card-content">
                            <h3>Idle Academic Research</h3>
                            <p>90%+ of university patents remain unused, wasting valuable research.</p>
                        </div>
                        <div className="card-number">03</div>
                    </div>

                    <div className="problem-card scroll-animate" data-index="4">
                        <div className="card-header">
                            <span className="problem-icon">💰</span>
                            <div className="icon-bg"></div>
                        </div>
                        <div className="card-content">
                            <h3>Investor Hesitancy</h3>
                            <p>Lack of granted IP deters early-stage capital investment.</p>
                        </div>
                        <div className="card-number">04</div>
                    </div>

                    <div className="problem-card scroll-animate" data-index="5">
                        <div className="card-header">
                            <span className="problem-icon">⚖️</span>
                            <div className="icon-bg"></div>
                        </div>
                        <div className="card-content">
                            <h3>Legal Uncertainty</h3>
                            <p>No enforceable rights means no leverage to negotiate deals.</p>
                        </div>
                        <div className="card-number">05</div>
                    </div>
                </div>

                <div className="connecting-lines">
                    <svg className="connection-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M10,50 Q50,10 90,50 Q50,90 10,50" stroke="rgba(43, 108, 176, 0.2)" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>
            </div>
        </div>

        <div className="floating-elements">
            <div className="float-element float-1"></div>
            <div className="float-element float-2"></div>
            <div className="float-element float-3"></div>
        </div>
    </section>
    )
}