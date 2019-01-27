import Router from 'next/router'

class InputForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleSubmit(e) {
        Router.push(
            {
                pathname: '/api/submitForm',
                query: { text: this.state.value }
            },
            '/api/submitForm/' + this.state.value
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='elo' />
                </form>
            </div>
        )
    }
}

export default InputForm
