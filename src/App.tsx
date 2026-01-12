import { useState } from 'react'
import './App.scss'

const Card = () => {
  return (        <div className="card ceri-card">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary ceri-button ceri-button-primary">Buy Now</button>
      </div>
    </div>
  </div>)
};

const Table = () => {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div> 
  )
};

const List = () => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
      
      <li className="list-row">
        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
        <div className="list-col-grow">
          <div>Dio Lupa</div>
          <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
      </li>
      
      <li className="list-row">
        <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
        <div className="list-col-grow">
          <div>Ellie Beilish</div>
          <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
      </li>
      
      <li className="list-row">
        <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
        <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
        <div className="list-col-grow">
          <div>Sabrino Gardener</div>
          <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
      </li>
    </ul>
  )
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div style={{padding: '20px 0', display: 'flex', gap: '20px'}}>
        <button className="btn btn-primary ceri-button ceri-button-primary">Primary button</button>
        <button className="btn btn-secondary ceri-button ceri-button-secondary">Secondary button</button>
        <button className="btn btn-accent ceri-button">Accent button</button>

      </div>

      <div style={{padding: '20px 0', display: 'flex', gap: '20px'}}>
        <Card />
        <Card />
        <Card />
      </div>

      <Table />

      <List />

    </>
  )
}

export default App
