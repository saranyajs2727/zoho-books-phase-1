import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";

import * as React from "react";

const drawerWidth = 240;

export default function Invoice({ invoices }) {
  return (
    <div>
      <div className="navba">
        <button
          className="btn btn-primary newicon"
          data-ember-action=""
          data-ember-action-2061="2061"
          style={{ background: "green", marginLeft: "8px" }}
        >
          {" "}
          <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
          <Link href="/addSales">
            <a style={{ textDecoration: "none", color: "white" }}>New </a>
          </Link>{" "}
        </button>
        <SettingsOutlinedIcon style={{ marginLeft: "28px" }} />
        <DehazeIcon
          sx={{
            border: "1px solid #D3D3D3",
            borderRadius: "3px",
            padding: "3px",
            background: "#DCDCDC",
            marginLeft: "25px",
          }}
        />
        <a
          href="#"
          data-ember-action=""
          data-ember-action-2133="2133"
          className="blubs"
        >
          <EmojiObjectsTwoToneIcon
            color="primary"
            style={{ marginLeft: "25px" }}
          />{" "}
        </a>
      </div>

      <hr />
      <Box
        component="main"
        lg={{
          flexGrow: 10,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Invoice Number</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices &&
                invoices.map((invoice) => (
                  <TableRow>
                    <TableCell>{invoice.invoice_date}</TableCell>
                    <TableCell>{invoice._id}</TableCell>
                    <TableCell>{invoice.customer}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>{invoice.total}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
