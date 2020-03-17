import { app, Component } from 'apprun'

interface IProps {
  type?: string
  count?: number
  handleCount?: (n: number) => void
}

const style = `
h1 { color: red; pointer: cursor }
h1.clickable { background: var(--background-h1-clickable); user-select: none; }
`

export class Counter extends Component {
  props: IProps = {}
  state: number = 0

  view = (state: number, props: IProps = this.props) => {
    const { type, count = 0, handleCount } = props
    const clickable = typeof handleCount === 'function'
    return (
      <>
        <style innerHTML={style} />
        {type
          ? <h1
            className={clickable && 'clickable'}
            onclick={() => handleCount((count / 2) | 0)}
            >
              {type} {count ? count : ''}
            </h1>
          : null
        }
        <h2>{state}</h2>
        <button $onclick='-1'>-1</button>
        <button $onclick='+1'>+1</button>
      </>
    )
  }

  update = {
    '+1': (state: number) => state + 1,
    '-1': (state: number) => state - 1,
    'attributeChanged': (state, name, oldValue, value) => {
      console.log({state, name, oldValue, value})
    }
  }

  mounted = (props: IProps, children: any, state: number):number => {
    this.props = props
    return state
  }
}

app.webComponent('wc-counter', Counter, {
  shadow: true,
  observedAttributes: ['type', 'count', 'handleCount']
})
