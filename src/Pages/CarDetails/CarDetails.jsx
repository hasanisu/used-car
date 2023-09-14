import React from "react";
import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const allCars = useLoaderData();
  const { makerName, modelName, transmission, features, carProblem, sale, sellingPrice, color, carImage, arrival_year,postDate } =
    allCars;

  return (
    <div className="mt-16">
      <div className="md:flex justify-between">
       <div>
       <h2 className=" uppercase">CAR MAKER: <span className="font-semibold text-primary">{makerName}</span></h2>
        <p className=" uppercase">Post Date: <span className="font-semibold text-primary">{postDate}</span></p>
       </div>
        <div>
          <button className="btn btn-xs btn-primary">BuyNow</button>
          <p className="text-2xl">Price: <span className="text-primary text-xl">¥{sellingPrice}</span></p>
          <p>Save: <span className="text-primary">{sale}%</span> as of current published</p>
        </div>
      </div>
      <img src={carImage} alt='' />
      <p className="text-primary text-2xl">Model: <span className="text-white text-xl uppercase">{modelName}</span></p>
      <div>
        <h2 className="mt-5 text-2xl">Features</h2>
        <hr className="mb-5"/>
        <p className="text-2xl">Transmission: {transmission}</p>

        <p className="text-2xl">Good Point: {features}</p>

        <p className="text-2xl">color: {color}</p>

        <p className="text-2xl">Problems: {carProblem}</p>
      </div>



      <p className="text-2xl mt-20">Description</p>
      <hr />
      <span className="text-xl">
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
