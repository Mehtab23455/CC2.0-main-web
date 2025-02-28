import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  // Sample sponsor data - replace with your actual sponsors
  const sponsors = [
    { id: 1, name: 'TechCorp', tier: 'platinum', logo: '/images/sponsors/techcorp.png' },
    { id: 2, name: 'ByteWorks', tier: 'platinum', logo: '/images/sponsors/byteworks.png' },
    { id: 3, name: 'CodeLabs', tier: 'gold', logo: '/images/sponsors/codelabs.png' },
    { id: 4, name: 'DataSystems', tier: 'gold', logo: '/images/sponsors/datasystems.png' },
    { id: 5, name: 'InnovateNow', tier: 'gold', logo: '/images/sponsors/innovatenow.png' },
    { id: 6, name: 'CloudSolutions', tier: 'silver', logo: '/images/sponsors/cloudsolutions.png' },
    { id: 7, name: 'DevNet', tier: 'silver', logo: '/images/sponsors/devnet.png' },
    { id: 8, name: 'AISolutions', tier: 'silver', logo: '/images/sponsors/aisolutions.png' },
    { id: 9, name: 'WebCraft', tier: 'silver', logo: '/images/sponsors/webcraft.png' },
    { id: 10, name: 'TechStart', tier: 'bronze', logo: '/images/sponsors/techstart.png' },
  ];

  // Group sponsors by tier
  const platinum = sponsors.filter(sponsor => sponsor.tier === 'platinum');
  const gold = sponsors.filter(sponsor => sponsor.tier === 'gold');
  const silver = sponsors.filter(sponsor => sponsor.tier === 'silver');
  const bronze = sponsors.filter(sponsor => sponsor.tier === 'bronze');

  return (
    <section className="sponsors-section">
      <div className="container">
        <h2 className="sponsors-heading">SPONSORS</h2>
        <div className="sponsors-underline"></div>
        <p className="sponsors-description">
          Our hackathon wouldn't be possible without the generous support of our sponsors.
        </p>

        {platinum.length > 0 && (
          <div className="sponsor-tier">
            <h3 className="tier-title">Platinum Sponsors</h3>
            <div className="sponsor-logos platinum-tier">
              {platinum.map(sponsor => (
                <div key={sponsor.id} className="sponsor-logo-container">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
                </div>
              ))}
            </div>
          </div>
        )}

        {gold.length > 0 && (
          <div className="sponsor-tier">
            <h3 className="tier-title">Gold Sponsors</h3>
            <div className="sponsor-logos gold-tier">
              {gold.map(sponsor => (
                <div key={sponsor.id} className="sponsor-logo-container">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
                </div>
              ))}
            </div>
          </div>
        )}

        {silver.length > 0 && (
          <div className="sponsor-tier">
            <h3 className="tier-title">Silver Sponsors</h3>
            <div className="sponsor-logos silver-tier">
              {silver.map(sponsor => (
                <div key={sponsor.id} className="sponsor-logo-container">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
                </div>
              ))}
            </div>
          </div>
        )}

        {bronze.length > 0 && (
          <div className="sponsor-tier">
            <h3 className="tier-title">Bronze Sponsors</h3>
            <div className="sponsor-logos bronze-tier">
              {bronze.map(sponsor => (
                <div key={sponsor.id} className="sponsor-logo-container">
                  <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="sponsor-logo" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="become-sponsor">
          <h3>Interested in sponsoring our hackathon?</h3>
          <a href="/sponsor-info" className="sponsor-button">Become a Sponsor</a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;