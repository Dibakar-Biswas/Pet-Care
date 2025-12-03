import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PetDetailsCard from "../components/PetDetailsCard";
import { useLoaderData, useParams } from "react-router";
import BookForm from "./BookForm";

const PetDetails = () => {
  const data = useLoaderData();
  const { serviceId } = useParams();
  const [pet, setPet] = useState({});
  //   console.log(data, serviceId, pet);

  useEffect(() => {
    const petDetails = data.find(
      (singleData) => singleData.serviceId == serviceId
    );
    setPet(petDetails);
  }, [data, serviceId]);

  return (
    <div>
      <main className="max-w-10/12 mx-auto py-10">
        <h2 className="font-semibold text-5xl text-center mb-5">
          Warm Paws Pet Care
        </h2>
        <section className="grid sm:grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-6 order-2 lg:order-1">
            <PetDetailsCard pet={pet}></PetDetailsCard>
          </div>
          <div className="col-span-6 order-1 lg:order-2">
            <BookForm></BookForm>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PetDetails;
