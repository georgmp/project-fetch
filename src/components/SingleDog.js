import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'


class SingleDog extends React.Component {
  constructor() {
    super()
    this.state = {
      dog: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`)
      .then(resp => this.setState({ dog: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))




  }

  addFavs() {
    localStorage.setItem(this.state.dog[0].breeds[0].id, [this.state.dog[0].url, this.state.dog[0].breeds[0].name])
    console.log({ ...localStorage })
  }

  render() {
    console.log(this.state.dog)
    if (this.state.dog.length === 0) {
      return null
    }
    // console.log(this.state.dog[0].url)
    return <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          <div className="column is-half-tablet">
            <img src={this.state.dog[0].url} />
          </div>
          <div className="column is-half-tablet">
            <p className="title">{this.state.dog[0].breeds[0].name}</p>
            <p className="subtitle">Origin: {this.state.dog[0].breeds[0].origin}</p>
            <p>Weight: {this.state.dog[0].breeds[0].weight.metric} kg</p>
            <p>Height: {this.state.dog[0].breeds[0].height.metric} cm</p>
            <p>Bred for: {this.state.dog[0].breeds[0].bred_for}</p>
            <p>Breed group: {this.state.dog[0].breeds[0].breed_group}</p>
            <p>Life span: {this.state.dog[0].breeds[0].life_span}</p>
            <p>Temperament: {this.state.dog[0].breeds[0].temperament}</p>
            <br />
            <div className="button is-rounded" onClick={() => this.addFavs()}>
              like
            </div>
          </div>
        </div>
      </div>
     
    </div>
    // console.log('yo ', this.state.wine)
    // if (this.state.err === 404) {
    //   return <h1>404</h1>
    // }
    // return <div className="section">
    //   <div className="container">
    //     <div className="columns is-mobile is-multiline">
    //       <div className="column is-half-tablet">
    //         <p className="title">
    //           {this.state.wine.name}
    //         </p>
    //         <p className="subtitle">
    //           {this.state.wine.origin}
    //         </p>
    //         <p className="">
    //           {this.state.wine.tastingNotes}
    //         </p>
    //         <Link className="button is-info" to={`/wines/edit/${this.state.wine._id}`}>
    //           Edit wine
    //         </Link>
    //       </div>
    //       <div className="column is-half-tablet">
    //         <img src={this.state.wine.image} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  }
}

export default SingleDog