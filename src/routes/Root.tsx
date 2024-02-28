import Status from '@/components/Status';
import { ModeToggle } from '@/components/mode-toggle';

export default function Root() {
  return (
    <div className="h-screen">
      <div className="absolute left-4 top-4">
        <ModeToggle />
      </div>
      <div className="container max-w-2xl p-4">
        <p className="text-center text-3xl">Web Status Site</p>
        <p className="text-center">check status here</p>
        <div className="mt-32 space-y-4">
          <Status link="/log/Lebanon" name="Lebanon" status="operational" />
          <Status link="/log/Gaza" name="Gaza" status="unstable" />
          <Status link="/log/Else" name="Else" status="no-connection" />
          <Status link="/log/Moon" name="Moon" status="no-connection" />
          <Status link="/log/Moon" name="Moon" status="no-connection" />
          <Status link="/log/Moon" name="Moon" status="no-connection" />
          <Status link="/log/Moon" name="Moon" status="no-connection" />
          <Status link="/log/Moon" name="Moon" status="no-connection" />
          <Status link="/log/Moon" name="Moon" status="no-connection" />
        </div>
      </div>
    </div>
  );
}
