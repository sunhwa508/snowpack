import { h, render } from 'preact';
import  { App } from './App'
import { Suspense, lazy } from 'preact/compat';

const dom = document.getElementById('root');
render(<App />, dom);
