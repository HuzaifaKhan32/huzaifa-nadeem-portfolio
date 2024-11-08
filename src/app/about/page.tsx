import Image from "next/image";
import pic from "../../../public/about-picture.jpg"
const About = () => {
    return(
        <div className="about-container">
            <div className="heading">
                <h1>About <span className="color">Me</span></h1>
            </div>
            <div className="about-content-container">
                <div className="left">
                    <div className="image-container">
                        <Image
                        src={pic}
                        alt="about pic"
                        className="about-pic"/>
                    </div>
                </div>
                <div className="right">
                    <div className="text">
                        <h1>Web Developer & Web Designer</h1>
                        <p>I&apos;m a passionate web developer and designer skilled in HTML&lsquo; CSS&lsquo; JavaScript&lsquo; TypeScript&lsquo; React.js&lsquo; Next.js&lsquo; and Tailwind CSS. My focus is on creating responsive and engaging digital experiences that bring ideas to life with seamless design and robust functionality. With a strong foundation in both frontend and backend development&lsquo; I enjoy tackling diverse projects that help businesses enhance their online presence.</p>
                        <p>Whether it&apos;s building dynamic applications or designing intuitive user interfaces&lsquo; I am committed to delivering innovative solutions that drive user engagement and support business growth.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;