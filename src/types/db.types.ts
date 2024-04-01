export type Status = 'operational' | 'unstable' | 'no-connection';

export type ConnectionType = {
    id: number;
    name: string;
    snStatus: Status;
    agStatus: Status;
    lastUpdated: Date;
};