'use client'
import React, { useState, useEffect } from "react";
import './navbar.css'
import Link from "next/link";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when clicking on a link
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Handle smooth scrolling
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        closeMenu();
    };

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <nav className="container">
                <div className="logo">Mintellect</div>




                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link
                            href="#home"
                            onClick={(e) => handleSmoothScroll(e, 'home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#about"
                            onClick={(e) => handleSmoothScroll(e, 'about')}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#problem"
                            onClick={(e) => handleSmoothScroll(e, 'problem')}
                        >
                            Problems
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#solution"
                            onClick={(e) => handleSmoothScroll(e, 'solution')}
                        >
                            Solution
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#benefits"
                            onClick={(e) => handleSmoothScroll(e, 'benefits')}
                        >
                            Benefits
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#contact"
                            onClick={(e) => handleSmoothScroll(e, 'contact')}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <button className="launch-btn" onClick={() => { window.open('https://app.mintellect.in', '_blank') }}>Launch App</button>
                <button
                    className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
}