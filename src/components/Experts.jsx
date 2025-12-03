import React from "react";

const Experts = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Emma Thompson",
      specialization: "Canine Nutrition & Wellness",
      experience: "10 years of experience in small animal care",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1200",
      email: "emma@pawcare.com",
    },
    {
      id: 2,
      name: "Dr. Liam Patel",
      specialization: "Feline Behavior & Surgery",
      experience: "8 years in veterinary surgery and behavioral therapy",
      image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=1200",
      email: "liam@pawcare.com",
    },
    {
      id: 3,
      name: "Dr. Sophia Reed",
      specialization: "Exotic Pets & Preventive Medicine",
      experience: "7 years in exotic pet health and wellness programs",
      image:
        "https://cdn.prod.website-files.com/670eaf858c51996588f802cf/670fd251ed549c9a13981c08_Dr.%20Sophia%20Reid.png",
      email: "sophia@pawcare.com",
    },
    {
      id: 4,
      name: "Dr. Sarah Johnson",
      specialization: "Small Animal Specialist",
      experience: "12 years",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      email: "sarah@pawcare.com",
    },
  ];
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Meet Our Experts Vets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {vets.map((vet) => (
          <div key={vet.id}>
            <figure className="px-6 pt-6">
              <img
                src={vet.image}
                className="mx-auto rounded-full w-32 h-32 object-cover"
                alt=""
              />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-lg">{vet.name}</h3>
              <p className="text-sm text-primary font-semibold">
                {vet.specialization}
              </p>
              <p className="text-xs text-gray-600">{vet.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
