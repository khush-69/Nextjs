import React, { useEffect, useState } from "react";

function Customer() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  async function addCustomer() {
    const name = await (document as any).getElementById("name").value;
    const email = await (document as any).getElementById("email").value;
    const contact_number = await (document as any).getElementById(
      "contact_number"
    ).value;
    const customer_type = await (document as any).getElementById(
      "customer_type"
    ).value;
    const address = await (document as any).getElementById("address").value;
    fetch("http://localhost:8080/customers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        contact_number: contact_number,
        customer_type: parseInt(customer_type),
        address: address,
      }),
    });
  }
  // async function updateCustomer() {
  //   const name = await (document as any).getElementById("name").value;
  //   const email = await (document as any).getElementById("email").value;
  //   const contact_number = await (document as any).getElementById(
  //     "contact_number"
  //   ).value;
  //   const customer_type = await (document as any).getElementById(
  //     "customer_type"
  //   ).value;
  //   const address = await (document as any).getElementById("address").value;
  //   fetch("http://localhost:8080/customers/:id", {
  //     method: "Patch",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //       contact_number: contact_number,
  //       customer_type: parseInt(customer_type),
  //       address: address,
  //     }),
  //   });
  // }
  return (
    <>
      <form className="flex-col m-8   gap-2  text-gray-600">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          className="m-2"
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="m-2"
        />
        <br />
        <input
          type="text"
          name="contact_number"
          id="contact_number"
          placeholder="contact Number"
          className="m-2"
        />
        <br />
        <input
          type="text"
          name="customer_type"
          id="customer_type"
          placeholder="customer type"
          className="m-2"
        />
        <br />
        <input
          type="text"
          name="address"
          id="address"
          placeholder="address"
          className="m-2"
        />

        <br />
        <button
          className="button bg-blue-500 m-2"
          type="button"
          onClick={() => addCustomer().then(() => window.location.reload())}
        >
          Add Customer
        </button>
        {/* <button
          className="button bg-blue-500 m-2"
          type="button"
          onClick={() => updateCustomer().then(() => window.location.reload())}
        >
          Update Customer
        </button> */}
      </form>
      <div>
        <h1 className="text-5xl font-bold p-2 m-10">Customers</h1>
        <ul>
          {customers.map((customer: any) => (
            <li key={customer.id} className="text-lg font-bold p-1 m-10">
              id={customer.id}, Name = {customer.name}, Email: {customer.email},
              Contact {customer.contact_number}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Customer;
