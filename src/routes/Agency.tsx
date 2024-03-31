import Status from '@/components/Status';

function Agency() {
  return (
    <div className="space-y-4">
      <Status name="Facebook" status="operational" />
      <Status name="Twitter" status="unstable" />
      <Status name="Youtube" status="operational" />
    </div>
  );
}

export default Agency;
