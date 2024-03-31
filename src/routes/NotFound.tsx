import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import confusedCat from '../assets/catconfused-ezgif.com-loop-count.gif';
import { cn } from '@/lib/utils';

function NotFound() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex flex-col items-center">
        <img src={confusedCat} alt="" />
        <p className="mb-8 text-5xl">What is this place?</p>
        <Link to={'/'} className={cn(buttonVariants())}>
          Back to safety
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
