import React, { useEffect, useCallback, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamData } from "../redux/slices/dataslice";
import { Link } from "react-router-dom";

// Team Member Card Component (Memoized for performance)
const TeamMemberCard = memo(({ member }) => {
  const { imageUrl, name, specialty, degree } = member || {};

  return (
    <div className="group border-b-4 border-white hover:border-[#1b4d94] transition-all duration-300 flex md:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Image Section */}
      <div className="flex-1 w-36 h-44 overflow-hidden rounded-lg shadow-md">
        <img
          src={imageUrl || "https://via.placeholder.com/150"}
          alt={name || "Team member"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 text-left">
        <div className="text-base font-semibold text-gray-900">{name || "Unknown"}</div>
        <p className="text-sm font-medium text-gray-600">
          <span className="font-semibold">Head</span> - Department of {specialty || "N/A"}
        </p>
        <p className="text-sm text-gray-600 mt-2">{degree || "N/A"}</p>
        <Link to="/appointment" className="mt-4 block px-4 py-2 text-xs text-white bg-primary text-center rounded-full cursor-pointer">
          Request Appointment
        </Link>
      </div>
    </div>
  );
});

// Slick Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export default function OurTeam() {
  const dispatch = useDispatch();
  const { teamData, loading, error } = useSelector((state) => state.data);

  // Memoized fetch call
  const fetchData = useCallback(() => {
    dispatch(fetchTeamData());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <p className="text-center text-gray-800 py-5">Loading team members...</p>;
  if (error) return <p className="text-center text-red-700 py-5">⚠️ Failed to load team data. Please try again later.</p>;
  if (!teamData?.length) return <p className="text-center text-gray-800 py-5">No team members available.</p>;

  return (
    <section className="lg:py-14 md:py-12 py-10 bg-gray-100 text-center">
      <h1 className="md:text-4xl text-2xl font-bold text-primary messiri">Meet Our Team</h1>
      <p className="text-gray-700 mb-6 md:text-base text-sm">Our dedicated professionals committed to your health.</p>

      <div className="md:px-10">
        <Slider {...sliderSettings}>
          {teamData.map((member, index) => (
            <div className="px-2" key={member._id} data-aos="fade-up" data-aos-delay={index * 200}>
              <TeamMemberCard member={member} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
