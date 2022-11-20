export class Logger {
	static error(source: string, message: Record<string, unknown>): void {
		const log = JSON.stringify({source, ...message});
		console.error(log);
	}

	static info(source: string, message: Record<string, unknown>): void {
		const log = JSON.stringify({source, ...message});
		console.info(log);
	}
}
