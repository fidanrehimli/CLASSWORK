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

const Users = () => {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  const getAllData = async () => {
    const res = await axios.get("https://fakestoreapi.com/users");
    setData(res?.data);
    setSortData(res?.data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div>
        <input
          className="searchinp"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            let search = data.filter((elem) =>
              elem.username
                .toLocaleLowerCase()
                .includes(e.target.value.toLocaleLowerCase())
            );
            setSortData(search);
          }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Password</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Street</TableCell>
                <TableCell align="right">Number</TableCell>
                <TableCell align="right">Zipcode</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                >
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.password}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row?.address?.city}</TableCell>
                  <TableCell align="right">{row?.address?.street}</TableCell>
                  <TableCell align="right">{row?.address?.number}</TableCell>
                  <TableCell align="right">{row?.address?.zipcode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Users;
