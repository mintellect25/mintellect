'use client'
import React from "react";
import './benefit.css'

export default function BenefitSection() {
    return (
        <section id="benefits" className="benefits-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title scroll-animate">Benefits for Everyone</h2>
                    <p className="section-subtitle scroll-animate">Discover how our platform creates value across the entire innovation ecosystem</p>
                </div>

                <div className="benefits-container">
                    <div className="benefit-card academia scroll-animate">
                        <div className="card-header">
                            <div className="icon-wrapper">
                                <span className="benefit-icon">🎓</span>
                            </div>
                            <h3>For Academia</h3>
                        </div>
                        <div className="card-content">
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Showcase IP early and globally</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Earn pre-grant licensing revenue</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Attract industry collaboration</span>
                            </div>
                        </div>
                    </div>

                    <div className="benefit-card startups scroll-animate">
                        <div className="card-header">
                            <div className="icon-wrapper">
                                <span className="benefit-icon">🚀</span>
                            </div>
                            <h3>For Startups</h3>
                        </div>
                        <div className="card-content">
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Monetize pending patents</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Raise IP-backed funding</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>License or partner without giving up ownership</span>
                            </div>
                        </div>
                    </div>

                    <div className="benefit-card corporations scroll-animate">
                        <div className="card-header">
                            <div className="icon-wrapper">
                                <span className="benefit-icon">💼</span>
                            </div>
                            <h3>For Corporations</h3>
                        </div>
                        <div className="card-content">
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Access cutting-edge tech early</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Fast-track innovation pipelines</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Reduce IP acquisition friction</span>
                            </div>
                        </div>
                    </div>

                    <div className="benefit-card investors scroll-animate">
                        <div className="card-header">
                            <div className="icon-wrapper">
                                <span className="benefit-icon">📈</span>
                            </div>
                            <h3>For Investors</h3>
                        </div>
                        <div className="card-content">
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Discover new IP-backed assets</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Stake in high-potential inventions</span>
                            </div>
                            <div className="benefit-item">
                                <div className="bullet-point"></div>
                                <span>Enable underfunded innovations</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="floating-elements">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>
            </div>
        </section>
    );
}
