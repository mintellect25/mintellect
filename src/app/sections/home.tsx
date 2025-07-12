'use client'
import React from "react";
import './home.css'

export default function HomeSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                {/* Animated Grid Background */}
                <div className="grid-overlay"></div>

                {/* Floating Patent Icons */}
                <div className="patent-icon patent-1">⚖</div>
                <div className="patent-icon patent-2">🔬</div>
                <div className="patent-icon patent-3">💡</div>
                <div className="patent-icon patent-4">🔐</div>
                <div className="patent-icon patent-5">⚡</div>

                {/* Blockchain Network Nodes */}
                <div className="blockchain-node node-1"></div>
                <div className="blockchain-node node-2"></div>
                <div className="blockchain-node node-3"></div>
                <div className="blockchain-node node-4"></div>
                <div className="blockchain-node node-5"></div>
                <div className="blockchain-node node-6"></div>

                {/* Enhanced Connection Lines */}
                <div className="connection-line line-1"></div>
                <div className="connection-line line-2"></div>
                <div className="connection-line line-3"></div>
                <div className="connection-line line-4"></div>
                <div className="connection-line line-5"></div>

                {/* Floating IP Symbols */}
                <div className="ip-symbol ip-1">©</div>
                <div className="ip-symbol ip-2">®</div>
                <div className="ip-symbol ip-3">™</div>
                <div className="ip-symbol ip-4">℗</div>

                {/* Particle Effect */}
                <div className="particle-container">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`particle particle-${i + 1}`}></div>
                    ))}
                </div>
            </div>

            <div className="hero-content">
                <div className="title-container">
                    <h1 className="hero-title">
                        <span className="title-line">Tokenizing</span>
                        <span className="title-line highlight">Patent Potential</span>
                    </h1>
                </div>
                <p className="hero-subtitle">Accelerate Invention. Amplify Impact.</p>
                <p className="hero-description">
                    Transform your intellectual property into liquid digital assets. Our revolutionary platform enables patent holders to tokenize, trade, and monetize their IP rights through secure blockchain technology.
                </p>
                <div className="cta-container">
                    <a href="#solution" className="cta-button">
                        <span className="cta-text">Start Tokenizing Now</span>
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
