import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { statusIcons } from './ConnectionStatus';
import { useNavigate } from 'react-router-dom';
import { Status } from '@/types/db.types';

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
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((connectionLog) => (
          <TableRow
            onClick={() =>
              navigation(`network/${connectionLog.logid}`, { replace: true })
            }
            key={connectionLog.logid}
          >
            {Object.values(connectionLog).map((value) => (
              <TableCell>{value}</TableCell>
            ))}
            <TableCell className="text-right">
              {statusIcons[connectionLog.status]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
