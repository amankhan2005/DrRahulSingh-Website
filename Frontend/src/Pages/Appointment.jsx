
 import AppointmentForm from "../components/AppointmentForm";
import image from "../assets/Book-Appointment.webp";
const Appoinment = () => {
  return (
    <div className="">
      {/* <BreadCumb
        items={[
          { label: "Home", link: `/` },
          { label: `Book Appointment`, link: `/apppintment` },
        ]}
        title="Book Appointment"
      /> */}

      <div className="flex   md:py-12 py-8 md:px-14 px-4">
        <div className="flex-1  ">
          <img src={image} className="rounded shadow-2xl hover:shadow-none"/>
        </div>

        <div className="container flex-1 px-2">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
