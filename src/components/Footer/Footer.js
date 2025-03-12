import FooterBody from "./FooterBody";
import FooterLogo from "./FooterLogo";


const Footer=()=>{

    return <section className="bg-light mt-5">
        <div className="container-lg py-5 px-5">
        <FooterBody/>
        <hr className="my-4 border-1" style={{color:" #0000001A"}}/>
        <FooterLogo/>

        </div>

    </section>

}

export default Footer;