import React from 'react'
import './App.scss'

const Card = () => {
  return (        <div className="card my-card">
    <figure>
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Card Title</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary my-button my-button-primary">Buy Now</button>
      </div>
    </div>
  </div>)
};

const Table = () => {
  return (
    <div className="table-wrapper">
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
    <ul className="list my-list">
      
      <li className="my-list-header">Most played songs this week</li>
      
      <li className="list-row">
        <div className="my-list-number">01</div>
        <div><img className="my-list-image" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
        <div className="list-col-grow">
          <div>Dio Lupa</div>
          <div className="my-list-subtitle">Remaining Reason</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg className="my-list-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
      </li>
      
      <li className="list-row">
        <div className="my-list-number">02</div>
        <div><img className="my-list-image" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
        <div className="list-col-grow">
          <div>Ellie Beilish</div>
          <div className="my-list-subtitle">Bears of a fever</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg className="my-list-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
      </li>
      
      <li className="list-row">
        <div className="my-list-number">03</div>
        <div><img className="my-list-image" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
        <div className="list-col-grow">
          <div>Sabrino Gardener</div>
          <div className="my-list-subtitle">Cappuccino</div>
        </div>
        <button className="btn btn-square btn-ghost">
          <svg className="my-list-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
        </button>
      </li>
    </ul>
  )
};

function App() {

  return (
    <>
      <h1>DaisyUI experimentation</h1>
      <br />
      <h2>Standard DaisyUI buttons with no additional styling - this is how they come as standard</h2>
      <div style={{padding: '20px 0', display: 'flex', gap: '20px'}}>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-error">Error</button>
      </div>

      <br /><br /><br />

      <h2>Customised DaisyUI buttons incorporating the default styles plus some I've overridden or added with SCSS</h2>
      <div style={{padding: '20px 0', display: 'flex', gap: '20px'}}>
        <button className="btn btn-primary my-button my-button-primary">Customised primary button</button>
        <button className="btn btn-secondary my-button my-button-secondary">Customised secondary button</button>
        <button className="btn btn-accent my-button">Customised accent button</button>
      </div>
      

      <br /><br /><br />


      <div style={{padding: '20px 0', display: 'flex', gap: '20px'}}>
        <Card />
        <Card />
        <Card />
      </div>

      <br /><br /><br />

      <Table />

      <br /><br /><br />
      <h2>List component</h2>
      <p>The list component as it came from the DaisyUI website seems to rely more heavily on Tailwind
        classes than the other components I've used, which means when you remove the Tailwind classes it doesn't look like the website.
        I had to get Cursor to translate the Tailwind classes into SCSS. Not a massive problem but something to be aware of - some components come with more "out of the box" styling than others.</p>
      <List />

    </>
  )
}

export default App
