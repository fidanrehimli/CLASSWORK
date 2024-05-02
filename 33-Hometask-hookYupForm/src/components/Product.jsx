import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  let [products, setProduct] = useState([]);

  const getAllProducts = async () => {
    const res = await axios("https://northwind.vercel.app/api/suppliers");
    setProduct(res?.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <table>
        <thead className="thead">
          <tr>
            <th>id</th>
            <th>companyName</th>
            <th>contactName</th>
            <th>city</th>
            <th>region</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem?.id}</td>
                <td>{elem?.companyName}</td>
                <td>{elem?.contactName}</td>
                <td>{elem?.address?.city}</td>
                <td>{elem?.address?.region}</td>
                <td>
                  <button
                    className="deletebtn"
                    onClick={() => {
                      let newArr = products.filter(
                        (item) => item.id != elem.id
                      );
                      axios.delete(
                        "https://northwind.vercel.app/api/suppliers" +
                          "/" +
                          elem.id
                      );
                      setProduct(newArr);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="editbtn"
                    onClick={() => {
                      let newname = prompt(
                        `${elem.companyName} modified`,
                        elem.companyName
                      );
                      axios.patch(
                        `https://northwind.vercel.app/api/suppliers/${elem.id}`,
                        { companyName: newname }
                      );
                      let newArr = products.map((el) => {
                        if (el.id == elem.id) {
                          el.name = newname;
                        }
                        return el;
                      });
                      setProduct(newArr);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
