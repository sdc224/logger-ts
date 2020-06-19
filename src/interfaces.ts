export enum LogLevel {
	info,
	warn,
	debug,
	trace,
	error,
}

export interface LogEntry {
	level: keyof typeof LogLevel;
	module: string;
	location?: string;
	message: string;
}

export interface LogOptions {
	minLevels: { [module: string]: keyof typeof LogLevel };
}
