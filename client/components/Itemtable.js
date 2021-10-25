import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Button,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const drawerWidth = 240;

export default function Itemtable({ items }) {
  return (
    <div style={{ flexGrow: "1" }}>
      <Box
        component="main"
        lg={{
          flexGrow: 10,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Card>
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Rate</TableCell>
                    <TableCell>Usage Unit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items &&
                    items.map((item) => (
                      <TableRow>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.selling_description}</TableCell>
                        <TableCell>{item.selling_price}.00</TableCell>
                        <TableCell>{item.unit}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
      <Button
        variant="contained"
        color="success"
        component={Link}
        href="/additem"
      >
        &#xFF0B;&nbsp;New
      </Button>
    </div>
  );
}
