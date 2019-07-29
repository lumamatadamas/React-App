import Cycle from '@cycle/xstream-run';
import xs from 'xstream';
import { makeHTTPDriver } from '@cycle/http';


function main(sources) {

    const request$ = xs.periodic(1000)
    .mapTo({
        url: 'http://localhost:3005',
        category: 'api',
    });

    const response$ = sources.HTTP.select('api')
    .flatten()
    .map(res => res.body)
    .startWith({
        number: 0
    })
    .map(result => result.number)
}

Cycle.run(main, {
    HTTP: makeHTTPDriver()
});