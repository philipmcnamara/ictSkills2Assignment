import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCredits({ movie }) {
  const classes = useStyles();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then((credits) => {
        setCredits(credits);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell >Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((r) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell >{excerpt(r.content)}</TableCell>
              <TableCell >
                <Link
                  to={{
                    pathname: `/credits/${r.id}`,
                    state: {
                      credits: r,
                      movie: movie,
                    },
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}