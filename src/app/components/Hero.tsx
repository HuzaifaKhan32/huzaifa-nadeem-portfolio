import Link from "next/link";
const Hero = () => {
    return(
        <div className="hero-container">
            <div className="left">
                <div className="headings">
                <div className="text1 center">Hi, it&apos;s me</div>
                <div className="text2 center">Huzaifa Khan</div>
                <div className="text3 center">And I &apos;m a <span>Frontend Developer</span></div>
                <p className="center">I am a passionate front-end web developer skilled in creating user-friendly and visually appealing websites using HTML&lsquo; CSS&lsquo; and JavaScript. I strive to deliver high-quality&lsquo; responsive designs that enhance user experience.</p>
                </div>
                <div className="social-links">
                    <Link href={"https://www.linkedin.com/in/huzaifa-khan-b6bb76308/"} target="_blank"><div className="linkedIn"></div></Link>
                    <Link href={"https://github.com/HuzaifaKhan32"} target="_blank"><div className="github"></div></Link>
                    <Link href={"https://www.instagram.com/hzaifa_nadeem/"} target="_blank"><div className="instagram"></div></Link>
                </div>
                <div className="cv-button">
                    <button>Download CV</button>
                </div>
            </div>
            <div className="right">
                <div className="banner"></div>
            </div>
        </div>
    )
}

export default Hero;