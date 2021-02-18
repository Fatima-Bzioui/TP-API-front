import React from 'react'
import APIService from '../service/APIService.js'

export default class NewsComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             news: []
        }
    }
    
    componentDidMount(){
        APIService.getAllNews().then((data) => {
            this.setState({ news: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">News Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Titre</th>
                            <th>Article</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.news.map(news =>
                                    <tr key={news.id}>
                                        <td>{news.id}</td>
                                        <td>{news.titre}</td>
                                        <td>{news.article}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}