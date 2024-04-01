import ConnectionsSection from '@/components/ConnectionsSection';
import { ModeToggle } from '@/components/mode-toggle';
import { getConnections } from '@/db/connections';
import { AsyncReturnType } from '@/types';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const connections = await getConnections();
  return { connections };
}

export default function Root() {
  const { connections } = useLoaderData() as AsyncReturnType<typeof loader>;

  return (
    <div className="h-screen">
      <div className="absolute left-4 top-4">
        <ModeToggle />
      </div>
      <main className="container max-w-2xl p-4">
        <p className="text-center text-3xl">Web Status Site</p>
        <p className="text-center">check status here</p>
        <ConnectionsSection connections={connections} />
      </main>
    </div>
  );
}
