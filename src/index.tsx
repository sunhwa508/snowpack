import { h, render } from 'preact';
import  { App } from './App'

const dom = document.getElementById('root') as Document | Element | ShadowRoot | DocumentFragment;
render(<App />, dom);
