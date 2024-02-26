import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Status, statusIcons } from './Status';

export interface ConnectionLog {
  logid: string;
  time: string;
  status: Status;
}

interface ConnectionTableProps {
  ConnectionLogs: ConnectionLog[];
}

export function ConnectionTable({ ConnectionLogs }: ConnectionTableProps) {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Log Id</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ConnectionLogs.map((connectionLog) => (
          <TableRow key={connectionLog.time}>
            <TableCell className="font-medium">{connectionLog.logid}</TableCell>
            <TableCell>{connectionLog.time}</TableCell>
            <TableCell>{connectionLog.status}</TableCell>
            <TableCell className="text-right">
              {statusIcons[connectionLog.status]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
