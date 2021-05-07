import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, Admin, location, whatsappNo) {
  return { name, Admin, location, whatsappNo };
}

const rows = [
  createData('Rest British School', "__", "34 lekki pahse 1", "+234 675 786808", 4.0),
  createData('Dano school', "__", "44 close avenue", "+234 675 786808", 4.3),
  createData('Randle Senior Scondary school', "__", "34 lekki pahse 1", "+234 675 786808", 6.0),
  createData('Jam Nur/Pry school', "__", "34 lekki pahse 1", "+234 675 786808", 4.3),
  createData('Line Dvais', "__", "34 lekki pahse 1", "+234 675 786808", 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead >
          <TableRow style={{ background: "red" }}>
            <StyledTableCell>Name Of School</StyledTableCell>
            <StyledTableCell align="right">Admin</StyledTableCell>
            <StyledTableCell align="right">location</StyledTableCell>
            <StyledTableCell align="right">whatsappNo</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.cv}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.whatsappNo}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
