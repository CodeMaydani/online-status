import ConnectionsSection from '@/components/ConnectionsSection';
import { Status } from '@/components/Status';
import { ModeToggle } from '@/components/mode-toggle';
import { AsyncReturnType } from '@/types';
import { Moon } from 'lucide-react';
import { useLoaderData } from 'react-router-dom';
import Logo from '../assets/lebanon.svg?react';

export type ConnectionType = {
  id: number;
  name: string;
  snStatus: Status;
  agStatus: Status;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  lastUpdated: Date;
};

export async function loader() {
  const connections: ConnectionType[] = [
    {
      id: 1,
      name: 'Lebanon',
      snStatus: 'no-connection',
      agStatus: 'operational',
      icon: Logo,
      lastUpdated: new Date(),
    },
    {
      id: 2,
      name: 'Gaza',
      snStatus: 'no-connection',
      agStatus: 'unstable',
      icon: Logo,
      lastUpdated: new Date(),
    },
    {
      id: 3,
      name: 'Else',
      snStatus: 'operational',
      agStatus: 'operational',
      icon: Logo,
      lastUpdated: new Date(),
    },
    {
      id: 4,
      name: 'Moon',
      snStatus: 'unstable',
      agStatus: 'operational',
      icon: () => <Moon />,
      lastUpdated: new Date(),
    },
  ];
  return { connections };
}

export default function Root() {
  const { connections } = useLoaderData() as AsyncReturnType<typeof loader>;
  return (
    <div className="h-screen">
      <div className="absolute left-4 top-4">
        <ModeToggle />
      </div>
      <div className="container max-w-2xl p-4">
        <p className="text-center text-3xl">Web Status Site</p>
        <p className="text-center">check status here</p>
        <ConnectionsSection connections={connections} />
      </div>
    </div>
  );
}
