import { app, Component } from 'apprun'

import './wc-counter'

export class Container extends Component {
  state = 11
  toggle = true

  view = (state: number) => {
    return (
      <>
        <button $onclick='dec'>pass -1</button>
        <button $onclick='inc'>pass +1</button>
        <wc-counter type='click-me' count={state} handleCount={(n: number) => this.run('change', n)} />
        <wc-counter type='no-click' count={state} />
        <wc-counter type='just-type' />
      </>
    )
  }

  update = {
    'inc': (state: number) => state + 1,
    'dec': (state: number) => state - 1,
    'change': (state: number, n: number) => {
      this.toggle = !this.toggle
      return state + (this.toggle ? n : - n)
    }
  }
}

app.webComponent('wc-container', Container, {
  shadow: true
})
