export class Logger {
	static error(source: string, message: Record<string, unknown>): void {
		console.error({source, ...message});
	}

	static info(source: string, message: Record<string, unknown>): void {
		console.info({source, ...message});
	}
}
