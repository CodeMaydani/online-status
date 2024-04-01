import ConnectionStatus from '@/components/ConnectionStatus';

function SocialNetwork() {
  return (
    <div className="space-y-4">
      <ConnectionStatus name="Facebook" status="operational" />
      <ConnectionStatus name="Twitter" status="unstable" />
      <ConnectionStatus name="Youtube" status="operational" />
    </div>
  );
}

export default SocialNetwork;
