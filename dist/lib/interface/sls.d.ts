export interface LogConfig {
    project: string;
    logstore: string;
}
export interface LogsProps {
    regionId: string;
    project: string;
    logstore: string;
    topic: string;
    query: string;
}
export declare function isLogConfig(args: any): args is LogConfig;
