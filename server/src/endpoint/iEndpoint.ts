import {IBody} from '../model/iBody';

export interface IEndpoint {
	execute(body: IBody): Promise<string>;
}
