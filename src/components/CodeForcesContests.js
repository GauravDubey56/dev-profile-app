import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
// function createData(obj) {
//   return { contestName, rank, oldRating, newRating };
// }



export default function CodeForcesContests(props) {

  return (
    <div>
      {props.contestList.length === 0 ? <h3>No contests</h3> : <h3>Recent contests history</h3>}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Contest name</TableCell>
              <TableCell align="right">Rank</TableCell>
              <TableCell align="right">Old Rank</TableCell>
              <TableCell align="right">New Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.contestList.map((row) => (
              <TableRow
                key={row.contestName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.contestName}
                </TableCell>
                <TableCell align="right">{row.rank}</TableCell>
                <TableCell align="right">{row.oldRating}</TableCell>
                <TableCell align="right">{row.newRating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
