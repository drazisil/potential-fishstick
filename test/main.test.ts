import test from 'ava';
import {getArgs} from '../src/index.ts';

test('getArgs()', t => {
    t.is(getArgs([]).argc, 0);
});