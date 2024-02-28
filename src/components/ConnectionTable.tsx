import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Status, statusIcons } from './Status';
import { useNavigate } from 'react-router-dom';

export interface ConnectionLog {
  logid: string;
  time: string;
  status: Status;
}

interface ConnectionTableProps {
  data: (Record<string, any> & { status: Status })[];
  headers: string[];
}

export function OperationInfoTable({ data, headers }: ConnectionTableProps) {
  const navigation = useNavigate();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead>{header}</TableHead>
          ))}
          {/* <TableHead className="w-[200px]">Log Id</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead> */}
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((connectionLog) => (
          <TableRow
            onClick={() => navigation(`network/${connectionLog.logid}`)}
            key={connectionLog.logid}
          >
            {Object.values(connectionLog).map((value) => (
              <TableCell>{value}</TableCell>
            ))}
            {/* <TableCell className="font-medium">{connectionLog.logid}</TableCell>
            <TableCell>{connectionLog.time}</TableCell>
            <TableCell>{connectionLog.status}</TableCell> */}
            <TableCell className="text-right">
              {statusIcons[connectionLog.status]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
