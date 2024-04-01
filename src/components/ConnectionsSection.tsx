import AreaStatus from '@/components/AreaStatus';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import SearchInput from './SearchInput';
import { ConnectionType } from '@/types/db.types';

type ConnectionsSectionProps = {
  connections: ConnectionType[];
};

function ConnectionsSection({ connections }: ConnectionsSectionProps) {
  const [search, setSearch] = useState('');

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mt-32 space-y-4">
      <div className="mb-8">
        <SearchInput
          cancelAction={() => setSearch('')}
          inputProps={{
            placeholder: 'Search',
            onChange: (e) => setSearch(e.target.value),
            value: search,
          }}
        />
      </div>
      {filteredConnections.map((connection) => (
        <div key={connection.id} className="space-y-4">
          <AreaStatus
            key={connection.id}
            {...connection}
            link={connection.name}
          />
          <Separator />
        </div>
      ))}
    </div>
  );
}

export default ConnectionsSection;
