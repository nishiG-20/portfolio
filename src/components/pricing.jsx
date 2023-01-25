import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const table = {
  minWidth: 650,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0px 0px 10px #d1d1d1",
  mt:2
};

const tableHead = {
  background: "grey",
  color: "#fff",
};

const tableCell = {
  fontWeight: "bold",
  fontSize: "1.2em",
  padding: "10px 20px",
};

const headphones = [
  { name: "Headphone 1", price: "$50", description: "Great Sound Quality" },
  { name: "Headphone 2", price: "$75", description: "Comfortable and Durable" },
  { name: "Headphone 3", price: "$100", description: "Noise Cancellation" },
  { name: "Headphone 4", price: "$150", description: "Wireless and Bluetooth" },
  { name: "Headphone 5", price: "$200", description: "High-Resolution Audio" },
  {
    name: "Headphone 6",
    price: "$250",
    description: "In-Ear Noise Cancellation",
  },
  {
    name: "Headphone 7",
    price: "$300",
    description: "Noise-Cancelling Microphone",
  },
  { name: "Headphone 8", price: "$350", description: "Built-in Alexa" },
];

function Pricing() {
  return (
    <Paper elevation={5}>
      <TableContainer>
        <Table sx={table} aria-label="headphones table">
          <TableHead sx={tableHead}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {headphones.map((headphone) => (
              <TableRow key={headphone.name}>
                <TableCell component="th" scope="row" sx={tableCell }>
                  {headphone.name}
                </TableCell>
                <TableCell align="right" sx={tableCell }>{headphone.price}</TableCell>
                <TableCell align="right" sx={tableCell }>{headphone.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
     </Paper>
  );
}

export default Pricing;
