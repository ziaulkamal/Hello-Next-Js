import Image from "next/image";
import clientData from '@/app/data/clientSection.json';  // Pastikan path ini sesuai dengan struktur folder Anda

const PartnerSection = () => {
  return (
    <div className="feature_partners_section">
      <div className="container position-relative">
        <div className="title_text text-white">{clientData.title}</div>
        <div className="client_logo_carousel">
          <div className="swiper-wrapper">
            {clientData.clients.map((client, index) => (
              <div className="swiper-slide" key={index}>
                <div className="client_logo_item">
                  <Image
                    width={client.width}
                    height={client.height}
                    src={client.src}
                    alt={client.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerSection;
