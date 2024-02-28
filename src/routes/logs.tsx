import {
  ConnectionLog,
  OperationInfoTable,
} from '@/components/ConnectionTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AsyncReturnType } from '@/types';
import { LoaderFunctionArgs, Outlet, useLoaderData } from 'react-router-dom';
import uniqid from 'uniqid';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  const connectionLogs: ConnectionLog[] = [
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'no-connection',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
  ];
  return { connection, connectionLogs };
}

function Logs() {
  const { connection, connectionLogs } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  return (
    <div className="h-screen p-4">
      <p className="text-center text-3xl">{connection}</p>
      <div className="container mt-32 flex justify-between">
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <OperationInfoTable
              data={connectionLogs}
              headers={['Log Id', 'Last updated', 'Status']}
            />
          </TabsContent>
          <TabsContent value="password">
            <OperationInfoTable
              data={connectionLogs}
              headers={['Log Id', 'Last updated', 'Status']}
            />
          </TabsContent>
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
}

export default Logs;
