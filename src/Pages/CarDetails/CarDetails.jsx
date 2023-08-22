import React from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const allCars = useLoaderData();
  console.log(allCars);
  const { img, maker, model, transmission, price, sale, color, arrival_year } =
    allCars;

  return (
    <div className="mt-16">
      <div className="md:flex justify-between">
        <h2 className=" uppercase">CAR MAKER: <span className="font-semibold text-primary">{maker}</span></h2>
        <div>
          <p>Price: <span className="text-primary">${price}</span></p>
          <p>Save: <span className="text-primary">{sale}%</span> as of current published</p>
        </div>
      </div>
      <img src={img} alt={maker} />
      <p className="text-primary">Model: <span className="text-white">{model}</span></p>
      <div>
        <h2 className="mt-5">Features</h2>
        <hr />
        <p >Transmission: {transmission}</p>

        <p>color: {color}</p>
      </div>
      <p className="mt-5">Description</p>
      <hr />
      <span >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae autem
        quibusdam delectus, minima enim fugit magni quisquam illum asperiores
        labore amet explicabo dolores ipsam quo eius numquam nostrum. Natus
        nostrum consequuntur maiores quas totam, blanditiis nesciunt repellat,
        libero ipsam vero obcaecati sed dolore voluptates. Repellendus doloribus
        fuga reprehenderit corporis, dolorum, aspernatur commodi laboriosam
        soluta quaerat optio, ducimus repudiandae quod nam! Quia dolores
        explicabo fugiat eum vero! Eligendi accusamus distinctio sapiente
        voluptates, corporis iure eius, ratione, illum natus debitis aperiam
        dolor eos minima quos possimus nemo consequatur vitae culpa expedita
        quasi! Distinctio magni dolores quaerat sint, pariatur dignissimos
        voluptatum molestias officia culpa modi ducimus doloribus aliquid, sit
        repellat quae ab quibusdam illum? A, iusto. Autem, consequuntur quas eos
        suscipit perspiciatis ducimus sequi deserunt velit earum deleniti?
        Delectus, voluptates natus aspernatur in molestiae omnis unde quisquam
        ex eaque modi obcaecati pariatur iure voluptatem cum, quod architecto
        perferendis officia, doloribus voluptatum. Nam, autem?
      </span>
    </div>
  );
};

export default CarDetails;
