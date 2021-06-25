import React from 'react'
import { requestOptions, url } from '../constants'
import { formatDate } from '../utils/utilities'

const CustomisableFootballFeed = (props) => (WrappedComponent) => {
  class CustomisableFootballFeed extends React.Component {
    constructor() {
      super()
      this.state = {
        results: [],
        loading: true,
        error: '',
      }
    }

    fetchData(startDate, endDate) {
      try {
        fetch(
          `${url}?dateFrom=${startDate}&dateTo=${endDate}&competitions=${
            props.competitions || ''
          }`,
          requestOptions,
        )
          .then((response) => response.json())
          .then((matches) =>
            this.setState(
              (prevState) => {
                return {
                  results: [...prevState.results, ...matches.matches],
                  loading: false,
                }
              },
              () => console.log(this.state.loading),
            ),
          )
          .catch((error) => console.log('error', error))
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        })
      }
    }

    componentDidMount() {
      const today = new Date()
      const iteration = props.numberOfDays / 10
      for (let i = 0; i < iteration; i++) {
        this.fetchData(
          formatDate(new Date().setDate(today.getDate() - (i * 10 + 9))),
          formatDate(new Date().setDate(today.getDate() - i * 10)),
        )
      }
    }

    render() {
      const { results, loading, error } = this.state

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      )
    }
  }

  CustomisableFootballFeed.displayName = `CustomisableFootballFeed(${WrappedComponent.name})`

  return CustomisableFootballFeed
}

export default CustomisableFootballFeed
