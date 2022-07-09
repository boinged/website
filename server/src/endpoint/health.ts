import {IBody} from '../model/iBody';

import {IEndpoint} from './iEndpoint';

export class Health implements IEndpoint {
	async execute(body: IBody): Promise<string> {
		return 'OK';
	}
}
