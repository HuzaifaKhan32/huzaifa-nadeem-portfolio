"use client"
import Image from "next/image";
import logo from "../../../public/logo-removebg-preview.png";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { useState } from "react";


const Header = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId) as HTMLElement;

        if(element){
            window.scrollTo({
                top : element.offsetTop,
                behavior : "smooth"
            })
        }
    }
    const [visibility, setVisibility] = useState<boolean>(false);

    const handleSidebarVisibility = () => {
        setVisibility(!visibility);
    }

    // const [activeness, setActiveness] = useState<null | number>(null);

    // const handleClick = (buttonIndex : number) => {
    //     setActiveness(buttonIndex);
    // }

    return (
        <div className="header-container">
            <div className="image-container">
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt="LOGO" />
            </div>
            <div className="nav-items">
                <Link href={"/"} className="link change">Home</Link>
                <Link href={"/"} className=" link" onClick={() => scrollToSection(".about-container")}>About Me</Link>
                <Link href={"/"} className="link" onClick={() => scrollToSection(".contact-container")}>Contact</Link>
                <Link href={"/"} className="link">Service</Link>
                <Link href={"/"} className="link">Skills</Link>
                <Link href={"/"} className="link">Portfolio</Link>
            </div>
            <div className={`sidebar ${visibility ? "visible" : ""}`}>
                <div className="cross-button">
                <FontAwesomeIcon icon={faXmark} onClick={handleSidebarVisibility} className="cross-icon"/>
                </div>
                <Link href={"/"} className="link">Home</Link>
                <Link href={"/"} className="change link">About Me</Link>
                <Link href={"/"} className="link">Service</Link>
                <Link href={"/"} className="link">Skills</Link>
                <Link href={"/"} className="link">Portfolio</Link>
                <Link href={"/"} className="link">Contact</Link>
                <Link href={"/"} className="link">Hire Me</Link>
            </div>
            <div className="hire-button">
                <button>Hire Me</button>
            </div>
            <div className="menu-button show-sidebar">
                <FontAwesomeIcon icon={faBars}  className="menu-icon" onClick={handleSidebarVisibility}/>
                
            </div>
        </div>
    )
}

export default Header;