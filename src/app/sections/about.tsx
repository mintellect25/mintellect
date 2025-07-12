'use client'
import React, { useState, useEffect } from "react";
import './about.css'

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('about');
        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section">
            <div className="about-background-pattern"></div>
            <div className="about-container">
                <div className={`about-section-header ${isVisible ? 'about-animate-in' : ''}`}>
                    <h2 className="about-section-title">About Mintellect</h2>
                    <div className="about-title-underline"></div>
                </div>

                <div className={`about-content ${isVisible ? 'about-animate-in' : ''}`}>
                    <div className="about-text">
                        <div className="about-text-card">
                            <div className="about-highlight-box">
                                <span className="about-highlight-number">30,000+</span>
                                <span className="about-highlight-text">Patents stuck in approval limbo annually</span>
                            </div>
                            <p className="about-main-text">
                                Every year, tens of thousands of promising innovations in India are locked in a 3–5 year patent approval limbo. During this period, ideas that could transform industries and lives sit idle. Startups stall. Research stagnates. Investments hesitate. And progress halts.
                            </p>
                        </div>

                        <div className="about-text-card about-solution-card">
                            <div className="about-solution-badge">
                                <span>✨ The Solution</span>
                            </div>
                            <p className="about-solution-text">
                                <strong>Mintellect is the solution.</strong>
                            </p>
                            <p className="about-main-text">
                                We are the world's first blockchain-powered marketplace dedicated to unlocking the value of pending patents. By tokenizing patent applications as verified digital assets (NFTs + usage tokens), Mintellect enables early licensing, usage, and collaboration on innovations <strong>before</strong> the patent is granted.
                            </p>
                        </div>

                        <div className="about-text-card about-mission-card">
                            <div className="about-mission-icon">🎯</div>
                            <p className="about-mission-text">
                                Our mission is to convert idle intellectual property into active opportunities — bridging inventors with investors, researchers with real-world impact, and ideas with the industries that need them.
                            </p>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="about-visual-container">
                            <div className="about-floating-elements">
                                <div className="about-element about-element-1">💡</div>
                                <div className="about-element about-element-2">🔗</div>
                                <div className="about-element about-element-3">⚡</div>
                                <div className="about-element about-element-4">🚀</div>
                            </div>
                            <div className="about-central-graphic">
                                <div className="about-blockchain-visual">
                                    <div className="about-chain-link"></div>
                                    <div className="about-chain-link"></div>
                                    <div className="about-chain-link"></div>
                                </div>
                                <div className="about-patent-icon">📋</div>
                            </div>
                            <div className="about-glow-effect"></div>
                        </div>
                    </div>
                </div>

                <div className={`about-stats-section ${isVisible ? 'about-animate-in' : ''}`}>
                    <div className="about-stat-item">
                        <div className="about-stat-number">3-5</div>
                        <div className="about-stat-label">Years Wait Time</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-number">∞</div>
                        <div className="about-stat-label">Lost Opportunities</div>
                    </div>
                    <div className="about-stat-item">
                        <div className="about-stat-number">1st</div>
                        <div className="about-stat-label">Blockchain IP Marketplace</div>
                    </div>
                </div>
            </div>
        </section>
    );
}