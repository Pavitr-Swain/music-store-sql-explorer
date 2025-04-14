
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface ResultsTableProps {
  data: any[] | null;
  error: string | null;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ data, error }) => {
  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 rounded">
        {error}
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-gray-500 p-4">
        No results to display. Run a query to see data.
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column}>{column}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {columns.map((column) => (
                <TableCell key={column}>{row[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsTable;
