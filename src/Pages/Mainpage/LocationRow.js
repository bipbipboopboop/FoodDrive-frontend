import React, { useEffect } from "react";
import { useState } from "react";

import { RowWrap } from "../../Components/Styles/styles";
import { getReccLocation } from "../../Services/services";

import LocationCard from "./LocationCard";

const LocationRow = () => {
  const [locationList, setLocationList] = useState();
  useEffect(() => {
    getReccLocation(setLocationList);
  }, []);

  return (
    <RowWrap>
      {locationList &&
        locationList.map((loc, index) => (
          <LocationCard
            key={index}
            name={loc.name}
            image={loc.image}
            vendorSlug={loc.vendor_slug}
          />
        ))}
    </RowWrap>
  );
};

export default LocationRow;
