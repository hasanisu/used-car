import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const CarDetails = () => {
  const allCars = useLoaderData();
  const { user } = useContext(AuthContext)


  const { _id, makerName, modelName, transmission, features, carProblem, sale, sellingPrice, color, carImage, postDate, seller, paid } =
    allCars;


  const handleToCustomerQuery = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name, email, message)

    const customerMessage = {
      name,
      email,
      sellerEmail: seller.email,
      message,
      carInfo: {
        id: _id,
        makerName,
        modelName,
        carImage,


      }
    }

    fetch('http://localhost:5000/customer-query', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(customerMessage)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          form.reset();
          toast.success('Your Query Successfully posted to the seller. You will get responce within 24 hours')
        }
      })
  }

  return (
    <div>
      <div className="mt-16">
        <div className="md:flex justify-between">
          <div>
            <h2 className=" uppercase">CAR MAKER: <span className="font-semibold text-primary">{makerName}</span></h2>
            <p className=" uppercase">Post Date: <span className="font-semibold text-primary">{postDate}</span></p>
          </div>
          <div>
            {
              paid ? <h2 className="text-green-600 text-lg font-semibold">SOLD-OUT</h2> : <Link to={`/payment/${_id}`}><button className="btn btn-xs btn-primary">BuyNow</button></Link>
            }
            <p className="text-2xl">Price: <span className="text-primary text-xl">¥{sellingPrice}</span></p>
            <p>Save: <span className="text-primary">{sale}%</span> as of current published</p>
          </div>
        </div>
        <img src={carImage} alt='' />
        <p className="text-primary text-2xl">Model: <span className="text-white text-xl uppercase">{modelName}</span></p>
        <div>
          <h2 className="mt-5 text-2xl">Features</h2>
          <hr className="mb-5" />
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
      <hr className="mt-20" />



      <div className=" max-w-md mx-auto bg-slate-500 p-2 mt-10 rounded-lg">

        <h2 className="text-2xl mb-10 mt-5">**More inquiry with This Product</h2>


        <form onSubmit={handleToCustomerQuery}>
          <div className="flex justify-between gap-3 mb-5">

            <div className="w-full">
              <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-primary w-full text-lg" />
            </div>
            <div className="w-full">
              <input name='email' type="email" placeholder="Your Email Address" className="input input-bordered input-primary w-full text-lg" />
            </div>
          </div>

          <div>
            <textarea name='message' type="text" placeholder="Your Inquery Message" className="textarea textarea-bordered textarea-primary w-full text-lg" />
          </div>


          <div className="mt-6">
            <button className="btn btn-primary w-full">
              {/* {loading ? <Spinner/> : 'Add Product'} */}
              submit
            </button>
          </div>


        </form>



      </div>
    </div>
  );
};

export default CarDetails;
