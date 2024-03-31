import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export type Status = 'operational' | 'unstable' | 'no-connection';

type StatusProps = {
  name: string;
  snStatus: Status;
  agStatus: Status;
  link?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
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
  icon: Icon,
  lastUpdated,
}: StatusProps) {
  let status: Status = 'operational';

  if (agStatus === 'unstable' || snStatus === 'unstable') status = 'unstable';
  else if (agStatus === 'no-connection' || snStatus === 'no-connection')
    status = 'no-connection';

  return (
    <>
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
            <Link
              to={link}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'justify-start space-x-4 ',
              )}
            >
              {statusIcons[snStatus]}
              <p>Social Network</p>
            </Link>
            <Link
              to={link}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'justify-start space-x-4 ',
              )}
            >
              {statusIcons[agStatus]}
              <p>Agency</p>
            </Link>
          </div>
        </div>
        <p className="text-sm">Last Updated: {lastUpdated.toISOString()}</p>
      </div>
    </>
  );
}

export default AreaStatus;
