import Router from 'next/router'

class Informator extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let href = '/docs-and-forms/formSubmitted'
        let as = href
        Router.replace(href, as, { shallow: true })
    }

    render() {
        return <div>form submitted</div>
    }
}

export default Informator
