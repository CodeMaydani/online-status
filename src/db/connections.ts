import { ConnectionType } from "@/types/db.types";

export async function getConnections() {
    const connections: ConnectionType[] = [
        {
            id: 1,
            name: 'Lebanon',
            snStatus: 'no-connection',
            agStatus: 'operational',
            lastUpdated: new Date(),
        },
        {
            id: 2,
            name: 'Gaza',
            snStatus: 'no-connection',
            agStatus: 'unstable',
            lastUpdated: new Date(),
        },
        {
            id: 3,
            name: 'Else',
            snStatus: 'operational',
            agStatus: 'operational',
            lastUpdated: new Date(),
        },
        {
            id: 4,
            name: 'Moon',
            snStatus: 'unstable',
            agStatus: 'operational',
            lastUpdated: new Date(),
        },
    ];

    return connections
}