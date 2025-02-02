import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function RecentTable() {
  const [nbRows, ] = React.useState(3);
  // const removeRow = () => setNbRows((x) => Math.max(0, x - 1));
  // const addRow = () => setNbRows((x) => Math.min(100, x + 1));

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 90,
    maxColumns: 6,
  });

  return (
    <Box sx={{ width: '100%', height:'400px' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
        {/* <Button size="small" onClick={removeRow}>
          Remove a row
        </Button>
        <Button size="small" onClick={addRow}>
          Add a row
        </Button> */}
      </Stack>
      <DataGrid autoHeight {...data} rows={data.rows.slice(0, nbRows)} />
    </Box>
  );
}
