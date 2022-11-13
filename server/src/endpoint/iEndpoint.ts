import {IBody} from '../model/iBody';
import {IResult} from '../model/iResult';

export interface IEndpoint {
	execute(body: IBody): Promise<IResult>;
}
