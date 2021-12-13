import React from 'react'
import styles from './styles.module.css'
import { MyComponent } from '../Components/MyComponent'
import { Link, Route } from 'wouter-preact'
import {Suspense, lazy} from 'preact/compat'

const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));

const Dashboard = () => {
  return(
    <h1>dash board</h1>
  )
}

const Account = lazy(async() => {
  await sleep(3000);
  return import("./Account");
})

const App = () => {
  return(
    <div className={styles.main}>
      <MyComponent name="hello"/>
      <ul>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/welcome/zaiste">name</Link></li>
        <li><Link href="/dashboard">DashBoard</Link></li>
        <li><Link href="/account">Account</Link></li>
      </ul>
      <Route path="/about">This is an about page</Route>
      <Route path="/welcome/:name">
        {({name}) => <h2>Welcome {name}</h2>}
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    <Suspense>    
      <Route path="/account">
        <Account />
      </Route>
    </Suspense>
    </div>
  )
}

export { App }