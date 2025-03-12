import { CompanyContent, FAQContent, HelpContent, ResourcesContent } from "./constants";
import FooterItem from "./FooterItem";
import Social from "./Social";
const FooterBody = () => {
    
  return (
    <div className="row justify-content-center">
      <Social />
      <FooterItem content={CompanyContent} title="COMPANY"/>
      <FooterItem content={HelpContent} title="HELP"/>
      <FooterItem content={FAQContent} title="FAQ"/>
      <FooterItem content={ResourcesContent} title="RESOURCES"/>
    </div>
  );
};

export default FooterBody;
