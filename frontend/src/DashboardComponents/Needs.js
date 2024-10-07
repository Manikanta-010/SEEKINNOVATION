import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './OffersNeeds.module.css';

const Needs = () => {
  const currentLocation = useLocation();  
  const { state } = currentLocation; 
  const { sectors } = state || {};   
  
  const [needsSelections, setNeedsSelections] = useState([]);
  const navigate = useNavigate();

  const handleSave = () => {
    const groupedNeeds = sectors.map((sector) => {
      const sectorNeeds = needsOptions[sector] || [];
      return sectorNeeds.reduce((acc, need) => {
        const selectedSubcategories = need.subcategories.filter((sub) =>
          needsSelections.includes(sub)
        );
        if (selectedSubcategories.length > 0) {
          acc.push({
            sector,
            category: need.name,
            subcategories: selectedSubcategories,
          });
        }
        return acc;
      }, []);
    });

    navigate('/buyer-dashboard', { state: { needs: groupedNeeds.flat() } });
  };

  const needsOptions = {
  'Energy': 
  [ 
    {
      name: "Renewable hydrogen",
      subcategories: [
        "Green (Renewable energy)",
        "Low-carbon hydrogen",
        "Blue (Low-carbon fossil)",
        "Yellow (Nuclear energy)",
        "Carbon Hydrogen",
        "Grey (Fossil)",
      ]
    },
    {
      name: "PACKAGING",
      subcategories: [
        "Compressors",
        "Compression",
        "Manufacturing compression equipment",
        "Tanks, trucks",
        "Tube trailers",
        "Pipeline tubes",
        "Liquefaction units: heat exchangers, compressors, pumps, turbo-owners"
      ]
    },
    {
      name: "DISTRIBUTION",
      subcategories: [
        "Means of distribution",
        "Provisioning by boat",
        "Provisioning by truck",
        "Provisioning by gas pipeline",
        "Filling by swapping the stacking module",
        "Filling on station"
      ]
    },
    {
      name: "HYDROGEN STORAGE",
      subcategories: [
        "Storage facilities",
        "Integrated gas storage",
        "Modular gas storage",
        "Liquid storage",
        "Solid storage"
      ]
    },
    {
      name: "PRODUCTION",
      subcategories: [
        "Development",
        "Site development",
        "Equipment manufacturing",
        "Biomass gasification plants",
        "Biogas reforming plants",
        "Vapor-processing plants with or without carbon capture",
        "Electrolyzers (- ALK, PEM, SOEC...)"
      ]
    },
    {
      name: "On sites",
      subcategories: [
        "Operating and maintaining the sites"
      ]
    },
    {
      name: "USE",
      subcategories: [
        "Manufacturing of CAP vehicle parts",
        "batteries and electric motors",
        "fuel cells",
        "hydrogen tanks"
      ]
    },
    {
      name: "Vehicle assembly",
      subcategories: [
        "HGVs (buses, coaches, semi-trailers...)",
        "Light vehicles (forklifts, cars, etc.)",
        "Other: (trains, shipping, planes, etc.)"
      ]
    },
    {
      name: "Vehicle maintenance",
      subcategories: [
        "Maintenance"
      ]
    },
    {
      name: "Recharge stations",
      subcategories: [
        "Construction",
        "Site development",
        "Exploitation",
        "Manufacturing of equipment",
        "Maintenance"
      ]
    },
    {
      name: "Industries",
      subcategories: [
        "Steel",
        "Assembly on industrial site",
        "Other industries",
        "Operation",
        "Manufacturing",
        "Maintenance",
        "Non-ferrous metals",
        "Chemicals",
        "Refineries"
      ]
    },
    {
      name: "Maritime",
      subcategories: [
        "Shore power",
        "Ship propulsion",
        "On-board electrical uses",
        "Ancillary uses (e.g. heat production)"
      ]
    },
    {
      name: "Energy",
      subcategories: [
        "3rd party power supply",
        "Equity power supply",
        "Hydrogen direct",
        "Pipeline",
        "Gas technologies",
        "power transmission"
      ]
    },
    {
      name: "Building",
      subcategories: [
        "Self-sufficient buildings"
      ]
    },
    {
      name: "RECOVERY",
      subcategories: [
        "Recovery in hydrogen",
        "Power to Industry",
        "Power to Mobility",
        "Power to Gas",
        "Power to Power"
      ]
    },
    {
      name: "OTHER SERVICES",
      subcategories: [
        "Services",
        "Support for research and development",
        "Financial services",
        "Technical services",
        "Others"
      ]
    }
      
  ],
  'Aerospace': 
  [ 
    {
      name: "Renewable hydrogen",
      subcategories: [
        "Green (Renewable energy)",
        "Low-carbon hydrogen",
        "Blue (Low-carbon fossil)",
        "Yellow (Nuclear energy)",
        "Carbon Hydrogen",
        "Grey (Fossil)",
      ]
    },
    {
      name: "PACKAGING",
      subcategories: [
        "Compressors",
        "Compression",
        "Manufacturing compression equipment",
        "Tanks, trucks",
        "Tube trailers",
        "Pipeline tubes",
        "Liquefaction units: heat exchangers, compressors, pumps, turbo-owners"
      ]
    },
    {
      name: "DISTRIBUTION",
      subcategories: [
        "Means of distribution",
        "Provisioning by boat",
        "Provisioning by truck",
        "Provisioning by gas pipeline",
        "Filling by swapping the stacking module",
        "Filling on station"
      ]
    }, 
  ],
  'Industry': 
  [ 
    {
      name: "Renewable hydrogen",
      subcategories: [
        "Green (Renewable energy)",
        "Low-carbon hydrogen",
        "Blue (Low-carbon fossil)",
        "Yellow (Nuclear energy)",
        "Carbon Hydrogen",
        "Grey (Fossil)",
      ]
    },
    {
      name: "PACKAGING",
      subcategories: [
        "Compressors",
        "Compression",
        "Manufacturing compression equipment",
        "Tanks, trucks",
        "Tube trailers",
        "Pipeline tubes",
        "Liquefaction units: heat exchangers, compressors, pumps, turbo-owners"
      ]
    },
    {
      name: "DISTRIBUTION",
      subcategories: [
        "Means of distribution",
        "Provisioning by boat",
        "Provisioning by truck",
        "Provisioning by gas pipeline",
        "Filling by swapping the stacking module",
        "Filling on station"
      ]
    }, 
  ],
  'Defense & Security': 
  [ 
    {
      name: "Renewable hydrogen",
      subcategories: [
        "Green (Renewable energy)",
        "Low-carbon hydrogen",
        "Blue (Low-carbon fossil)",
        "Yellow (Nuclear energy)",
        "Carbon Hydrogen",
        "Grey (Fossil)",
      ]
    },
    {
      name: "PACKAGING",
      subcategories: [
        "Compressors",
        "Compression",
        "Manufacturing compression equipment",
        "Tanks, trucks",
        "Tube trailers",
        "Pipeline tubes",
        "Liquefaction units: heat exchangers, compressors, pumps, turbo-owners"
      ]
    },
    {
      name: "DISTRIBUTION",
      subcategories: [
        "Means of distribution",
        "Provisioning by boat",
        "Provisioning by truck",
        "Provisioning by gas pipeline",
        "Filling by swapping the stacking module",
        "Filling on station"
      ]
    }, 
  ],
  };

  const handleSubcategorySelect = (subcategory) => {
    setNeedsSelections((prev) =>
      prev.includes(subcategory)
        ? prev.filter((item) => item !== subcategory)
        : [...prev, subcategory]
    );
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearAll = (needName, sector) => {
    const sectorNeeds = needsOptions[sector];
    const subcategories = sectorNeeds.find((need) => need.name === needName)?.subcategories || [];
    setNeedsSelections((prev) => prev.filter((item) => !subcategories.includes(item)));
  };

  const handleSelectAll = (needName, sector) => {
    const sectorNeeds = needsOptions[sector];
    const subcategories = sectorNeeds.find((need) => need.name === needName)?.subcategories || [];
    setNeedsSelections((prev) => [...new Set([...prev, ...subcategories])]);
  };

  return (
    <div className={styles.needsNeeds}>
      <div className={styles.buttonsTop}>
        <button onClick={() => navigate('/buyer-dashboard')}>Back to Dashboard</button>
        <button onClick={handleSave}>Save</button>
      </div>

      {sectors && sectors.length > 0 ? (
        sectors.map((sector) => (
          <div key={sector}>
            <h3>{sector.toUpperCase()} SECTOR</h3>
            <div className={styles.needsLinks}>
              {(needsOptions[sector] || []).map((need) => (
                <a key={need.name} onClick={() => scrollToSection(`${sector}-${need.name}`)} className={styles.link}>
                  {need.name}
                </a>
              ))}
            </div>

            <div className={styles.sections}>
              {(needsOptions[sector] || []).map((need) => (
                <div key={need.name} id={`${sector}-${need.name}`} className={styles.section}>
                  <h4>{need.name}</h4>
                  {need.subcategories.map((sub) => (
                    <div key={sub} className={styles.subcategory}>
                      <input
                        type="checkbox"
                        checked={needsSelections.includes(sub)}
                        onChange={() => handleSubcategorySelect(sub)}
                      />
                      <label>{sub}</label>
                    </div>
                  ))}
                  <br />
                  <div className={styles.buttonsSection}>
                    <button onClick={() => handleSelectAll(need.name, sector)}>Select All</button>
                    <button onClick={() => handleClearAll(need.name, sector)}>Clear All</button>
                  </div>
                </div>
              ))}
            </div>
            <br/>
          </div>
        ))
      ) : (
        <p>Please make sure you have selected sector(s) before navigating here.</p>
      )}
    </div>
  );
};

export default Needs;
