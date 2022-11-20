import {IBody} from '../model/body';
import {IResult} from '../model/result';

export interface IEndpoint {
	execute(body: IBody): Promise<IResult>;
}
