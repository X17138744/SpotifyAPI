//Information for the second panael with created Javascript that paths and leads its way back to the original site. Imports are taken using Node.js amd the React app.
//This code was used and then modifed by myself with the help of "CodingEntrepreneurs"
import React, { Component } from 'react'
import PostData from '../data/posts.json'
import '../App.css';


class Information extends Component {
	render () {
		return (
			<div class = "a1">
			{PostData.map((postDetail, index)=>{
				return <div>
				<p>{postDetail.history}</p>
				<p>{postDetail.success}</p>
				</div>
			})}
			</div>
		)
	}
}

export default Information