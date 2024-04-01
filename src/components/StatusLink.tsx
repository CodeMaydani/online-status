import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from './ui/button';
import { Status } from '@/types/db.types';
import { statusIcons } from './AreaStatus';
import { PropsWithChildren } from 'react';

interface StatusLinkProps extends PropsWithChildren {
  link: string;
  status: Status;
}

function StatusLink({ link, status, children }: StatusLinkProps) {
  return (
    <Link
      to={link}
      className={cn(
        buttonVariants({ variant: 'outline' }),
        'justify-start space-x-4 ',
      )}
    >
      {statusIcons[status]}
      <p>{children}</p>
    </Link>
  );
}

export default StatusLink;
