import React from "react";

import SpecilitesComponent from "../components/SpecilitesComponent";
import ContactUs from "../components/ContactUs";
import BreadCumb2 from "../components/Breadcumb2";

const Specialities = () => {

  return (
    <>
    <BreadCumb2
        items={[
          { label: 'Home', link: `/` },
          { label: `Specialities`, link:`/specialities` },
        ]}
        title='Best Specialities'
      />
      <div className=" md:pb-0 md:pt-20 pt-12 md:px-10 px-2">

   <SpecilitesComponent/>
      </div>
      <div className='mb-6'>
      
              <ContactUs/>
              </div>
    </>
  );
};

export default Specialities;
