import React from 'react'
import ReactDOM from 'react-dom/client'

const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Lets Pair!</h1>
      </header>
      <main>
        <h2>Submit a project idea</h2>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" name="first-name" type="text" />

          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" name="last-name" type="text" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="title">Project Title</label>
          <input id="title" name="title" type="text" />

          <label htmlFor="description">Project Description</label>
          <textarea id="description" name="description" rows={4} cols={50}/>

          <button type="submit">Submit Your Project</button>
        </form>
      </main>
    </>
  )
}

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(<App />)
