'use client'
import React, { useState, useEffect } from "react";
import './footer.css'

export default function Footer() {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">Mintellect</div>
                <p className="footer-text">Tokenizing Patent Potential. Accelerating Innovation.</p>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#solution">Solution</a>
                    <a href="#contact">Contact</a>
                    {/* <a href="#">Privacy</a>
                    <a href="#">Terms</a> */}
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Mintellect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}