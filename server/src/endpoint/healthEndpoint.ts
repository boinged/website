import {IBody} from '../model/body';
import {IHealthResult} from '../model/healthResult';

import {IEndpoint} from './endpoint';

export class HealthEndpoint implements IEndpoint {
	async execute(body: IBody): Promise<IHealthResult> {
		return {health: 'OK'};
	}
}
