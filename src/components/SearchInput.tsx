import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search, X } from 'lucide-react';
import { Button } from './ui/button';

interface SearchInputProps {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  cancelAction: (...args: any[]) => void;
}

function SearchInput({
  inputProps: { className, ...inputProps },
  cancelAction,
}: SearchInputProps) {
  return (
    <div className="relative flex">
      <Input className={cn('pr-16', className)} {...inputProps} />
      <Search className="absolute right-2 top-2" />
      <Button
        variant={'ghost'}
        className={cn('absolute right-8 top-1 h-8 w-8 rounded-full p-0', {
          hidden: !inputProps.value,
        })}
        onClick={cancelAction}
      >
        <X />
      </Button>
    </div>
  );
}

export default SearchInput;
