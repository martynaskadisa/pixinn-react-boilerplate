import React, { Component } from 'react'

const css = []

const collectOrRender = (styles) => {
  let renderedCollection = []

  styles.map((style) => {
    if (__CLIENT__) {
      renderedCollection.push(style._insertCss())
    }

    css.push(style._getCss())
  })

  return renderedCollection
}

export function styleHelper (ComposedComponent, styles) {
  return class Styles extends Component {
    componentWillMount () {
      this.styleRemovers = collectOrRender(styles)
    }

    componentWillUnmount () {
      setTimeout(() => {
        for (let i = 0; i < this.styleRemovers.length; i++) {
          let styleRemover = this.styleRemovers[i]
          typeof styleRemover === 'function' && styleRemover()
        }
      }, 0)
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }
}

export function renderStyles () {
  return css.join('')
}
