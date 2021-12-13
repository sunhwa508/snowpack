import React from 'react'
import styles from './styles.module.css'
import { MyComponent } from '../Components/MyComponent'
import { Link, Route } from 'wouter-preact'

const Dashboard = () => {
  return(
    <h1>dash board</h1>
  )
}
const App = () => {
  return(
    <div className={styles.main}>
      <MyComponent name="hello"/>
      <ul>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/welcome/zaiste">name</Link></li>
        <li><Link href="/dashboard">DashBoard</Link></li>
      </ul>
      <Route path="/about">This is an about page</Route>
      <Route path="/welcome/:name">
        {({name}) => <h2>Welcome {name}</h2>}
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  )
}

export { App }