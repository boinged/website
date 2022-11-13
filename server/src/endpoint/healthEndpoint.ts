import {IBody} from '../model/iBody';
import {IHealthResult} from '../model/iHealthResult';

import {IEndpoint} from './iEndpoint';

export class HealthEndpoint implements IEndpoint {
	async execute(body: IBody): Promise<IHealthResult> {
		return {health: 'OK'};
	}
}
