import { serialize } from 'object-to-formdata';
import { fetchCount } from "../../services/counter.api";

export class CounterFacade {
    static counterAsync(payload: number) {
        return fetchCount(payload);
    }
}
