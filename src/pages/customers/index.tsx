import React, { useEffect, useState } from "react";

function Customer() {
  const [customers, setCustomers] = useState([]);
  // const [id, setId] = useState("");
  // const [customerName, setCustomerName] = useState("");
  // const [customerEmail, setCustomerEmail] = useState("");
  // const [customerContactNumber, setCustomerContactNumber] = useState("");
  // const [customerType, setCustomerType] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);
  // async function addCustomer() {
  //   try {
  //     const response = await fetch("http://localhost:8080/customers/posts", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         id: parseInt(id),
  //         name: customerName,
  //         email: customerEmail,
  //         contact_number: customerContactNumber,
  //         customer_type: parseInt(customerType),
  //       }),
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Customer added:", data);
  //       setCustomerName("");
  //       setCustomerEmail("");
  //       setCustomerContactNumber("");
  //       setCustomerType("");
  //       window.location.reload();
  //     } else {
  //       console.log("Error adding customer");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold p-2 m-10">Customers</h1>
        <ul>
          {customers.map((customer: any) => (
            <li key={customer.id} className="text-lg font-bold p-1 m-10">
              Name = {customer.name} Email: {customer.email} Contact{" "}
              {customer.contact_number}
            </li>
          ))}
        </ul>
      </div>
      {/* <input
        type="number"
        name=""
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter id"
        className="text-black"
      />
      <br />
      <input
        type="text"
        name=""
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Enter name"
        className="text-black"
      />
      <br />
      <input
        type="email"
        name=""
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        placeholder="Enter email"
        className="text-black"
      />
      <br />
      <input
        type="text"
        name=""
        value={customerContactNumber}
        onChange={(e) => setCustomerContactNumber(e.target.value)}
        placeholder="Enter Contact_Number"
        className="text-black"
      />
      <br />
      <input
        type="number"
        name=""
        value={customerType}
        onChange={(e) => setCustomerType(e.target.value)}
        placeholder="Enter Customer_type"
        className="text-black"
      />
      <br />
      <button onClick={addCustomer}>Add Customer</button> */}
    </>
  );
}
export default Customer;
