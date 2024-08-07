import Image from "next/image";

const Preloader = () => {
  
  return (
    <div id="preloader" className="preloader">
      <div className="loader-circle">
        <div className="loader-line-mask">
          <div className="loader-line"/>
        </div>
        <div className="loader-logo">
          <Image width={130} height={48} 
            src="/images/site_logo/site_logo_2.svg"
            alt="Site Logo – Techco – IT Solutions & Technology Site Template"/>
        </div>
      </div>
    </div>

  );
}

export default Preloader;