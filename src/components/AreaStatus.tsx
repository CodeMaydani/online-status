import { Status } from '@/types/db.types';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import StatusLink from './StatusLink';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

type StatusProps = {
  name: string;
  snStatus: Status;
  agStatus: Status;
  link?: string;
  lastUpdated: Date;
};

export const statusIcons: Record<Status, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

function AreaStatus({
  name,
  agStatus,
  snStatus,
  link = '',
  lastUpdated,
}: StatusProps) {
  let status: Status = 'operational';

  if ([agStatus, snStatus].includes('no-connection')) status = 'no-connection';
  else if ([agStatus, snStatus].includes('unstable')) status = 'unstable';

  return (
    <div>
      <div className="flex">
        <div className="flex h-fit flex-1 items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  className="rounded-full p-2"
                >
                  {statusIcons[status]}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{status}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <p className="text-lg">{name}</p>
        </div>
        <div className="flex flex-col gap-2">
          <StatusLink link={link} status={snStatus}>
            Social Network
          </StatusLink>
          <StatusLink link={link} status={agStatus}>
            Agency
          </StatusLink>
        </div>
      </div>
      <p className="text-sm">Last Updated: {lastUpdated.toISOString()}</p>
    </div>
  );
}

export default AreaStatus;
