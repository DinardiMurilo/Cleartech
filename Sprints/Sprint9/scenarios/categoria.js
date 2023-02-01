import http from 'k6/http';
import { sleep } from 'k6';
import { Trend, Rate, Counter } from "k6/metrics";
import { check, fail } from "k6";


export let GetCategoriaDuration = new Trend('get_categoria_duration');
export let GetCategoriaFailRate = new Rate('get_categoria_fail_rate');
export let GetCategoriaSuccessRate = new Rate('get_categoria_success_rate');
export let GetCategoriaReqs = new Rate('get_categoria_reqs');

export default function () {
    let res = http.get('https://localhost:5001/categoria')
    
    GetCategoriaDuration.add(res.timings.duration);
    GetCategoriaReqs.add(1);
    GetCategoriaFailRate.add(res.status == 0 || res.status > 399);
    GetCategoriaSuccessRate.add(res.status == 200);

    let durationMsg = 'Max Duration ${1000/1000}s'
    if(!check(res, {
        'max duration': (r) => r.timings.duration < 2000,
    })){
        fail(durationMsg);
    }
    
    sleep(1);

}