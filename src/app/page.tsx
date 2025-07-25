'use client'
import React from "react";
import AboutSection from "./sections/about";
import BenefitSection from "./sections/benefits";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";
import HomeSection from "./sections/home";
import NavBar from "./sections/navbar";
import ProblemSection from "./sections/problem";
import Solution from "./sections/solutions";


export default function App() {
    return (
        <>
            <NavBar />
            <HomeSection />
            <AboutSection />
            <ProblemSection />
            <Solution />
            <BenefitSection />
            <ContactSection />
            <Footer /></>
    )
}