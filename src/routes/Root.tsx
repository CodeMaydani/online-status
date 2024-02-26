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
          <Status link="Lebanon" name="Lebanon" status="operational" />
          <Status link="Gaza" name="Gaza" status="unstable" />
          <Status link="Else" name="Else" status="no-connection" />
          <Status link="Moon" name="Moon" status="no-connection" />
          <Status link="Moon" name="Moon" status="no-connection" />
          <Status link="Moon" name="Moon" status="no-connection" />
          <Status link="Moon" name="Moon" status="no-connection" />
          <Status link="Moon" name="Moon" status="no-connection" />
          <Status link="Moon" name="Moon" status="no-connection" />
        </div>
      </div>
    </div>
  );
}
