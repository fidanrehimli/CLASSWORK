import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Products = () => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  const getData = async () => {
    const res = await axios("http://localhost:3000/products");
    setData(res?.data);
    setSortData(res?.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <input
          className="searchinp"
          placeholder="Search..."
          type="text"
          onChange={(e) => {
            let search = data.filter((elem) =>
              elem.title
                .toLowerCase()
                .includes(e.target.value.toLocaleLowerCase())
            );
            setSortData(search);
          }}
        />
      </div>

      <button
        className="A-Z"
        onClick={() => {
          let newarr = [...data].sort((a, b) =>
            a.title[0].localeCompare(b.title[0])
          );
          console.log(newarr);
          setSortData(newarr);
        }}
      >
        A-Z
      </button>

      <button
        className="Z-A"
        onClick={() => {
          let newarr = [...data].sort((a, b) =>
            b.title[0].localeCompare(a.title[0])
          );
          setSortData(newarr);
        }}
      >
        Z-A
      </button>

      <button
        className="Price-max"
        onClick={() => {
          let newarr = [...data].sort((a, b) => b.price - a.price);
          setSortData(newarr);
        }}
      >
        Price Sort (max-min)
      </button>

      <button
        className="Price-min"
        onClick={() => {
          let newarr = [...data].sort((a, b) => a.price - b.price);
          setSortData(newarr);
        }}
      >
        Price Sort (min-max)
      </button>

      <button
        className="Rate-max"
        onClick={() => {
          let newarr = [...data].sort(
            (a, b) => b?.rating?.rate - a?.rating?.rate
          );
          setSortData(newarr);
        }}
      >
        Rate (max-min)
      </button>

      <button
        className="Rate-min"
        onClick={() => {
          let newarr = [...data].sort(
            (a, b) => a?.rating?.rate - b?.rating?.rate
          );
          setSortData(newarr);
        }}
      >
        Rate (min-max)
      </button>

      <button
        className="Count-max"
        onClick={() => {
          let newarr = [...data].sort(
            (a, b) => b?.rating?.count - a?.rating?.count
          );
          setSortData(newarr);
        }}
      >
        Count (max-min)
      </button>

      <button
        className="Count-min"
        onClick={() => {
          let newarr = [...data].sort(
            (a, b) => a?.rating?.count - b?.rating?.count
          );
          setSortData(newarr);
        }}
      >
        Count (min-max)
      </button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">TITLE</TableCell>
              <TableCell align="right">PRICE</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortData.map((row) => (
              <TableRow
                className={
                  row.rating.count < 100
                    ? "red"
                    : "yellow" && row.rating.count < 200
                    ? "yellow"
                    : ""
                }
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row?.rating?.rate}</TableCell>
                <TableCell align="right">{row?.rating?.count}</TableCell>
                <TableCell align="right">
                  <button
                    className="editbtn"
                    onClick={() => {
                      let newname = prompt(`${row.title} modified`, row.title);
                      axios.patch(`http://localhost:3000/products/${row.id}`, {
                        title: newname,
                      });
                      let newArr = sortData.map((el) => {
                        if (el.id == row.id) {
                          el.title = newname;
                        }
                        return el;
                      });
                      setSortData(newArr);
                    }}
                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell align="right">
                  <button
                    className="deletebtn"
                    onClick={() => {
                      let newArr = sortData.filter((item) => item.id != row.id);
                      axios.delete(
                        "http://localhost:3000/products" + "/" + row.id
                      );
                      setSortData(newArr);
                    }}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Products;
