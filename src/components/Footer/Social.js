const Social = () => {
  return (
    <div className="col-md-4">
      <h1 className="fw-bold mb-4" style={{fontSize:33}}>
        SHOP.CO
      </h1>
      <p className="py-2 mb-4" style={{fontSize:14,color:"#00000099"}}>
        We have clothes that suit your style and <br /> which you’re proud to
        wear. From <br /> women to men.
      </p>
      <div className="mb-4">
        <img src="/assets/svgs/twitter.svg" alt="twitter" />
        <img src="/assets/svgs/facebook.svg" alt="facebook" className="px-3" />
        <img src="/assets/svgs/instgram.svg" alt="instagram" />
        <img src="/assets/svgs/github.svg" alt="github" className="px-3" />
      </div>
    </div>
  );
};

export default Social;
