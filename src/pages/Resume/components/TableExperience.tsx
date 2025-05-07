import React from 'react';
import { TableCell, TableRow } from '@mui/material';

type TableExperienceProps = {
  institution: string;
  degree: string;
  year: string;
}

const TableExperience: React.FC<TableExperienceProps> = ({institution, degree, year}) => {
  return (
    <TableRow
      sx={{
        height: '100px',
        '&:nth-of-type(even)': { backgroundColor: 'transparent' },
      }}
    >
      <TableCell sx={{ color: 'white', fontSize: '1.2rem' }}>
        {institution}
      </TableCell>
      <TableCell sx={{ color: 'white', fontSize: '1.2rem' }}>
        {degree}
      </TableCell>
      <TableCell sx={{ color: 'white', fontSize: '1.2rem' }}>
        {year}
      </TableCell>
    </TableRow>
  );
};

export default TableExperience;
